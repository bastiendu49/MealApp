import { useEffect, useMemo, useRef, useState } from 'react'
import { uid } from '../domain/store'
import { fold } from '../domain/text'
import {
  DIFFICULTIES,
  MAINS,
  PRICES,
  type Course,
  type Difficulty,
  type Ingredient,
  type Main,
  type Price,
  type Recipe,
  type RecipeItem,
} from '../domain/types'
import { Confirm } from '../lib/Confirm'
import { compressPhoto, useObjectUrl } from '../lib/photo'
import { useBackGuard } from '../lib/useBackGuard'
import { Pill, Stepper } from './common'
import { DIFFICULTY_LABEL, MAIN_LABEL, priceLabel } from './labels'
import { IngredientForm } from './Ingredients'
import type { EditFocus } from './RecipeSheet'

/** Les quantités sont saisies en texte : un input numérique contrôlé avale la virgule en frappe. */
type Draft = { ingredientId: string; qty: string }

const draftsOf = (recipe: Recipe | null): Draft[] =>
  recipe?.items.map((i) => ({ ingredientId: i.ingredientId, qty: i.qty === null ? '' : String(i.qty) })) ?? []

/** Ce qu'on compare pour savoir si la saisie a changé, et donc s'il faut confirmer l'abandon. */
const snapshot = (r: {
  name: string
  servings: number
  steps: string
  drafts: Draft[]
  course?: Course
  main?: Main
  minutes: string
  difficulty?: Difficulty
  price?: Price
  emoji: string
}) => JSON.stringify(r)

type Props = {
  initial: Recipe | null
  focus: EditFocus
  ingredients: Ingredient[]
  setIngredients: (next: Ingredient[]) => void
  /** Absent pour une recette de la bibliothèque jamais modifiée : il n'y a rien à supprimer. */
  deletion?: { label: string; message: string; onDelete: () => void }
  /** Recette de la bibliothèque : la version enregistrée remplacera l'originale. */
  fromLibrary: boolean
  onSave: (recipe: Recipe) => void
  onClose: () => void
}

