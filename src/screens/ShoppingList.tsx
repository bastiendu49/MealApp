import { useMemo, useState } from 'react'
import { buildShoppingList, formatQty, lineState, type Line } from '../domain/shoppingList'
import { uid } from '../domain/store'
import { AISLES, type Aisle, type CartEntry, type Checked, type Extra, type Ingredient, type Recipe } from '../domain/types'
import { Confirm } from '../lib/Confirm'

type Props = {
  cart: CartEntry[]
  recipes: Recipe[]
  ingredients: Ingredient[]
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
  checked,
  setChecked,
  extras,
  setExtras,
  onFinish,
  onGoToMeals,
}: Props) {
  const [open, setOpen] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [extraName, setExtraName] = useState('')
  const [extraAisle, setExtraAisle] = useState<Aisle>('Autres')
  const [finishing, setFinishing] = useState(false)

  // La liste n'est pas stockée : c'est une fonction pure du panier. Impossible qu'elle
  // se désynchronise, impossible d'avoir une liste périmée.
  const list = useMemo(
    () => buildShoppingList({ cart, recipes, ingredients, extras }),
    [cart, recipes, ingredients, extras],
  )

  const extraIds = useMemo(() => new Set(extras.map((e) => e.id)), [extras])

  const isChecked = (line: Line) => lineState(line, checked).checked
  const bumped = (line: Line) => lineState(line, checked).bumped
  const done = (line: Line) => lineState(line, checked).done

  const toggle = (line: Line) => {
    const next = { ...checked }
    if (line.key in next) delete next[line.key]
    else next[line.key] = line.qty
    setChecked(next)
  }

  const addExtra = (e: React.FormEvent) => {
    e.preventDefault()
    const name = extraName.trim()
    if (!name) return
    setExtras([...extras, { id: uid(), name, aisle: extraAisle }])
    setExtraName('')
    setAdding(false)
  }

  const removeExtra = (id: string) => {
    setExtras(extras.filter((e) => e.id !== id))
    if (id in checked) {
      const next = { ...checked }
      delete next[id]
      setChecked(next)
    }
  }

  const total = list.groups.reduce((n, g) => n + g.lines.length, 0)
  const remaining = list.groups.reduce((n, g) => n + g.lines.filter((l) => !done(l)).length, 0)

  const renderLine = (line: Line) => {
    const isExtra = extraIds.has(line.key)
    return (
      <li key={line.key} className={done(line) ? 'done' : undefined}>
        <div className="check-row">
          <button
            type="button"
            className="check-main"
            aria-pressed={isChecked(line)}
            onClick={() => toggle(line)}
          >
            <span className="box" aria-hidden="true">
              {isChecked(line) ? '✓' : ''}
            </span>
            {!isExtra && <span className="check-qty">{formatQty(line.qty, line.unit)}</span>}
            <span className="check-name">
              {line.name}
              {bumped(line) && <span className="bumped">quantité augmentée</span>}
            </span>
          </button>

          {isExtra ? (
            <button
              type="button"
              className="remove"
              onClick={() => removeExtra(line.key)}
              aria-label={`Supprimer ${line.name}`}
            >
              ✕
            </button>
          ) : (
            <button
              type="button"
              className="why"
              aria-expanded={open === line.key}
              aria-label={`Origine de ${line.name}`}
              onClick={() => setOpen(open === line.key ? null : line.key)}
            >
              ⌄
            </button>
          )}
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
        {remaining === 0 ? 'Tout est pris.' : `${remaining} article${remaining > 1 ? 's' : ''} à prendre sur ${total}.`}
      </p>

      {list.groups.map((group) => (
        <section key={group.aisle} className="group">
          <h2>{group.aisle}</h2>
          <ul className="rows checklist">
            {/* Le tri est stable : les articles pris glissent en bas du rayon sans perdre
                l'ordre alphabétique entre eux. */}
            {[...group.lines].sort((a, b) => Number(done(a)) - Number(done(b))).map(renderLine)}
          </ul>
        </section>
      ))}

      {list.pantry.length > 0 && (
        <details className="pantry">
          <summary>Supposés en stock ({list.pantry.length})</summary>
          <ul className="rows">
            {list.pantry.map((line) => (
              <li key={line.key}>
                <span className="pantry-line">
                  <span className="check-qty">{formatQty(line.qty, line.unit)}</span>
                  <span>{line.name}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="hint">
            Jette un œil au placard avant de partir : ces ingrédients ne sont pas sur la liste.
          </p>
        </details>
      )}

      {adding ? (
        <form className="extra-form" onSubmit={addExtra}>
          <input
            value={extraName}
            onChange={(e) => setExtraName(e.target.value)}
            placeholder="Papier toilette, café…"
            aria-label="Nom de l’article"
            autoFocus
          />
          <select
            value={extraAisle}
            onChange={(e) => setExtraAisle(e.target.value as Aisle)}
            aria-label="Rayon"
          >
            {AISLES.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
          <div className="actions">
            <button type="button" className="ghost" onClick={() => setAdding(false)}>
              Annuler
            </button>
            <button type="submit" className="primary" disabled={!extraName.trim()}>
              Ajouter
            </button>
          </div>
        </form>
      ) : (
        <button type="button" className="add-extra" onClick={() => setAdding(true)}>
          + Ajouter un article
        </button>
      )}

      <div className="cart-summary">
        <button type="button" className="primary" onClick={() => setFinishing(true)}>
          Courses terminées
        </button>
      </div>

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
