import { describe, expect, it } from 'vitest'
import { CATALOGUE } from '../data/catalogue'
import { SEASONS } from '../data/seasons'
import { generateMenu, pickReplacement } from './generator'
import { missingIngredients, pruneUnchangedCopies, resolveRecipes } from './library'
import { seededRandom } from './random'
import {
  buildRows,
  matchesFilters,
  matchesQuery,
  menuPool,
  NO_FILTERS,
  NO_WISHES,
  type Context,
} from './recipeFilters'
import { seasonOf } from './season'
import { fold } from './text'
import type { Main, Recipe } from './types'

const ingredientById = new Map(CATALOGUE.map((i) => [i.id, i]))
const NOVEMBRE = 11
const JUILLET = 7
const ctx: Context = { month: NOVEMBRE, seasons: SEASONS, ingredientById }

/** Recette de test : seuls comptent les champs que chaque test précise. */
const recipe = (id: string, over: Partial<Recipe> = {}): Recipe => ({
  id,
  name: id,
  servings: 2,
  steps: 'a\nb\nc',
  items: [],
  course: 'plat',
  ...over,
})

const items = (...ids: string[]) => ids.map((ingredientId) => ({ ingredientId, qty: 1 }))

const veloute = recipe('veloute', { name: 'Velouté de poireaux', items: items('poireau', 'pomme-de-terre') })
const ratatouille = recipe('ratatouille', { items: items('courgette', 'aubergine', 'poireau') })
const pates = recipe('pates', { name: 'Pâtes carbonara', items: items('pates', 'lardons') })

describe('fold', () => {
  it('rend la recherche insensible aux accents, à la casse et aux ligatures', () => {
    expect(fold('  Crème Brûlée ')).toBe('creme brulee')
    expect(fold('Œuf')).toBe('oeuf')
  })
})

describe('seasonOf', () => {
  it('reconnaît un plat dont tous les produits saisonniers sont de saison', () => {
    const s = seasonOf(veloute, NOVEMBRE, SEASONS)
    expect(s.status).toBe('saison')
    // La pomme de terre, disponible toute l'année, n'est pas citée comme argument.
    expect(s.inSeason).toEqual(['poireau'])
  })

  it('déclasse un plat dès qu’un seul produit est hors saison', () => {
    const s = seasonOf(ratatouille, NOVEMBRE, SEASONS)
    expect(s.status).toBe('hors-saison')
    expect(s.outOfSeason).toEqual(['courgette', 'aubergine'])
  })

  it('suit le mois : la ratatouille est de saison en été, le velouté ne l’est plus', () => {
    expect(seasonOf(recipe('r', { items: items('courgette', 'tomate') }), JUILLET, SEASONS).status).toBe('saison')
    expect(seasonOf(veloute, JUILLET, SEASONS).status).toBe('hors-saison')
  })

  it('laisse neutre un plat sans produit saisonnier', () => {
    expect(seasonOf(pates, NOVEMBRE, SEASONS).status).toBe('neutre')
  })
})

describe('matchesQuery', () => {
  it('trouve un plat par un de ses ingrédients, sans accent ni majuscule', () => {
    expect(matchesQuery(ratatouille, 'COURGETTE', ingredientById)).toBe(true)
    expect(matchesQuery(pates, 'pâtes', ingredientById)).toBe(true)
    expect(matchesQuery(pates, 'courgette', ingredientById)).toBe(false)
  })

  it('exige chaque mot tapé, dans n’importe quel ordre', () => {
    expect(matchesQuery(veloute, 'poireaux velouté', ingredientById)).toBe(true)
    expect(matchesQuery(veloute, 'velouté tomate', ingredientById)).toBe(false)
    expect(matchesQuery(veloute, '   ', ingredientById)).toBe(true)
  })
})

