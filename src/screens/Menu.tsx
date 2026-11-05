import { useState } from 'react'
import { generateMenu, pickReplacement } from '../domain/generator'
import type { Wishes } from '../domain/recipeFilters'
import { QUICK_MINUTES } from '../domain/recipeFilters'
import { uid } from '../domain/store'
import type { CartEntry, Recipe } from '../domain/types'
import { Confirm } from '../lib/Confirm'
import { IconCart, IconPlus, IconShuffle } from '../lib/icons'
import { Pill, ScreenHeader, Stepper, Thumb } from './common'
import { metaLine, people } from './labels'

export type MenuPrefs = {
  count: number
  servings: number
  wishes: Wishes
  /** Derniers articles ajoutés à la main, pour les reproposer d'un appui. */
  recentExtras: string[]
}

type Props = {
  cart: CartEntry[]
  setCart: (next: CartEntry[]) => void
  recipes: Recipe[]
  /** Recettes qui respectent les envies du moment : le générateur et « Remplacer » y piochent. */
  pool: Recipe[]
  prefs: MenuPrefs
  setPrefs: (next: MenuPrefs) => void
  listCount: number
  onOpen: (recipe: Recipe) => void
  onBrowse: () => void
  onSeeList: () => void
  onSettings: () => void
}

const WISHES: [keyof Wishes, string][] = [
  ['season', 'De saison'],
  ['quick', `≤ ${QUICK_MINUTES} min`],
  ['cheap', 'Petit prix'],
  ['healthy', 'Healthy'],
  ['protein', '💪 Protéiné'],
  ['vege', 'Végé'],
  ['fish', 'Poisson'],
  ['favorites', 'Que mes repas ♥'],
]

export default function Menu({
  cart,
  setCart,
  recipes,
  pool,
  prefs,
  setPrefs,
  listCount,
  onOpen,
  onBrowse,
  onSeeList,
  onSettings,
}: Props) {
  const [confirming, setConfirming] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const byId = new Map(recipes.map((r) => [r.id, r]))
  // Un repas dont la recette a disparu reste ignoré, comme dans la liste de courses.
  const meals = cart.flatMap((entry) => {
    const recipe = byId.get(entry.recipeId)
    return recipe ? [{ entry, recipe }] : []
  })

  const generate = () => {
    setConfirming(false)
    const picked = generateMenu(pool, prefs.count, Math.random)
    setCart(picked.map((r) => ({ id: uid(), recipeId: r.id, servings: prefs.servings })))
    setNotice(
      picked.length < prefs.count
        ? `Seulement ${picked.length} recette${picked.length > 1 ? 's' : ''} correspond${picked.length > 1 ? 'ent' : ''} à tes envies.`
        : null,
    )
  }

  const replace = (entry: CartEntry, recipe: Recipe) => {
    const next = pickReplacement(
      pool,
      cart.map((e) => e.recipeId),
      recipe,
      Math.random,
    )
    if (!next) {
      setNotice('Aucune autre recette ne correspond à tes envies.')
      return
    }
    setNotice(null)
    setCart(cart.map((e) => (e.id === entry.id ? { ...e, recipeId: next.id } : e)))
  }

  const setServings = (entry: CartEntry, servings: number) =>
    setCart(cart.map((e) => (e.id === entry.id ? { ...e, servings } : e)))

  const subtitle =
    meals.length === 0
      ? 'Aucun repas prévu'
      : `${meals.length} repas · ${listCount} article${listCount > 1 ? 's' : ''} à acheter`

  return (
    <>
      <ScreenHeader title="Mon menu" subtitle={subtitle} onSettings={onSettings} />

      <section className="card generator">
        <h2>Générer mon menu</h2>
        <div className="gen-row">
          <span>Nombre de repas</span>
          <Stepper value={prefs.count} onChange={(count) => setPrefs({ ...prefs, count })} max={14} label="repas" />
        </div>
        <div className="gen-row">
          <span>Convives par repas</span>
          <Stepper
            value={prefs.servings}
            onChange={(servings) => setPrefs({ ...prefs, servings })}
            max={12}
            label="convive"
          />
        </div>
        <div className="field">
          <span className="field-label">Mes envies (facultatif)</span>
          <div className="pills wrap">
            {WISHES.map(([key, label]) => (
              <Pill
                key={key}
                on={prefs.wishes[key]}
                onClick={() => setPrefs({ ...prefs, wishes: { ...prefs.wishes, [key]: !prefs.wishes[key] } })}
              >
                {label}
              </Pill>
            ))}
          </div>
          <span className="hint">
            {pool.length} recette{pool.length > 1 ? 's' : ''} possible{pool.length > 1 ? 's' : ''}
          </span>
        </div>
        <button
          type="button"
          className="primary big"
          disabled={pool.length === 0}
          // Écraser un menu déjà composé à la main mérite une confirmation.
          onClick={() => (meals.length > 0 ? setConfirming(true) : generate())}
        >
          <IconShuffle size={20} /> Générer {prefs.count} repas
        </button>
      </section>

      {notice && <p className="notice">{notice}</p>}

      <section className="meals">
        {meals.length > 0 && <h2>Mes {meals.length} repas</h2>}
        {meals.length === 0 && (
          <p className="muted empty">
            Ton menu est vide : génère-le ci-dessus, ou choisis des recettes dans l’onglet Recettes.
          </p>
        )}
        <ul className="meal-list">
          {meals.map(({ entry, recipe }, i) => (
            <li key={entry.id} className="meal">
              <button type="button" className="meal-head" onClick={() => onOpen(recipe)}>
                <Thumb recipe={recipe} className="meal-emoji" />
                <span className="meal-text">
                  <span className="meal-index">Repas {i + 1}</span>
                  <span className="meal-name">{recipe.name}</span>
                  <span className="meal-meta">{metaLine(recipe)}</span>
                </span>
              </button>
              <div className="meal-actions">
                <button type="button" onClick={() => replace(entry, recipe)}>
                  <IconShuffle size={18} /> Remplacer
                </button>
                <div className="meal-servings">
                  <button
                    type="button"
                    onClick={() => setServings(entry, Math.max(1, entry.servings - 1))}
                    disabled={entry.servings <= 1}
                    aria-label="Un convive de moins"
                  >
                    −
                  </button>
                  <span>{people(entry.servings)}</span>
                  <button
                    type="button"
                    onClick={() => setServings(entry, Math.min(50, entry.servings + 1))}
                    aria-label="Un convive de plus"
                  >
                    +
                  </button>
                </div>
                <button type="button" className="muted" onClick={() => setCart(cart.filter((e) => e.id !== entry.id))}>
                  Retirer
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="dashed" onClick={onBrowse}>
          <IconPlus size={18} /> Ajouter une recette
        </button>
      </section>

      <p className="version muted">Mes Repas · version {__BUILD__}</p>

      {meals.length > 0 && (
        <div className="bottom-bar fixed">
          <button type="button" className="primary big" onClick={onSeeList}>
            <IconCart size={20} /> Voir la liste de courses · {listCount}
          </button>
        </div>
      )}

      {confirming && (
        <Confirm
          message={`Remplacer les ${meals.length} repas du menu actuel par ${prefs.count} nouveaux ?`}
          confirmLabel="Remplacer"
          onConfirm={generate}
          onCancel={() => setConfirming(false)}
        />
      )}
    </>
  )
}
