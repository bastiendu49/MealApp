import { useEffect, useMemo, useRef, useState } from 'react'
import { slug } from '../data/catalogue'
import { formatQty } from '../domain/shoppingList'
import { uid } from '../domain/store'
import type { Ingredient, Recipe, RecipeItem } from '../domain/types'
import { compressPhoto, hueFor, useObjectUrl } from '../lib/photo'
import { IngredientForm } from './Ingredients'

const norm = (s: string) => slug(s.trim())

/** Une étape par ligne, lignes vides ignorées. */
const stepsOf = (recipe: Recipe) => recipe.steps.split('\n').map((s) => s.trim()).filter(Boolean)

/** Vignette d'un repas : la photo, ou son initiale sur une couleur dérivée du nom. */
export function Thumb({ recipe, big = false }: { recipe: Recipe; big?: boolean }) {
  const url = useObjectUrl(recipe.photo)
  const className = big ? 'thumb big' : 'thumb'
  if (url) return <img className={className} src={url} alt="" />
  return (
    <div
      className={`${className} fallback`}
      style={{ '--hue': hueFor(recipe.name) } as React.CSSProperties}
    >
      {recipe.name.trim().charAt(0).toUpperCase() || '?'}
    </div>
  )
}

/**
 * Remplace window.confirm : sur Android une boîte native peut être supprimée par le navigateur
 * (case « empêcher cette page de créer d'autres boîtes de dialogue »), et la confirmation
 * disparaît alors sans prévenir. Celle-ci s'affiche toujours.
 */
function Confirm({
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}: {
  message: string
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.setAttribute('autofocus', '') // aucun bouton présélectionné, aucun clavier
    dialog.showModal()
    dialog.focus()
  }, [])

  return (
    <dialog
      ref={ref}
      tabIndex={-1}
      className="confirm"
      onCancel={(e) => {
        e.preventDefault()
        onCancel()
      }}
      onClick={(e) => e.target === ref.current && onCancel()}
    >
      <div className="sheet">
        <p className="confirm-message">{message}</p>
        <div className="actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Revenir
          </button>
          <button type="button" className="primary" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  )
}

/* ------------------------------------------------------------------ fiche de présentation */

type Tab = 'recette' | 'ingredients'

