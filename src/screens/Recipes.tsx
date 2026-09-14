import { useEffect, useMemo, useRef, useState } from 'react'
import { slug } from '../data/catalogue'
import { DEMO_RECIPES } from '../data/demoRecipes'
import { formatQty, scaleRecipe } from '../domain/shoppingList'
import { uid } from '../domain/store'
import type { CartEntry, Ingredient, Recipe, RecipeItem } from '../domain/types'
import { compressPhoto, hueFor, useObjectUrl } from '../lib/photo'
import { Confirm } from '../lib/Confirm'
import { useBackGuard } from '../lib/useBackGuard'
import { IngredientForm } from './Ingredients'

const norm = (s: string) => slug(s.trim())

/** Une étape par ligne, lignes vides ignorées. */
const stepsOf = (recipe: Recipe) => recipe.steps.split('\n').map((s) => s.trim()).filter(Boolean)

/** Photo du repas, ou son initiale sur une couleur dérivée du nom. */
export function Thumb({ recipe, className }: { recipe: Recipe; className: string }) {
  const url = useObjectUrl(recipe.photo)
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

function Stepper({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="stepper">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} aria-label="Moins">
        −
      </button>
      <strong>{value}</strong>
      <button type="button" onClick={() => onChange(Math.min(50, value + 1))} aria-label="Plus">
        +
      </button>
    </div>
  )
}

/* ------------------------------------------------------------------ fiche de présentation */

type Tab = 'recette' | 'ingredients'

function RecipeSheet({
  recipe,
  ingredients,
  entries,
  onAdd,
  onRemove,
  onEdit,
  onClose,
}: {
  recipe: Recipe
  ingredients: Ingredient[]
  entries: CartEntry[]
  onAdd: (servings: number) => void
  onRemove: (entryId: string) => void
  onEdit: (focus: EditFocus) => void
  onClose: () => void
}) {
  const [tab, setTab] = useState<Tab>('recette')
  const [servings, setServings] = useState(recipe.servings)
  useBackGuard(onClose)
  const steps = stepsOf(recipe)

  // Les quantités affichées suivent le sélecteur de convives : on voit ce qu'on va acheter.
  const scaled = useMemo(
    () => scaleRecipe(recipe, servings, ingredients),
    [recipe, servings, ingredients],
  )

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
        <Thumb recipe={recipe} className="hero" />

        <div className="detail-head">
          <h2>{recipe.name}</h2>
          <p className="muted">Recette écrite pour {recipe.servings} personnes</p>
        </div>

        {entries.length > 0 && (
          <ul className="cart-entries">
            {entries.map((entry) => (
              <li key={entry.id}>
                <span>Au panier · {entry.servings} personnes</span>
                <button
                  type="button"
                  className="remove"
                  onClick={() => onRemove(entry.id)}
                  aria-label="Retirer du panier"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

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
        ) : scaled.length === 0 ? (
          <p className="muted empty">Aucun ingrédient.</p>
        ) : (
          <>
            {servings !== recipe.servings && (
              <p className="hint">Quantités ajustées pour {servings} personnes.</p>
            )}
            <ul className="detail-items">
              {scaled.map(({ ingredient, qty }, i) => (
                <li key={`${ingredient.id}-${i}`}>
                  <span className="detail-qty">{formatQty(qty, ingredient.unit)}</span>
                  <span className="detail-name">
                    {ingredient.name}
                    {ingredient.pantry && <span className="tag">en stock</span>}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="add-bar">
        <label className="add-servings">
          <span className="muted">Convives</span>
          <Stepper value={servings} onChange={setServings} />
        </label>
        <button type="button" className="primary" onClick={() => onAdd(servings)}>
          Ajouter au panier
        </button>
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

  // Le retour système d'Android se comporte exactement comme le bouton Annuler, confirmation
  // comprise : sinon il jetterait une recette en cours de saisie sans rien demander.
  useBackGuard(close)

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
            <Stepper value={servings} onChange={setServings} />
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
  cart: CartEntry[]
  setCart: (next: CartEntry[]) => void
  onSeeList: () => void
}

export default function Recipes({
  recipes,
  setRecipes,
  ingredients,
  setIngredients,
  cart,
  setCart,
  onSeeList,
}: Props) {
  // On garde l'identifiant plutôt que l'objet : après enregistrement, la fiche doit réafficher
  // la version à jour et non celle capturée à l'ouverture.
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editing, setEditing] = useState<Recipe | null | undefined>(undefined)
  const [editFocus, setEditFocus] = useState<EditFocus>(undefined)

  const viewing = recipes.find((r) => r.id === viewingId) ?? null
  const countOf = (recipeId: string) => cart.filter((e) => e.recipeId === recipeId).length
  const add = (recipe: Recipe, servings: number) =>
    setCart([...cart, { id: uid(), recipeId: recipe.id, servings }])

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
          // Un repas supprimé ne doit pas rester au panier : il y deviendrait invisible.
          setCart(cart.filter((e) => e.recipeId !== editing!.id))
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
        entries={cart.filter((e) => e.recipeId === viewing.id)}
        onAdd={(servings) => add(viewing, servings)}
        onRemove={(entryId) => setCart(cart.filter((e) => e.id !== entryId))}
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
        <div className="empty">
          <p className="muted">Aucun repas. Appuie sur + pour en créer un.</p>
          {/* Proposé plutôt qu'imposé : les repas d'exemple ne réapparaissent jamais tout seuls
              après une suppression, il faut venir les demander ici. */}
          <button type="button" className="ghost" onClick={() => setRecipes(DEMO_RECIPES)}>
            Charger 2 repas d’exemple
          </button>
        </div>
      ) : (
        <ul className={cart.length > 0 ? 'grid with-summary' : 'grid'}>
          {sorted.map((recipe) => {
            const count = countOf(recipe.id)
            return (
              <li key={recipe.id} className="tile">
                <button className="tile-main" onClick={() => setViewingId(recipe.id)}>
                  <Thumb recipe={recipe} className="tile-photo" />
                  <span className="tile-name">{recipe.name}</span>
                  <span className="tile-meta">{recipe.servings} pers.</span>
                </button>
                {count > 0 && <span className="tile-badge">×{count}</span>}
                <button
                  className="tile-add"
                  onClick={() => add(recipe, recipe.servings)}
                  aria-label={`Ajouter ${recipe.name} au panier`}
                >
                  +
                </button>
              </li>
            )
          })}
        </ul>
      )}

      <button
        className={cart.length > 0 ? 'fab raised' : 'fab'}
        onClick={() => {
          setEditFocus(undefined)
          setEditing(null)
        }}
        aria-label="Nouveau repas"
      >
        +
      </button>

      {cart.length > 0 && (
        <div className="cart-summary">
          <button type="button" className="link" onClick={() => setCart([])}>
            Vider
          </button>
          <button type="button" className="primary" onClick={onSeeList}>
            {cart.length} repas · Liste de courses
          </button>
        </div>
      )}

      <p className="version muted">Mes Repas · version {__BUILD__}</p>
    </>
  )
}
