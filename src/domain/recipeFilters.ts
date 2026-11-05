import { seededRandom, shuffle } from './random'
import { seasonOf, type SeasonTable } from './season'
import { fold, MONTHS } from './text'
import type { Course, Ingredient, Main, Recipe } from './types'

/** Seuil des filtres « rapide » : temps total, préparation et cuisson comprises. */
export const QUICK_MINUTES = 30

export type Filters = {
  course: Course | null
  /** Plusieurs ingrédients principaux cochés = l'un ou l'autre. */
  mains: Main[]
  quick: boolean
  easy: boolean
  cheap: boolean
  season: boolean
}

export const NO_FILTERS: Filters = {
  course: null,
  mains: [],
  quick: false,
  easy: false,
  cheap: false,
  season: false,
}

export const hasFilters = (f: Filters) =>
  f.course !== null || f.mains.length > 0 || f.quick || f.easy || f.cheap || f.season

export type Context = {
  month: number
  seasons: SeasonTable
  ingredientById: Map<string, Ingredient>
}

/** Sans indication, une recette est un plat : c'est le cas de tout ce qu'on saisit à la main. */
export const courseOf = (r: Recipe): Course => r.course ?? 'plat'

const isQuick = (r: Recipe) => r.minutes !== undefined && r.minutes <= QUICK_MINUTES

/**
 * Recherche sur le nom ET les ingrédients : « courgette » doit trouver tous les plats qui en
 * contiennent, même quand le mot n'est pas dans le titre. Chaque mot tapé doit être trouvé
 * quelque part, dans n'importe quel ordre.
 */
export function matchesQuery(recipe: Recipe, query: string, ingredientById: Map<string, Ingredient>) {
  const words = fold(query).split(/\s+/).filter(Boolean)
  if (words.length === 0) return true
  const haystack = [
    recipe.name,
    ...recipe.items.map((i) => ingredientById.get(i.ingredientId)?.name ?? ''),
  ]
    .map(fold)
    .join(' | ')
  return words.every((w) => haystack.includes(w))
}

export function matchesFilters(recipe: Recipe, f: Filters, ctx: Context) {
  if (f.course !== null && courseOf(recipe) !== f.course) return false
  if (f.mains.length > 0 && (!recipe.main || !f.mains.includes(recipe.main))) return false
  if (f.quick && !isQuick(recipe)) return false
  if (f.easy && recipe.difficulty !== 'facile') return false
  if (f.cheap && recipe.price !== 1) return false
  if (f.season && seasonOf(recipe, ctx.month, ctx.seasons).status !== 'saison') return false
  return true
}

/* ----------------------------------------------------------------- rangées de l'accueil */

export type Row = { id: string; title: string; recipes: Recipe[] }

/** Au-delà, la rangée défile trop loin pour qu'on aille au bout : « Tout voir » prend le relais. */
const ROW_SIZE = 10

/**
 * Rangées thématiques de l'écran Recettes. Leur contenu est mélangé avec une graine du jour :
 * il change d'un jour à l'autre, mais pas à chaque fois qu'on revient sur l'écran.
 * Une rangée de moins de deux recettes n'apprend rien : elle est omise.
 */
export function buildRows(recipes: Recipe[], ctx: Context & { day: string }): Row[] {
  const plats = recipes.filter((r) => courseOf(r) === 'plat')
  const candidates: [string, string, Recipe[]][] = [
    [
      'saison',
      `De saison en ${MONTHS[ctx.month - 1]}`,
      plats.filter((r) => seasonOf(r, ctx.month, ctx.seasons).status === 'saison'),
    ],
    ['rapide', `Prêtes en ${QUICK_MINUTES} minutes`, plats.filter(isQuick)],
    ['petit-prix', 'Petits prix', plats.filter((r) => r.price === 1)],
    ['vege', 'Côté végé', plats.filter((r) => r.main === 'vege')],
    ['poisson', 'Côté mer', plats.filter((r) => r.main === 'poisson')],
    ['facile', 'Sans se compliquer', plats.filter((r) => r.difficulty === 'facile' && isQuick(r))],
    ['dessert', 'Pour finir en douceur', recipes.filter((r) => courseOf(r) === 'dessert')],
  ]
  return candidates
    .filter(([, , list]) => list.length >= 2)
    .map(([id, title, list]) => ({
      id,
      title,
      recipes: shuffle(list, seededRandom(`${ctx.day}:${id}`)).slice(0, ROW_SIZE),
    }))
}

/* ------------------------------------------------------------------ envies du générateur */

export type Wishes = {
  season: boolean
  quick: boolean
  cheap: boolean
  vege: boolean
  fish: boolean
  favorites: boolean
}

export const NO_WISHES: Wishes = {
  season: false,
  quick: false,
  cheap: false,
  vege: false,
  fish: false,
  favorites: false,
}

/**
 * Recettes parmi lesquelles le générateur pioche. Uniquement des plats : un dessert ne fait
 * pas un repas.
 *
 * « De saison » est ici plus souple que le filtre de l'écran Recettes : il écarte les plats
 * hors saison mais garde les plats neutres (pâtes, quiche…), sinon le menu se réduirait aux
 * seules recettes à base de légumes.
 */
export function menuPool(
  recipes: Recipe[],
  wishes: Wishes,
  ctx: Context & { favorites: Set<string> },
): Recipe[] {
  const mains: Main[] = [...(wishes.vege ? ['vege' as const] : []), ...(wishes.fish ? ['poisson' as const] : [])]
  return recipes.filter((r) => {
    if (courseOf(r) !== 'plat') return false
    if (wishes.favorites && !ctx.favorites.has(r.id)) return false
    if (wishes.quick && !isQuick(r)) return false
    if (wishes.cheap && r.price !== 1) return false
    if (mains.length > 0 && (!r.main || !mains.includes(r.main))) return false
    if (wishes.season && seasonOf(r, ctx.month, ctx.seasons).status === 'hors-saison') return false
    return true
  })
}
