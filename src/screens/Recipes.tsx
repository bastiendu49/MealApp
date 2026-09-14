import { useMemo, useState } from 'react'
import { slug } from '../data/catalogue'
import { uid } from '../domain/store'
import type { Ingredient, Recipe, RecipeItem } from '../domain/types'
import { compressPhoto, hueFor, useObjectUrl } from '../lib/photo'
import { IngredientForm } from './Ingredients'

const norm = (s: string) => slug(s.trim())

/** Vignette d'un repas : la photo, ou son initiale sur une couleur dérivée du nom. */
export function Thumb({ recipe, big = false }: { recipe: Recipe; big?: boolean }) {
  const url = useObjectUrl(recipe.photo)
  const className = big ? 'thumb big' : 'thumb'
  if (url) return <img className={className} src={url} alt="" />
  return (
    <div className={`${className} fallback`} style={{ '--hue': hueFor(recipe.name) } as React.CSSProperties}>
      {recipe.name.trim().charAt(0).toUpperCase() || '?'}
    </div>
  )
}

/** Les quantités sont saisies en texte : un input numérique contrôlé mange le « , » en cours de frappe. */
type Draft = { ingredientId: string; qty: string }

type EditorProps = {
  initial: Recipe | null
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  onSave: (recipe: Recipe) => void
  onDelete: () => void
  onClose: () => void
}

function Editor({ initial, ingredients, setIngredients, onSave, onDelete, onClose }: EditorProps) {
  const [name, setName] = useState(initial?.name ?? '')
  const [servings, setServings] = useState(initial?.servings ?? 4)
  const [steps, setSteps] = useState(initial?.steps ?? '')
  const [photo, setPhoto] = useState<Blob | undefined>(initial?.photo)
  const [drafts, setDrafts] = useState<Draft[]>(
    initial?.items.map((i) => ({ ingredientId: i.ingredientId, qty: i.qty === null ? '' : String(i.qty) })) ?? [],
  )
  const [query, setQuery] = useState('')
  const [creating, setCreating] = useState<string | null>(null)
  const [photoError, setPhotoError] = useState<string | null>(null)

  const photoUrl = useObjectUrl(photo)
  const byId = useMemo(() => new Map(ingredients.map((i) => [i.id, i])), [ingredients])

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
    JSON.stringify(drafts) !==
      JSON.stringify(
        initial?.items.map((i) => ({ ingredientId: i.ingredientId, qty: i.qty === null ? '' : String(i.qty) })) ?? [],
      )

  const close = () => {
    // Une recette représente dix minutes de saisie : on ne la jette pas sur un appui malheureux.
    if (dirty && !confirm('Abandonner les modifications ?')) return
    onClose()
  }

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
    const items: RecipeItem[] = drafts.map((d) => ({
      ingredientId: d.ingredientId,
      qty: parseQty(d.qty),
    }))
    onSave({ id: initial?.id ?? uid(), name: name.trim(), servings, steps, items, photo })
  }

  const chosen = new Set(drafts.map((d) => d.ingredientId))
  const q = norm(query)
  const matches = q
    ? ingredients.filter((i) => !chosen.has(i.id) && norm(i.name).includes(q)).slice(0, 6)
    : []
  const exactExists = ingredients.some((i) => norm(i.name) === q)

  const addIngredient = (id: string) => {
    setDrafts([...drafts, { ingredientId: id, qty: '' }])
    setQuery('')
  }

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
            <input value={name} onChange={(e) => setName(e.target.value)} required autoFocus={!initial} />
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

          <section>
            <h2>Ingrédients</h2>
            {drafts.length === 0 && <p className="hint">Aucun ingrédient pour l’instant.</p>}
            <ul className="items">
              {drafts.map((draft, index) => {
                const ingredient = byId.get(draft.ingredientId)
                const invalid = Number.isNaN(parseQty(draft.qty))
                return (
                  <li key={`${draft.ingredientId}-${index}`}>
                    <span className="item-name">{ingredient?.name ?? '(ingrédient supprimé)'}</span>
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
                    <button
                      type="button"
                      className="remove"
                      aria-label={`Retirer ${ingredient?.name ?? ''}`}
                      onClick={() => setDrafts(drafts.filter((_, i) => i !== index))}
                    >
                      ✕
                    </button>
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
                    <button type="button" onClick={() => addIngredient(i.id)}>
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

          <label>
            Recette
            <textarea
              rows={10}
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder={'Une étape par ligne.\nÉmincer les oignons.\nFaire revenir 5 minutes.'}
            />
          </label>

          {initial && (
            <div className="danger-zone">
              <button
                type="button"
                className="ghost danger"
                onClick={() => confirm(`Supprimer « ${initial.name} » ?`) && onDelete()}
              >
                Supprimer ce repas
              </button>
            </div>
          )}
        </div>
      </form>

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

type Props = {
  recipes: Recipe[]
  setRecipes: (next: Recipe[]) => void
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
}

export default function Recipes({ recipes, setRecipes, ingredients, setIngredients }: Props) {
  const [editing, setEditing] = useState<Recipe | null | undefined>(undefined)

  if (editing !== undefined) {
    return (
      <Editor
        key={editing?.id ?? 'nouveau'}
        initial={editing}
        ingredients={ingredients}
        setIngredients={setIngredients}
        onSave={(recipe) => {
          const exists = recipes.some((r) => r.id === recipe.id)
          setRecipes(exists ? recipes.map((r) => (r.id === recipe.id ? recipe : r)) : [...recipes, recipe])
          setEditing(undefined)
        }}
        onDelete={() => {
          setRecipes(recipes.filter((r) => r.id !== editing!.id))
          setEditing(undefined)
        }}
        onClose={() => setEditing(undefined)}
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
              <button onClick={() => setEditing(recipe)}>
                <Thumb recipe={recipe} />
                <span className="row-name">{recipe.name}</span>
                <span className="row-meta">{recipe.servings} pers.</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <button className="fab" onClick={() => setEditing(null)} aria-label="Nouveau repas">
        +
      </button>

      <p className="version muted">Mes Repas · version {__BUILD__}</p>
    </>
  )
}
