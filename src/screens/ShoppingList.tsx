import { useMemo, useState } from 'react'
import { buildShoppingList, formatQty, lineState, type Line } from '../domain/shoppingList'
import { uid } from '../domain/store'
import type { CartEntry, Checked, Extra, Ingredient, Recipe } from '../domain/types'
import { Confirm } from '../lib/Confirm'
import { IconCheck, IconChevron, IconClose, IconPlus } from '../lib/icons'
import AddExtraSheet from './AddExtraSheet'
import { ScreenHeader } from './common'
import { IngredientForm } from './Ingredients'

type Props = {
  cart: CartEntry[]
  recipes: Recipe[]
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  checked: Checked
  setChecked: (next: Checked) => void
  extras: Extra[]
  setExtras: (next: Extra[]) => void
  recentExtras: string[]
  onExtraAdded: (ingredientId: string) => void
  onFinish: () => void
  onGoToMenu: () => void
  onSettings: () => void
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
  recentExtras,
  onExtraAdded,
  onFinish,
  onGoToMenu,
  onSettings,
}: Props) {
  const [open, setOpen] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)
  const [pending, setPending] = useState<Ingredient | null>(null)
  const [creating, setCreating] = useState<string | null>(null)
  const [finishing, setFinishing] = useState(false)

  // La liste n'est pas stockée : c'est une fonction pure du menu. Impossible qu'elle
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

  const removeExtras = (ingredientId: string) => {
    setExtras(extras.filter((e) => e.ingredientId !== ingredientId))
    const next = { ...checked }
    delete next[ingredientId]
    setChecked(next)
  }

  const total = list.groups.reduce((n, g) => n + g.lines.length, 0)
  const done = list.groups.reduce((n, g) => n + g.lines.filter((l) => state(l).done).length, 0)
  const listed = new Set(list.groups.flatMap((g) => g.lines.map((l) => l.key)))
  const byId = new Map(ingredients.map((i) => [i.id, i]))
  const recent = recentExtras.flatMap((id) => {
    const i = byId.get(id)
    return i && !listed.has(id) ? [i] : []
  })

  /** Sous-titre d'une ligne : les plats qui la demandent, sans doublon. */
  const origin = (line: Line) => [...new Set(line.sources.map((s) => s.recipeName))].join(' · ')

  const renderLine = (line: Line) => {
    const { checked: isChecked, bumped, done: isDone, missing } = state(line)
    return (
      <li key={line.key} className={isDone ? 'done' : undefined}>
        <div className="check-row">
          <button type="button" className="check-main" aria-pressed={isChecked} onClick={() => toggle(line)}>
            <span className="box" aria-hidden="true">
              {isChecked && <IconCheck size={18} />}
            </span>
            <span className="check-text">
              <span className="check-name">
                {line.name}
                {extraIds.has(line.key) && <span className="tag">ajouté</span>}
                {bumped && <span className="bumped">+{formatQty(missing, line.unit)}</span>}
              </span>
              <span className="check-origin">{origin(line)}</span>
            </span>
            <span className="check-qty">{formatQty(line.qty, line.unit)}</span>
          </button>

          {extraIds.has(line.key) && (
            <button
              type="button"
              className="row-action"
              onClick={() => removeExtras(line.key)}
              aria-label={`Retirer ${line.name} de la liste`}
            >
              <IconClose size={18} />
            </button>
          )}
          {line.sources.length > 1 && (
            <button
              type="button"
              className="row-action chevron"
              aria-expanded={open === line.key}
              aria-label={`Détail des quantités de ${line.name}`}
              onClick={() => setOpen(open === line.key ? null : line.key)}
            >
              <IconChevron size={18} />
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

  // Un rayon entièrement pris passe en bas : le haut de l'écran ne montre alors que les rayons
  // où il reste quelque chose à prendre. Le tri est stable, l'ordre de traversée du magasin est
  // donc conservé à l'intérieur de chacun des deux blocs.
  const groups = [...list.groups].sort(
    (a, b) => Number(a.lines.every((l) => state(l).done)) - Number(b.lines.every((l) => state(l).done)),
  )

  const subtitle =
    total === 0
      ? 'Rien à acheter pour l’instant'
      : `${cart.length} repas · ${done} sur ${total} pris`

  return (
    <>
      <ScreenHeader title="Courses" subtitle={subtitle} onSettings={onSettings} />

      {total > 0 && (
        <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done}>
          <div style={{ width: `${(done / total) * 100}%` }} />
        </div>
      )}

      {/* Toujours accessible, même sans aucun repas : on doit pouvoir noter « café » à tout moment. */}
      <button type="button" className="dashed strong" onClick={() => setAdding(true)}>
        <IconPlus size={20} /> Ajouter un article (café, papier toilette…)
      </button>

      {total === 0 && (
        <div className="empty">
          <p className="muted">Ta liste est vide. Compose ton menu, ou ajoute un article à la main.</p>
          <button type="button" className="ghost-btn" onClick={onGoToMenu}>
            Composer mon menu
          </button>
        </div>
      )}

      {groups.map((group) => (
        <section
          key={group.aisle}
          className={group.lines.every((l) => state(l).done) ? 'aisle aisle-done' : 'aisle'}
        >
          <h2>{group.aisle}</h2>
          <ul className="checklist">
            {/* Tri stable : les articles pris glissent en bas du rayon sans perdre l'ordre entre eux. */}
            {[...group.lines].sort((a, b) => Number(state(a).done) - Number(state(b).done)).map(renderLine)}
          </ul>
        </section>
      ))}

      {list.pantry.length > 0 && (
        <details className="pantry">
          <summary>Supposés en stock ({list.pantry.length}) — à vérifier au placard</summary>
          <ul className="pantry-lines">
            {list.pantry.map((line) => (
              <li key={line.key}>
                <span>{line.name}</span>
                <span className="check-qty">{formatQty(line.qty, line.unit)}</span>
              </li>
            ))}
          </ul>
          <p className="hint">
            Ces ingrédients ne sont pas sur la liste. S’il en manque, ajoute-les avec « Ajouter un article ».
          </p>
        </details>
      )}

      {(total > 0 || cart.length > 0) && (
        <button type="button" className="ghost-btn wide finish" onClick={() => setFinishing(true)}>
          Courses terminées
        </button>
      )}

      {adding && creating === null && (
        <AddExtraSheet
          ingredients={ingredients}
          listed={listed}
          recent={recent}
          initialPending={pending}
          onAdd={(ingredient, qty) => {
            setExtras([...extras, { id: uid(), ingredientId: ingredient.id, qty }])
            onExtraAdded(ingredient.id)
            setPending(null)
            setAdding(false)
          }}
          onCreate={(name) => setCreating(name)}
          onClose={() => {
            setPending(null)
            setAdding(false)
          }}
        />
      )}

      {creating !== null && (
        <IngredientForm
          initial={null}
          defaultName={creating}
          ingredients={ingredients}
          usedIn={[]}
          onSave={(ingredient) => {
            setIngredients([...ingredients, ingredient])
            // On revient dans la feuille d'ajout, l'article tout juste créé prêt à être chiffré.
            setPending(ingredient)
            setCreating(null)
          }}
          onDelete={() => setCreating(null)}
          onClose={() => setCreating(null)}
        />
      )}

      {finishing && (
        <Confirm
          message="Vider le menu, les articles ajoutés et toutes les cases cochées ?"
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
