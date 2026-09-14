import { useMemo, useState } from 'react'
import { slug } from '../data/catalogue'
import { buildShoppingList, formatQty, lineState, type Line } from '../domain/shoppingList'
import { uid } from '../domain/store'
import type { CartEntry, Checked, Extra, Ingredient, Recipe } from '../domain/types'
import { Confirm } from '../lib/Confirm'
import { IngredientForm } from './Ingredients'

const norm = (s: string) => slug(s.trim())

type Props = {
  cart: CartEntry[]
  recipes: Recipe[]
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  checked: Checked
  setChecked: (next: Checked) => void
  extras: Extra[]
  setExtras: (next: Extra[]) => void
  onFinish: () => void
  onGoToMeals: () => void
}

export default function ShoppingList({
  cart,
  recipes,
  ingredients,
  setIngredients,
  checked,
  setChecked,
  extras,
  setExtras,
  onFinish,
  onGoToMeals,
}: Props) {
  const [open, setOpen] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [query, setQuery] = useState('')
  const [pending, setPending] = useState<Ingredient | null>(null)
  const [pendingQty, setPendingQty] = useState('')
  const [creating, setCreating] = useState<string | null>(null)
  const [finishing, setFinishing] = useState(false)

  // La liste n'est pas stockée : c'est une fonction pure du panier. Impossible qu'elle
  // se désynchronise, impossible d'avoir une liste périmée.
  const list = useMemo(
    () => buildShoppingList({ cart, recipes, ingredients, extras }),
    [cart, recipes, ingredients, extras],
  )

  const extraIds = useMemo(() => new Set(extras.map((e) => e.ingredientId)), [extras])
  const state = (line: Line) => lineState(line, checked)

  const toggle = (line: Line) => {
    const next = { ...checked }
    if (line.key in next) delete next[line.key]
    else next[line.key] = line.qty
    setChecked(next)
  }

  const addPending = () => {
    if (!pending) return
    const raw = pendingQty.trim().replace(',', '.')
    const n = Number(raw)
    const qty = !raw || !Number.isFinite(n) || n < 0 ? null : n
    setExtras([...extras, { id: uid(), ingredientId: pending.id, qty }])
    setPending(null)
    setPendingQty('')
    setQuery('')
    setAdding(false)
  }

  const removeExtras = (ingredientId: string) => {
    setExtras(extras.filter((e) => e.ingredientId !== ingredientId))
    const next = { ...checked }
    delete next[ingredientId]
    setChecked(next)
  }

  const total = list.groups.reduce((n, g) => n + g.lines.length, 0)
  const remaining = list.groups.reduce((n, g) => n + g.lines.filter((l) => !state(l).done).length, 0)

  const renderLine = (line: Line) => {
    const { checked: isChecked, bumped, done, missing } = state(line)
    return (
      <li key={line.key} className={done ? 'done' : undefined}>
        <div className="check-row">
          <button
            type="button"
            className="check-main"
            aria-pressed={isChecked}
            onClick={() => toggle(line)}
          >
            <span className="box" aria-hidden="true">
              {isChecked ? '✓' : ''}
            </span>
            <span className="check-qty">{formatQty(line.qty, line.unit)}</span>
            <span className="check-name">
              {line.name}
              {bumped && <span className="bumped">+{formatQty(missing, line.unit)}</span>}
            </span>
          </button>

          {extraIds.has(line.key) && (
            <button
              type="button"
              className="row-action"
              onClick={() => removeExtras(line.key)}
              aria-label={`Retirer ${line.name} de la liste`}
            >
              ✕
            </button>
          )}
          <button
            type="button"
            className="row-action chevron"
            aria-expanded={open === line.key}
            aria-label={`Origine de ${line.name}`}
            onClick={() => setOpen(open === line.key ? null : line.key)}
          >
            ⌄
          </button>
        </div>

        {open === line.key && (
          <ul className="sources">
            {line.sources.map((source, i) => (
              <li key={i}>
                <span>{source.recipeName}</span>
                <span>{formatQty(source.qty, line.unit)}</span>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  const q = norm(query)
  const alreadyListed = new Set(list.groups.flatMap((g) => g.lines.map((l) => l.key)))
  const matches = q
    ? ingredients.filter((i) => !alreadyListed.has(i.id) && norm(i.name).includes(q)).slice(0, 6)
    : []
  const exactExists = ingredients.some((i) => norm(i.name) === q)

  if (cart.length === 0 && extras.length === 0) {
    return (
      <div className="empty">
        <p className="muted">Aucun repas sélectionné.</p>
        <button type="button" onClick={onGoToMeals}>
          Choisir des repas
        </button>
      </div>
    )
  }

  return (
    <>
      <p className="list-count muted">
        {remaining === 0
          ? 'Tout est pris.'
          : `${remaining} article${remaining > 1 ? 's' : ''} à prendre sur ${total}.`}
      </p>

      {list.groups.map((group) => (
        <section key={group.aisle} className="group">
          <h2>{group.aisle}</h2>
          <ul className="checklist">
            {/* Le tri est stable : les articles pris glissent en bas du rayon sans perdre
                l'ordre alphabétique entre eux. */}
            {[...group.lines]
              .sort((a, b) => Number(state(a).done) - Number(state(b).done))
              .map(renderLine)}
          </ul>
        </section>
      ))}

      {list.pantry.length > 0 && (
        <details className="pantry">
          <summary>Supposés en stock ({list.pantry.length})</summary>
          <ul className="pantry-lines">
            {list.pantry.map((line) => (
              <li key={line.key}>
                <span className="check-qty">{formatQty(line.qty, line.unit)}</span>
                <span>{line.name}</span>
              </li>
            ))}
          </ul>
          <p className="hint">
            Jette un œil au placard avant de partir : ces ingrédients ne sont pas sur la liste.
          </p>
        </details>
      )}

      {!adding ? (
        <button type="button" className="add-extra" onClick={() => setAdding(true)}>
          + Ajouter un article
        </button>
      ) : pending ? (
        <div className="extra-form">
          <p className="pending-name">{pending.name}</p>
          <div className="pending-qty">
            <input
              inputMode="decimal"
              value={pendingQty}
              onChange={(e) => setPendingQty(e.target.value)}
              placeholder="Quantité"
              aria-label={`Quantité de ${pending.name}`}
              autoFocus
            />
            <span className="item-unit">{pending.unit}</span>
          </div>
          <div className="actions">
            <button type="button" className="ghost" onClick={() => setPending(null)}>
              Retour
            </button>
            <button type="button" className="primary" onClick={addPending}>
              Ajouter
            </button>
          </div>
        </div>
      ) : (
        <div className="extra-form">
          {/* On cherche d'abord dans le catalogue : un article ajouté à la main hérite ainsi
              de son rayon et de son unité, et reste disponible les fois suivantes. */}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un ingrédient…"
            aria-label="Rechercher un ingrédient"
            autoFocus
          />
          {!!query.trim() && (
            <ul className="rows suggestions">
              {matches.map((i) => (
                <li key={i.id}>
                  <button type="button" onClick={() => setPending(i)}>
                    <span className="row-name">{i.name}</span>
                    <span className="row-meta">{i.unit}</span>
                  </button>
                </li>
              ))}
              {!exactExists && (
                <li>
                  <button type="button" className="create" onClick={() => setCreating(query.trim())}>
                    + Créer « {query.trim()} »
                  </button>
                </li>
              )}
            </ul>
          )}
          <button
            type="button"
            className="ghost"
            onClick={() => {
              setAdding(false)
              setQuery('')
            }}
          >
            Annuler
          </button>
        </div>
      )}

      <div className="cart-summary">
        <button type="button" className="primary" onClick={() => setFinishing(true)}>
          Courses terminées
        </button>
      </div>

      {creating !== null && (
        <IngredientForm
          initial={null}
          defaultName={creating}
          ingredients={ingredients}
          usedIn={[]}
          onSave={(ingredient) => {
            setIngredients([...ingredients, ingredient])
            setPending(ingredient)
            setCreating(null)
          }}
          onDelete={() => setCreating(null)}
          onClose={() => setCreating(null)}
        />
      )}

      {finishing && (
        <Confirm
          message="Vider le panier, les articles ajoutés et toutes les cases cochées ?"
          confirmLabel="Terminer"
          onConfirm={() => {
            onFinish()
            setFinishing(false)
          }}
          onCancel={() => setFinishing(false)}
        />
      )}
    </>
  )
}
