import { useEffect, useMemo, useRef, useState } from 'react'
import { slug } from '../data/catalogue'
import { AISLES, COMMON_UNITS, type Aisle, type Ingredient, type Recipe } from '../domain/types'
import { useBackGuard } from '../lib/useBackGuard'
import { uid } from '../domain/store'

/** Comparaison tolérante aux accents et à la casse, pour empêcher « Oignon » et « oignon ». */
const norm = (s: string) => slug(s.trim())

/**
 * Choix de l'unité : liste complète défilante + recherche, et création si elle manque.
 * Rendu dans le même <dialog> que le formulaire plutôt qu'en modale imbriquée, pour ne pas
 * empiler deux couches sur un écran de téléphone.
 */
function UnitPicker({
  current,
  units,
  onPick,
  onClose,
}: {
  current: string
  units: string[]
  onPick: (unit: string) => void
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  useBackGuard(onClose)

  const q = norm(query)
  const matches = q ? units.filter((u) => norm(u).includes(q)) : units
  const exact = units.some((u) => norm(u) === q)

  return (
    <div className="sheet">
      <div className="picker-head">
        <button type="button" className="link" onClick={onClose}>
          ‹ Retour
        </button>
        <h2>Unité</h2>
      </div>

      {/* Pas de focus automatique : la liste doit être visible et parcourable d'emblée,
          on ne tape que si l'unité cherchée n'est pas sous les yeux. */}
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher une unité"
        aria-label="Rechercher une unité"
      />

      <ul className="rows unit-list">
        {matches.map((unit) => (
          <li key={unit}>
            <button
              type="button"
              onClick={() => onPick(unit)}
              aria-current={unit === current ? 'true' : undefined}
            >
              <span className="row-name">{unit}</span>
              {unit === current && <span className="row-meta">✓</span>}
            </button>
          </li>
        ))}
        {!!query.trim() && !exact && (
          <li>
            <button type="button" className="create" onClick={() => onPick(query.trim())}>
              + Utiliser « {query.trim()} »
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export type FormProps = {
  initial: Ingredient | null
  /** Pré-remplit le nom quand on crée l'ingrédient depuis un formulaire de repas. */
  defaultName?: string
  ingredients: Ingredient[]
  usedIn: string[]
  onSave: (ingredient: Ingredient) => void
  onDelete: () => void
  onClose: () => void
}

export function IngredientForm({
  initial,
  defaultName,
  ingredients,
  usedIn,
  onSave,
  onDelete,
  onClose,
}: FormProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState(initial?.name ?? defaultName ?? '')
  const [unit, setUnit] = useState(initial?.unit ?? 'g')
  const [aisle, setAisle] = useState<Aisle>(initial?.aisle ?? 'Autres')
  const [pantry, setPantry] = useState(initial?.pantry ?? false)
  const [pickingUnit, setPickingUnit] = useState(false)

  useBackGuard(onClose)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    // showModal() donne d'office le focus au premier champ focusable. Sur Android le clavier
    // s'ouvre alors aussitôt et masque la fiche qu'on voulait justement lire. L'attribut
    // autofocus posé sur le <dialog> lui-même capte ce focus initial.
    // On garde le focus sur le nom à la création : il n'y a rien à lire, seulement à saisir.
    if (initial) dialog.setAttribute('autofocus', '')
    dialog.showModal()
    if (initial) {
      // Ceinture et bretelles : l'attribut autofocus ne suffit pas partout, Chrome donne
      // quand même le focus au premier champ. On le reprend explicitement.
      ;(document.activeElement as HTMLElement | null)?.blur()
      dialog.focus()
    }
  }, [initial])

  /** Unités proposées : celles fournies d'origine plus toutes celles déjà utilisées. */
  const unitOptions = useMemo(
    () =>
      [...new Set([...COMMON_UNITS, ...ingredients.map((i) => i.unit)])]
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b, 'fr')),
    [ingredients],
  )

  const locked = !!initial && usedIn.length > 0
  const duplicate = ingredients.some((i) => i.id !== initial?.id && norm(i.name) === norm(name))
  const error = !name.trim()
    ? null // champ encore vide : on n'affiche pas d'erreur tant que rien n'a été tapé
    : duplicate
      ? 'Un ingrédient porte déjà ce nom.'
      : !unit.trim()
        ? 'L’unité est obligatoire.'
        : null
  const valid = !!name.trim() && !!unit.trim() && !duplicate

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    onSave({
      // Un nom sans aucune lettre ni chiffre produirait un slug vide : on retombe sur un uuid.
      id: initial?.id ?? (slug(name) || uid()),
      name: name.trim(),
      unit: unit.trim(),
      aisle,
      pantry,
    })
  }

  return (
    <dialog
      ref={ref}
      tabIndex={-1}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && !pickingUnit && onClose()}
    >
      {pickingUnit ? (
        <UnitPicker
          current={unit}
          units={unitOptions}
          onPick={(picked) => {
            setUnit(picked)
            setPickingUnit(false)
          }}
          onClose={() => setPickingUnit(false)}
        />
      ) : (
        <form className="sheet" onSubmit={submit}>
          <h2>{initial ? 'Modifier l’ingrédient' : 'Nouvel ingrédient'}</h2>

          <label>
            Nom
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus={!initial}
              required
            />
          </label>

          <div className="field">
            <span className="field-label">Unité</span>
            <button
              type="button"
              className="select-like"
              disabled={locked}
              onClick={() => setPickingUnit(true)}
            >
              <span>{unit || 'Choisir…'}</span>
              <span aria-hidden="true">▾</span>
            </button>
          </div>
          {locked && (
            <p className="hint">
              L’unité est verrouillée : la changer fausserait les quantités des {usedIn.length} repas
              qui utilisent cet ingrédient.
            </p>
          )}

          <label>
            Rayon
            <select value={aisle} onChange={(e) => setAisle(e.target.value as Aisle)}>
              {AISLES.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>

          <label className="check">
            <input type="checkbox" checked={pantry} onChange={(e) => setPantry(e.target.checked)} />
            <span>
              J’en ai toujours
              <em>Apparaît dans les recettes, jamais dans la liste de courses.</em>
            </span>
          </label>

          {error && <p className="error">{error}</p>}

          <div className="actions">
            <button type="button" className="ghost" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="primary" disabled={!valid}>
              Enregistrer
            </button>
          </div>

          {initial && (
            <div className="danger-zone">
              {usedIn.length > 0 ? (
                <p className="hint">
                  Suppression impossible : utilisé dans {usedIn.length} repas ({usedIn.join(', ')}).
                </p>
              ) : (
                <button type="button" className="ghost danger" onClick={onDelete}>
                  Supprimer cet ingrédient
                </button>
              )}
            </div>
          )}
        </form>
      )}
    </dialog>
  )
}