function RecipeSheet({
  recipe,
  ingredients,
  onEdit,
  onClose,
}: {
  recipe: Recipe
  ingredients: Ingredient[]
  onEdit: (focus: EditFocus) => void
  onClose: () => void
}) {
  const [tab, setTab] = useState<Tab>('recette')
  const photoUrl = useObjectUrl(recipe.photo)
  const byId = useMemo(() => new Map(ingredients.map((i) => [i.id, i])), [ingredients])
  const steps = stepsOf(recipe)

  return (
    <div className="editor">
      <header className="topbar">
        <button type="button" className="link" onClick={onClose}>
          ‹ Retour
        </button>
        <h1>{recipe.name}</h1>
        <button
          type="button"
          className="link strong"
          // L'icône modifie ce qu'on est en train de regarder : l'éditeur s'ouvre sur la section
          // correspondant à l'onglet actif.
          onClick={() => onEdit(tab === 'recette' ? 'steps' : 'items')}
          aria-label={tab === 'recette' ? 'Modifier la recette' : 'Modifier les ingrédients'}
        >
          ✏️ Modifier
        </button>
      </header>

      <div className="detail">
        {photoUrl && <img className="hero" src={photoUrl} alt="" />}

        <div className="detail-head">
          <h2>{recipe.name}</h2>
          <p className="muted">Pour {recipe.servings} personnes</p>
        </div>

        <div className="tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'recette'}
            onClick={() => setTab('recette')}
            type="button"
          >
            Recette
          </button>
          <button
            role="tab"
            aria-selected={tab === 'ingredients'}
            onClick={() => setTab('ingredients')}
            type="button"
          >
            Ingrédients
          </button>
        </div>

        {tab === 'recette' ? (
          steps.length === 0 ? (
            <p className="muted empty">Aucune étape saisie.</p>
          ) : (
            <ol className="steps">
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )
        ) : recipe.items.length === 0 ? (
          <p className="muted empty">Aucun ingrédient.</p>
        ) : (
          <ul className="detail-items">
            {recipe.items.map((item, i) => {
              const ingredient = byId.get(item.ingredientId)
              if (!ingredient) return null
              return (
                <li key={`${item.ingredientId}-${i}`}>
                  <span className="detail-qty">{formatQty(item.qty, ingredient.unit)}</span>
                  <span className="detail-name">
                    {ingredient.name}
                    {ingredient.pantry && <span className="tag">en stock</span>}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------------------- éditeur */

/** Les quantités sont saisies en texte : un input numérique contrôlé avale la virgule en frappe. */
type Draft = { ingredientId: string; qty: string }

type EditFocus = 'steps' | 'items' | undefined

const draftsOf = (recipe: Recipe | null): Draft[] =>
  recipe?.items.map((i) => ({ ingredientId: i.ingredientId, qty: i.qty === null ? '' : String(i.qty) })) ?? []

type EditorProps = {
  initial: Recipe | null
  focus: EditFocus
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  onSave: (recipe: Recipe) => void
  onDelete: () => void
  onClose: () => void
}

function Editor({ initial, focus, ingredients, setIngredients, onSave, onDelete, onClose }: EditorProps) {
  const [name, setName] = useState(initial?.name ?? '')
  const [servings, setServings] = useState(initial?.servings ?? 4)
  const [steps, setSteps] = useState(initial?.steps ?? '')
  const [photo, setPhoto] = useState<Blob | undefined>(initial?.photo)
  const [drafts, setDrafts] = useState<Draft[]>(draftsOf(initial))
  const [query, setQuery] = useState('')
  const [creating, setCreating] = useState<string | null>(null)
  const [photoError, setPhotoError] = useState<string | null>(null)
  const [confirming, setConfirming] = useState<'close' | 'delete' | null>(null)

  const photoUrl = useObjectUrl(photo)
  const byId = useMemo(() => new Map(ingredients.map((i) => [i.id, i])), [ingredients])
  const itemsRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLLabelElement>(null)

  useEffect(() => {
    if (focus === 'items') itemsRef.current?.scrollIntoView({ block: 'start' })
    if (focus === 'steps') stepsRef.current?.scrollIntoView({ block: 'start' })
  }, [focus])

  const parseQty = (raw: string): number | null => {
    if (!raw.trim()) return null
    const n = Number(raw.replace(',', '.'))
    return Number.isFinite(n) && n >= 0 ? n : Number.NaN
  }

  const badQty = drafts.some((d) => Number.isNaN(parseQty(d.qty)))
  const valid = !!name.trim() && servings >= 1 && !badQty

  const dirty =
    name !== (initial?.name ?? '') ||
    servings !== (initial?.servings ?? 4) ||
    steps !== (initial?.steps ?? '') ||
    photo !== initial?.photo ||
    JSON.stringify(drafts) !== JSON.stringify(draftsOf(initial))

  // Une recette représente dix minutes de saisie : on ne la jette pas sur un appui malheureux.
  const close = () => (dirty ? setConfirming('close') : onClose())

  const pickPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = '' // sans ça, re-choisir le même fichier ne déclenche rien
    if (!file) return
    try {
      setPhoto(await compressPhoto(file))
      setPhotoError(null)
    } catch (err) {
      setPhotoError(`Photo illisible : ${err instanceof Error ? err.message : err}`)
    }
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    const items: RecipeItem[] = drafts.map((d) => ({ ingredientId: d.ingredientId, qty: parseQty(d.qty) }))
    onSave({ id: initial?.id ?? uid(), name: name.trim(), servings, steps, items, photo })
  }

  const chosen = new Set(drafts.map((d) => d.ingredientId))
  const q = norm(query)
  const matches = q ? ingredients.filter((i) => !chosen.has(i.id) && norm(i.name).includes(q)).slice(0, 6) : []
  const exactExists = ingredients.some((i) => norm(i.name) === q)

  return (
    <div className="editor">
      <form onSubmit={submit}>
        <header className="topbar">
          <button type="button" className="link" onClick={close}>
            Annuler
          </button>
          <h1>{initial ? 'Modifier' : 'Nouveau repas'}</h1>
          <button type="submit" className="link strong" disabled={!valid}>
            Enregistrer
          </button>
        </header>

        <div className="screen sheet">
          <label className="photo-picker">
            {photoUrl ? <img src={photoUrl} alt="" /> : <span>📷 Ajouter une photo</span>}
            <input type="file" accept="image/*" onChange={pickPhoto} hidden />
          </label>
          {photoError && <p className="error">{photoError}</p>}
          {photo && (
            <button type="button" className="ghost danger" onClick={() => setPhoto(undefined)}>
              Retirer la photo
            </button>
          )}

          <label>
            Nom du repas
            <input value={name} onChange={(e) => setName(e.target.value)} autoFocus={!initial} required />
          </label>

          <label>
            Pour combien de personnes ?
            <div className="stepper">
              <button type="button" onClick={() => setServings(Math.max(1, servings - 1))}>
                −
              </button>
              <strong>{servings}</strong>
              <button type="button" onClick={() => setServings(Math.min(50, servings + 1))}>
                +
              </button>
            </div>
          </label>

          <section ref={itemsRef}>
            <h2>Ingrédients</h2>
            {drafts.length === 0 && <p className="hint">Aucun ingrédient pour l’instant.</p>}
            <ul className="items">
              {drafts.map((draft, index) => {
                const ingredient = byId.get(draft.ingredientId)
                const invalid = Number.isNaN(parseQty(draft.qty))
                return (
                  <li key={`${draft.ingredientId}-${index}`}>
                    <span className="item-name">{ingredient?.name ?? '(ingrédient supprimé)'}</span>
                    <button
                      type="button"
                      className="remove"
                      aria-label={`Retirer ${ingredient?.name ?? ''}`}
                      onClick={() => setDrafts(drafts.filter((_, i) => i !== index))}
                    >
                      ✕
                    </button>
                    <div className="item-qty">
                      <input
                        className={invalid ? 'qty invalid' : 'qty'}
                        inputMode="decimal"
                        value={draft.qty}
                        placeholder="qs"
                        aria-label={`Quantité de ${ingredient?.name ?? ''}`}
                        onChange={(e) =>
                          setDrafts(drafts.map((d, i) => (i === index ? { ...d, qty: e.target.value } : d)))
                        }
                      />
                      <span className="item-unit">{ingredient?.unit}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
            {badQty && <p className="error">Une quantité n’est pas un nombre valide.</p>}
            <p className="hint">Laisse la quantité vide pour « qs » (sel, poivre, huile…).</p>

            <input
              type="search"
              className="picker"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ajouter un ingrédient…"
              aria-label="Ajouter un ingrédient"
            />
            {!!query.trim() && (
              <ul className="rows suggestions">
                {matches.map((i) => (
                  <li key={i.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setDrafts([...drafts, { ingredientId: i.id, qty: '' }])
                        setQuery('')
                      }}
                    >
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
          </section>

          <label ref={stepsRef}>
            Recette
            <textarea
              rows={12}
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder={'Une étape par ligne.\nÉmincer les oignons.\nFaire revenir 5 minutes.'}
            />
          </label>

          {initial && (
            <div className="danger-zone">
              <button type="button" className="ghost danger" onClick={() => setConfirming('delete')}>
                Supprimer ce repas
              </button>
            </div>
          )}
        </div>
      </form>

      {confirming === 'close' && (
        <Confirm
          message="Abandonner les modifications ?"
          confirmLabel="Abandonner"
          onConfirm={onClose}
          onCancel={() => setConfirming(null)}
        />
      )}
      {confirming === 'delete' && (
        <Confirm
          message={`Supprimer « ${initial?.name} » ? Cette action est définitive.`}
          confirmLabel="Supprimer"
          onConfirm={onDelete}
          onCancel={() => setConfirming(null)}
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
            setDrafts((d) => [...d, { ingredientId: ingredient.id, qty: '' }])
            setCreating(null)
            setQuery('')
          }}
          onDelete={() => setCreating(null)}
          onClose={() => setCreating(null)}
        />
      )}
    </div>
  )
}

/* ---------------------------------------------------------------------------------- écran */

type Props = {
  recipes: Recipe[]
  setRecipes: (next: Recipe[]) => void
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
}

export default function Recipes({ recipes, setRecipes, ingredients, setIngredients }: Props) {
  // On garde l'identifiant plutôt que l'objet : après enregistrement, la fiche doit réafficher
  // la version à jour et non celle capturée à l'ouverture.
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editing, setEditing] = useState<Recipe | null | undefined>(undefined)
  const [editFocus, setEditFocus] = useState<EditFocus>(undefined)

  const viewing = recipes.find((r) => r.id === viewingId) ?? null

  if (editing !== undefined) {
    return (
      <Editor
        key={editing?.id ?? 'nouveau'}
        initial={editing}
        focus={editFocus}
        ingredients={ingredients}
        setIngredients={setIngredients}
        onSave={(recipe) => {
          const exists = recipes.some((r) => r.id === recipe.id)
          setRecipes(exists ? recipes.map((r) => (r.id === recipe.id ? recipe : r)) : [...recipes, recipe])
          setEditing(undefined)
        }}
        onDelete={() => {
          setRecipes(recipes.filter((r) => r.id !== editing!.id))
          setViewingId(null)
          setEditing(undefined)
        }}
        onClose={() => setEditing(undefined)}
      />
    )
  }

  if (viewing) {
    return (
      <RecipeSheet
        recipe={viewing}
        ingredients={ingredients}
        onEdit={(focus) => {
          setEditFocus(focus)
          setEditing(viewing)
        }}
        onClose={() => setViewingId(null)}
      />
    )
  }

  const sorted = [...recipes].sort((a, b) => a.name.localeCompare(b.name, 'fr'))

  return (
    <>
      {sorted.length === 0 ? (
        <p className="muted empty">Aucun repas. Appuie sur + pour en créer un.</p>
      ) : (
        <ul className="rows">
          {sorted.map((recipe) => (
            <li key={recipe.id}>
              <button onClick={() => setViewingId(recipe.id)}>
                <Thumb recipe={recipe} />
                <span className="row-name">{recipe.name}</span>
                <span className="row-meta">{recipe.servings} pers.</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <button
        className="fab"
        onClick={() => {
          setEditFocus(undefined)
          setEditing(null)
        }}
        aria-label="Nouveau repas"
      >
        +
      </button>

      <p className="version muted">Mes Repas · version {__BUILD__}</p>
    </>
  )
}
