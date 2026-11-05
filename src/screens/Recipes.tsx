import { useMemo, useState } from 'react'
import { PROTEIN } from '../data/protein'
import { SEASONS } from '../data/seasons'
import {
  buildRows,
  hasFilters,
  matchesFilters,
  matchesQuery,
  NO_FILTERS,
  QUICK_MINUTES,
  type Context,
  type Filters,
} from '../domain/recipeFilters'
import { HIGH_PROTEIN, proteinPerServing } from '../domain/nutrition'
import { seasonOf } from '../domain/season'
import { currentMonth } from '../domain/text'
import { EQUIPMENTS, MAINS, type Course, type Equipment, type Ingredient, type Main, type Recipe } from '../domain/types'
import { IconHeart, IconPlus, IconSearch } from '../lib/icons'
import { Pill, ScreenHeader, Thumb } from './common'
import { EQUIPMENT_LABEL, MAIN_LABEL, metaLine } from './labels'

type Segment = 'library' | 'mine'

type Props = {
  recipes: Recipe[]
  ingredients: Ingredient[]
  favorites: Set<string>
  /** Recettes créées par l'utilisateur : elles sont toujours dans « Mes repas ». */
  ownIds: Set<string>
  menuCount: (recipeId: string) => number
  onOpen: (recipe: Recipe) => void
  onAdd: (recipe: Recipe) => void
  onToggleFavorite: (recipe: Recipe) => void
  onCreate: () => void
  onSettings: () => void
}

const today = () => new Date().toISOString().slice(0, 10)

const byName = (a: Recipe, b: Recipe) => a.name.localeCompare(b.name, 'fr')