type Props = {
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  recipes: Recipe[]
}

export default function Ingredients({ ingredients, setIngredients, recipes }: Props) {
  const [query, setQuery] = useState('')
  const [editing, setEditing] = useState<Ingredient | null | undefined>(undefined)

  const groups = useMemo(() => {
    const q = norm(query)
    const matching = q ? ingredients.filter((i) => norm(i.name).includes(q)) : ingredients
    return AISLES.map((aisle) => ({
      aisle,
      items: matching
        .filter((i) => i.aisle === aisle)
        .sort((a, b) => a.name.localeCompare(b.name, 'fr')),
    })).filter((g) => g.items.length > 0)
  }, [ingredients, query])

  const usedIn = (id: string) =>
    recipes.filter((r) => r.items.some((it) => it.ingredientId === id)).map((r) => r.name)

  const save = (ingredient: Ingredient) => {
    const exists = ingredients.some((i) => i.id === ingredient.id)
    setIngredients(
      exists
        ? ingredients.map((i) => (i.id === ingredient.id ? ingredient : i))
        : [...ingredients, ingredient],
    )
    setEditing(undefined)
  }

  return (
    <>
      <div className="search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un ingrédient"
          aria-label="Rechercher un ingrédient"
        />
      </div>

      {groups.length === 0 && (
        <p className="muted empty">
          {query ? `Aucun ingrédient ne correspond à « ${query} ».` : 'Aucun ingrédient.'}
        </p>
      )}

      {groups.map((group) => (
        <section key={group.aisle} className="group">
          <h2>{group.aisle}</h2>
          <ul className="rows">
            {group.items.map((i) => (
              <li key={i.id}>
                <button onClick={() => setEditing(i)}>
                  <span className="row-name">{i.name}</span>
                  <span className="row-meta">
                    {i.pantry && <span className="tag">en stock</span>}
                    {i.unit}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <button className="fab" onClick={() => setEditing(null)} aria-label="Nouvel ingrédient">
        +
      </button>

      {editing !== undefined && (
        <IngredientForm
          // Sans clé, passer d'un ingrédient à l'autre garderait les champs du précédent.
          key={editing?.id ?? 'nouveau'}
          initial={editing}
          ingredients={ingredients}
          usedIn={editing ? usedIn(editing.id) : []}
          onSave={save}
          onDelete={() => {
            setIngredients(ingredients.filter((i) => i.id !== editing!.id))
            setEditing(undefined)
          }}
          onClose={() => setEditing(undefined)}
        />
      )}
    </>
  )
}

/** Catalogue d'ingrédients, ouvert depuis les Réglages : on y vient rarement, il n'a plus d'onglet. */
export function IngredientsPage({ onClose, ...props }: Props & { onClose: () => void }) {
  useBackGuard(onClose)
  return (
    <div className="editor">
      <header className="topbar">
        <button type="button" className="link" onClick={onClose}>
          ‹ Retour
        </button>
        <h1>Ingrédients · {props.ingredients.length}</h1>
        <span />
      </header>
      <div className="screen">
        <Ingredients {...props} />
      </div>
    </div>
  )
}