export default function RecipeEditor({
  initial,
  focus,
  ingredients,
  setIngredients,
  deletion,
  fromLibrary,
  onSave,
  onClose,
}: Props) {
  const [name, setName] = useState(initial?.name ?? '')
  const [servings, setServings] = useState(initial?.servings ?? 2)
  const [steps, setSteps] = useState(initial?.steps ?? '')
  const [photo, setPhoto] = useState<Blob | undefined>(initial?.photo)
  const [drafts, setDrafts] = useState<Draft[]>(draftsOf(initial))
  const [course, setCourse] = useState<Course | undefined>(initial ? initial.course : 'plat')
  const [main, setMain] = useState<Main | undefined>(initial?.main)
  const [minutes, setMinutes] = useState(initial?.minutes ? String(initial.minutes) : '')
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>(initial?.difficulty)
  const [price, setPrice] = useState<Price | undefined>(initial?.price)
  const [emoji, setEmoji] = useState(initial?.emoji ?? '')
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

  const parsedMinutes = minutes.trim() ? Number(minutes.trim()) : undefined
  const badMinutes = parsedMinutes !== undefined && !(Number.isInteger(parsedMinutes) && parsedMinutes > 0)
  const badQty = drafts.some((d) => Number.isNaN(parseQty(d.qty)))
  const valid = !!name.trim() && servings >= 1 && !badQty && !badMinutes

  const current = { name, servings, steps, drafts, course, main, minutes, difficulty, price, emoji }
  const [initialSnapshot] = useState(() =>
    snapshot({
      name: initial?.name ?? '',
      servings: initial?.servings ?? 2,
      steps: initial?.steps ?? '',
      drafts: draftsOf(initial),
      course: initial ? initial.course : 'plat',
      main: initial?.main,
      minutes: initial?.minutes ? String(initial.minutes) : '',
      difficulty: initial?.difficulty,
      price: initial?.price,
      emoji: initial?.emoji ?? '',
    }),
  )
  // La photo se compare par identité : un Blob ne se sérialise pas.
  const dirty = snapshot(current) !== initialSnapshot || photo !== initial?.photo

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
    const recipe: Recipe = { id: initial?.id ?? uid(), name: name.trim(), servings, steps, items }
    if (photo) recipe.photo = photo
    if (course) recipe.course = course
    if (course !== 'dessert' && main) recipe.main = main
    if (parsedMinutes) recipe.minutes = parsedMinutes
    if (difficulty) recipe.difficulty = difficulty
    if (price) recipe.price = price
    if (emoji.trim()) recipe.emoji = emoji.trim()
    onSave(recipe)
  }

  const chosen = new Set(drafts.map((d) => d.ingredientId))
  const q = fold(query)
  const matches = q ? ingredients.filter((i) => !chosen.has(i.id) && fold(i.name).includes(q)).slice(0, 6) : []
  const exactExists = ingredients.some((i) => fold(i.name) === q)

  /** Une pastille qu'on retouche se désélectionne : ces champs restent facultatifs. */
  const toggle = <T,>(value: T, set: (v: T | undefined) => void, currentValue: T | undefined) =>
    set(currentValue === value ? undefined : value)

  return (
    <div className="editor">
      <form onSubmit={submit}>
        <header className="topbar">
          <button type="button" className="link" onClick={close}>
            Annuler
          </button>
          <h1>{initial ? 'Modifier' : 'Nouvelle recette'}</h1>
          <button type="submit" className="link strong" disabled={!valid}>
            Enregistrer
          </button>
        </header>

        <div className="screen sheet">
          {fromLibrary && (
            <p className="hint">
              Recette de la bibliothèque : ta version la remplacera, et tu pourras toujours revenir à
              l’originale.
            </p>
          )}

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
            Nom de la recette
            <input value={name} onChange={(e) => setName(e.target.value)} autoFocus={!initial} required />
          </label>

          <div className="field-row">
            <label>
              Emoji
              <input
                className="emoji-input"
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                placeholder="🍲"
                maxLength={8}
              />
            </label>
            <label>
              Temps total (min)
              <input
                inputMode="numeric"
                className={badMinutes ? 'invalid' : undefined}
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="30"
              />
            </label>
          </div>
          {badMinutes && <p className="error">Le temps doit être un nombre entier de minutes.</p>}

          <div className="field">
            <span className="field-label">Type</span>
            <div className="pills wrap">
              <Pill on={course === 'plat'} onClick={() => setCourse('plat')}>
                Plat
              </Pill>
              <Pill on={course === 'dessert'} onClick={() => setCourse('dessert')}>
                Dessert
              </Pill>
            </div>
          </div>

          {course !== 'dessert' && (
            <div className="field">
              <span className="field-label">Ingrédient principal</span>
              <div className="pills wrap">
                {MAINS.map((m) => (
                  <Pill key={m} on={main === m} onClick={() => toggle(m, setMain, main)}>
                    {MAIN_LABEL[m]}
                  </Pill>
                ))}
              </div>
            </div>
          )}

          <div className="field">
            <span className="field-label">Difficulté</span>
            <div className="pills wrap">
              {DIFFICULTIES.map((d) => (
                <Pill key={d} on={difficulty === d} onClick={() => toggle(d, setDifficulty, difficulty)}>
                  {DIFFICULTY_LABEL[d]}
                </Pill>
              ))}
            </div>
          </div>

          <div className="field">
            <span className="field-label">Prix</span>
            <div className="pills wrap">
              {PRICES.map((p) => (
                <Pill key={p} on={price === p} onClick={() => toggle(p, setPrice, price)}>
                  {priceLabel(p)}
                </Pill>
              ))}
            </div>
          </div>

          <div className="field">
            <span className="field-label">Recette écrite pour</span>
            <Stepper value={servings} onChange={setServings} format={(n) => `${n} pers.`} label="convive" />
          </div>

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

          {deletion && (
            <div className="danger-zone">
              <button type="button" className="ghost danger" onClick={() => setConfirming('delete')}>
                {deletion.label}
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
      {confirming === 'delete' && deletion && (
        <Confirm
          message={deletion.message}
          confirmLabel="Confirmer"
          onConfirm={deletion.onDelete}
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