describe('matchesFilters', () => {
  const rapide = recipe('rapide', { minutes: 20, difficulty: 'facile', price: 1, main: 'vege' })
  const long = recipe('long', { minutes: 90, difficulty: 'moyen', price: 3, main: 'viande' })
  const dessert = recipe('dessert', { course: 'dessert', minutes: 15 })
  const saisie = recipe('saisie', { course: undefined })

  it('n’écarte rien sans filtre', () => {
    for (const r of [rapide, long, dessert, saisie]) expect(matchesFilters(r, NO_FILTERS, ctx)).toBe(true)
  })

  it('filtre sur le temps, la difficulté et le prix', () => {
    expect(matchesFilters(rapide, { ...NO_FILTERS, quick: true, easy: true, cheap: true }, ctx)).toBe(true)
    expect(matchesFilters(long, { ...NO_FILTERS, quick: true }, ctx)).toBe(false)
    expect(matchesFilters(long, { ...NO_FILTERS, easy: true }, ctx)).toBe(false)
    expect(matchesFilters(long, { ...NO_FILTERS, cheap: true }, ctx)).toBe(false)
  })

  it('traite plusieurs catégories cochées comme l’une ou l’autre', () => {
    const f = { ...NO_FILTERS, mains: ['vege', 'poisson'] as Main[] }
    expect(matchesFilters(rapide, f, ctx)).toBe(true)
    expect(matchesFilters(long, f, ctx)).toBe(false)
  })

  it('range parmi les plats une recette saisie sans type', () => {
    expect(matchesFilters(saisie, { ...NO_FILTERS, course: 'plat' }, ctx)).toBe(true)
    expect(matchesFilters(dessert, { ...NO_FILTERS, course: 'plat' }, ctx)).toBe(false)
    expect(matchesFilters(dessert, { ...NO_FILTERS, course: 'dessert' }, ctx)).toBe(true)
  })

  it('« De saison » ne garde que les plats franchement de saison', () => {
    const f = { ...NO_FILTERS, season: true }
    expect(matchesFilters(veloute, f, ctx)).toBe(true)
    expect(matchesFilters(ratatouille, f, ctx)).toBe(false)
    expect(matchesFilters(pates, f, ctx)).toBe(false)
  })
})

describe('buildRows', () => {
  const all = [
    veloute,
    recipe('soupe', { items: items('poireau', 'chou-fleur'), minutes: 25, price: 1 }),
    ratatouille,
    pates,
    recipe('tarte', { course: 'dessert' }),
  ]

  it('titre la rangée de saison avec le mois en cours et n’y met que des plats de saison', () => {
    const rows = buildRows(all, { ...ctx, day: '2026-11-05' })
    const season = rows.find((r) => r.id === 'saison')!
    expect(season.title).toBe('De saison en novembre')
    expect(season.recipes.map((r) => r.id).sort()).toEqual(['soupe', 'veloute'])
  })

  it('omet les rangées de moins de deux recettes', () => {
    const rows = buildRows(all, { ...ctx, day: '2026-11-05' })
    expect(rows.map((r) => r.id)).not.toContain('dessert')
    expect(rows.map((r) => r.id)).not.toContain('rapide')
  })

  it('garde le même ordre toute la journée et le change le lendemain', () => {
    const many = Array.from({ length: 12 }, (_, i) => recipe(`r${i}`, { price: 1 }))
    const order = (day: string) =>
      buildRows(many, { ...ctx, day }).find((r) => r.id === 'petit-prix')!.recipes.map((r) => r.id)
    expect(order('2026-11-05')).toEqual(order('2026-11-05'))
    expect(order('2026-11-05')).not.toEqual(order('2026-11-06'))
    expect(order('2026-11-05')).toHaveLength(10)
  })
})

describe('menuPool', () => {
  const pool = (wishes: Partial<typeof NO_WISHES>, favorites: string[] = []) =>
    menuPool([veloute, ratatouille, pates, recipe('tarte', { course: 'dessert' })], { ...NO_WISHES, ...wishes }, {
      ...ctx,
      favorites: new Set(favorites),
    }).map((r) => r.id)

  it('ne propose jamais de dessert comme repas', () => {
    expect(pool({})).toEqual(['veloute', 'ratatouille', 'pates'])
  })

  it('« De saison » écarte le hors-saison mais garde les plats neutres', () => {
    expect(pool({ season: true })).toEqual(['veloute', 'pates'])
  })

  it('peut se limiter aux favoris', () => {
    expect(pool({ favorites: true }, ['pates', 'tarte'])).toEqual(['pates'])
  })
})