export default function Recipes({
  recipes,
  ingredients,
  favorites,
  ownIds,
  menuCount,
  onOpen,
  onAdd,
  onToggleFavorite,
  onCreate,
  onSettings,
}: Props) {
  const [segment, setSegment] = useState<Segment>('library')
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<Filters>(NO_FILTERS)

  const ctx: Context = useMemo(
    () => ({
      month: currentMonth(),
      seasons: SEASONS,
      protein: PROTEIN,
      ingredientById: new Map(ingredients.map((i) => [i.id, i])),
    }),
    [ingredients],
  )

  const mine = useMemo(() => recipes.filter((r) => favorites.has(r.id) || ownIds.has(r.id)), [recipes, favorites, ownIds])
  const base = segment === 'library' ? recipes : mine
  const searching = !!query.trim() || hasFilters(filters)
  const results = useMemo(
    () =>
      base
        .filter((r) => matchesQuery(r, query, ctx.ingredientById) && matchesFilters(r, filters, ctx))
        .sort(byName),
    [base, query, filters, ctx],
  )
  // Les rangées n'ont de sens que pour flâner dans la bibliothèque, pas pendant une recherche.
  const rows = useMemo(
    () => (segment === 'library' && !searching ? buildRows(recipes, { ...ctx, day: today() }) : []),
    [segment, searching, recipes, ctx],
  )

  const setCourse = (c: Course) => setFilters({ ...filters, course: filters.course === c ? null : c })
  const toggleMain = (m: Main) =>
    setFilters({
      ...filters,
      mains: filters.mains.includes(m) ? filters.mains.filter((x) => x !== m) : [...filters.mains, m],
    })
  const toggleEquipment = (e: Equipment) =>
    setFilters({
      ...filters,
      equipment: filters.equipment.includes(e) ? filters.equipment.filter((x) => x !== e) : [...filters.equipment, e],
    })
  const flip = (key: 'quick' | 'easy' | 'cheap' | 'season' | 'protein' | 'healthy') => setFilters({ ...filters, [key]: !filters[key] })

  /** Pourquoi un plat est de saison, en clair : « poireau, chou-fleur ». */
  const seasonWhy = (r: Recipe) =>
    seasonOf(r, ctx.month, ctx.seasons)
      .inSeason.map((id) => ctx.ingredientById.get(id)?.name.toLowerCase() ?? id)
      .join(', ')

  const card = (r: Recipe) => {
    const count = menuCount(r.id)
    const fav = favorites.has(r.id)
    return (
      <li key={r.id} className="card-recipe">
        <div className="card-thumb">
          <button type="button" className="card-open" onClick={() => onOpen(r)} tabIndex={-1} aria-hidden="true">
            <Thumb recipe={r} className="card-photo" />
          </button>
          {count > 0 && <span className="card-badge">Au menu{count > 1 ? ` ×${count}` : ''}</span>}
          {!ownIds.has(r.id) && (
            <button
              type="button"
              className="round-btn heart small"
              onClick={() => onToggleFavorite(r)}
              aria-pressed={fav}
              aria-label={fav ? `Retirer ${r.name} de mes repas` : `Ajouter ${r.name} à mes repas`}
            >
              <IconHeart size={20} filled={fav} />
            </button>
          )}
        </div>
        <div className="card-body">
          <button type="button" className="card-name" onClick={() => onOpen(r)}>
            {r.name}
          </button>
          <span className="card-meta">{metaLine(r)}</span>
          {proteinPerServing(r, PROTEIN) >= HIGH_PROTEIN && (
            <span className="card-protein">💪 ≈ {proteinPerServing(r, PROTEIN)} g de protéines</span>
          )}
          <button type="button" className="add-small" onClick={() => onAdd(r)} aria-label={`Ajouter ${r.name} au menu`}>
            <IconPlus size={16} /> Au menu
          </button>
        </div>
      </li>
    )
  }

  return (
    <>
      <ScreenHeader title="Recettes" onSettings={onSettings} />

      <div className="segmented" role="tablist">
        <button role="tab" type="button" aria-selected={segment === 'library'} onClick={() => setSegment('library')}>
          Bibliothèque · {recipes.length}
        </button>
        <button role="tab" type="button" aria-selected={segment === 'mine'} onClick={() => setSegment('mine')}>
          Mes repas · {mine.length}
        </button>
      </div>

      <label className="search-field">
        <IconSearch size={20} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Plat, ingrédient… (ex. courgette)"
          aria-label="Rechercher une recette"
        />
      </label>

      {/* Deux rangées qui défilent à l'horizontale plutôt qu'un pavé qui repousse les recettes. */}
      <div className="pills">
        <Pill on={filters.course === 'plat'} onClick={() => setCourse('plat')}>
          Plats
        </Pill>
        <Pill on={filters.course === 'dessert'} onClick={() => setCourse('dessert')}>
          Desserts
        </Pill>
        {MAINS.map((m) => (
          <Pill key={m} on={filters.mains.includes(m)} onClick={() => toggleMain(m)}>
            {MAIN_LABEL[m]}
          </Pill>
        ))}
      </div>
      <div className="pills">
        <Pill on={filters.healthy} onClick={() => flip('healthy')}>
          Healthy
        </Pill>
        <Pill on={filters.protein} onClick={() => flip('protein')}>
          💪 Protéiné
        </Pill>
        <Pill on={filters.season} onClick={() => flip('season')}>
          De saison
        </Pill>
        <Pill on={filters.quick} onClick={() => flip('quick')}>
          ≤ {QUICK_MINUTES} min
        </Pill>
        <Pill on={filters.easy} onClick={() => flip('easy')}>
          Facile
        </Pill>
        <Pill on={filters.cheap} onClick={() => flip('cheap')}>
          € Petit prix
        </Pill>
      </div>
      <div className="pills">
        {EQUIPMENTS.map((e) => (
          <Pill key={e} on={filters.equipment.includes(e)} onClick={() => toggleEquipment(e)}>
            {EQUIPMENT_LABEL[e]}
          </Pill>
        ))}
        {hasFilters(filters) && (
          <button type="button" className="pill clear" onClick={() => setFilters(NO_FILTERS)}>
            Effacer
          </button>
        )}
      </div>

      {rows.map((row) => (
        <section key={row.id} className="row">
          <h2>{row.title}</h2>
          <ul className="row-track">
            {row.recipes.map((r) => (
              <li key={r.id}>
                <button type="button" className="row-card" onClick={() => onOpen(r)}>
                  <Thumb recipe={r} className="row-photo" />
                  <span className="row-card-name">{r.name}</span>
                  <span className="row-card-meta">{metaLine(r)}</span>
                  {row.id === 'saison' && <span className="row-card-why">{seasonWhy(r)}</span>}
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="all">
        <div className="all-head">
          <h2>{searching ? 'Résultats' : segment === 'library' ? 'Toutes les recettes' : 'Mes repas'}</h2>
          <span className="muted">
            {results.length} recette{results.length > 1 ? 's' : ''}
          </span>
        </div>
        {results.length === 0 ? (
          <p className="muted empty">
            {segment === 'mine' && !searching
              ? 'Touche ♡ sur une recette pour la retrouver ici.'
              : 'Aucune recette ne correspond.'}
          </p>
        ) : (
          <ul className="card-grid">{results.map(card)}</ul>
        )}
      </section>

      <button type="button" className="fab" onClick={onCreate} aria-label="Nouvelle recette">
        <IconPlus size={28} />
      </button>
    </>
  )
}