describe('generateMenu', () => {
  const family = (main: Main, n: number) =>
    Array.from({ length: n }, (_, i) => recipe(`${main}${i}`, { main }))
  const pool = [...family('volaille', 6), ...family('vege', 3), ...family('poisson', 2), ...family('viande', 2)]

  it('tire le nombre demandé de repas, tous différents', () => {
    const menu = generateMenu(pool, 5, seededRandom(1))
    expect(menu).toHaveLength(5)
    expect(new Set(menu.map((r) => r.id)).size).toBe(5)
  })

  it('ne sert jamais deux fois de suite la même famille quand c’est possible', () => {
    for (let seed = 0; seed < 50; seed++) {
      const menu = generateMenu(pool, 6, seededRandom(seed))
      for (let i = 1; i < menu.length; i++) expect(menu[i].main, `graine ${seed}`).not.toBe(menu[i - 1].main)
    }
  })

  it('plafonne une famille à la moitié du menu malgré une majorité de poulet', () => {
    for (let seed = 0; seed < 50; seed++) {
      const menu = generateMenu(pool, 6, seededRandom(seed))
      expect(menu.filter((r) => r.main === 'volaille').length, `graine ${seed}`).toBeLessThanOrEqual(3)
    }
  })

  it('complète sans contrainte plutôt que de rendre un menu incomplet', () => {
    const menu = generateMenu(family('vege', 4), 4, seededRandom(3))
    expect(menu).toHaveLength(4)
  })

  it('rend ce qu’il peut quand il n’y a pas assez de recettes', () => {
    expect(generateMenu(family('vege', 2), 5, seededRandom(3))).toHaveLength(2)
  })
})

describe('pickReplacement', () => {
  const a = recipe('a', { main: 'volaille' })
  const b = recipe('b', { main: 'volaille' })
  const c = recipe('c', { main: 'poisson' })

  it('propose un plat absent du menu, d’une autre famille si possible', () => {
    for (let seed = 0; seed < 20; seed++) {
      expect(pickReplacement([a, b, c], ['a'], a, seededRandom(seed))?.id).toBe('c')
    }
  })

  it('se rabat sur la même famille, puis sur rien', () => {
    expect(pickReplacement([a, b, c], ['a', 'c'], a, seededRandom(1))?.id).toBe('b')
    expect(pickReplacement([a, b], ['a', 'b'], a, seededRandom(1))).toBeNull()
  })
})

describe('bibliothèque et recettes stockées', () => {
  const base = recipe('base-x', { name: 'Original', minutes: 30, price: 1, emoji: '🍲' })
  const library = [base, recipe('base-y')]

  it('remplace l’original par la version modifiée, métadonnées comprises', () => {
    const mine = { ...base, name: 'Ma version', minutes: 45 }
    const resolved = resolveRecipes(library, [mine])
    expect(resolved.map((r) => r.name)).toEqual(['Ma version', 'base-y'])
    expect(resolved[0].minutes).toBe(45)
  })

  it('complète une ancienne copie avec les métadonnées de la bibliothèque', () => {
    // Copie enregistrée avant que les métadonnées existent : elle garde ses modifications
    // et gagne le temps, le prix et la vignette de l'original.
    const { course: _c, minutes: _m, price: _p, emoji: _e, ...old } = { ...base, name: 'Modifiée' }
    const resolved = resolveRecipes(library, [old])
    expect(resolved[0]).toMatchObject({ name: 'Modifiée', minutes: 30, price: 1, emoji: '🍲', course: 'plat' })
  })

  it('ajoute à la suite les recettes créées par l’utilisateur', () => {
    const own = recipe('uuid-1', { name: 'Gratin de mamie' })
    expect(resolveRecipes(library, [own]).map((r) => r.id)).toEqual(['base-x', 'base-y', 'uuid-1'])
  })

  it('oublie les copies jamais modifiées, garde les modifiées et celles avec photo', () => {
    const untouched = { ...base }
    const edited = { ...recipe('base-y'), steps: 'autre' }
    const own = recipe('uuid-1')
    expect(pruneUnchangedCopies([untouched, edited, own], library).map((r) => r.id)).toEqual(['base-y', 'uuid-1'])
    const withPhoto = { ...base, photo: new Blob(['x']) }
    expect(pruneUnchangedCopies([withPhoto], library)).toHaveLength(1)
  })

  it('signale les ingrédients du catalogue qui manquent aux recettes', () => {
    const r = recipe('r', { items: items('tomate', 'poireau') })
    const present = CATALOGUE.filter((i) => i.id === 'tomate')
    expect(missingIngredients(present, [r], CATALOGUE).map((i) => i.id)).toEqual(['poireau'])
  })
})
