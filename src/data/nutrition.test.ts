import { describe, expect, it } from 'vitest'
import { proteinPerServing } from '../domain/nutrition'
import { CATALOGUE } from './catalogue'
import { recipe } from './library/dsl'
import { LIBRARY } from './library'
import { PROTEIN } from './protein'

/** Féculents qui font d'une assiette un repas complet de sportif. */
const STARCHES = new Set([
  'riz', 'riz-rond', 'riz-arborio', 'pates', 'spaghetti', 'coquillettes', 'penne', 'tagliatelles',
  'feuilles-de-lasagne', 'nouilles-de-riz', 'nouilles-chinoises', 'quinoa', 'boulgour', 'semoule',
  'lentilles', 'lentilles-corail', 'pois-chiches', 'haricots-rouges', 'haricots-blancs', 'gnocchis',
  'pomme-de-terre', 'patate-douce', 'flocons-d-avoine', 'pain-de-campagne', 'pain-pita',
  'tortilla-de-ble', 'pain-a-burger', 'galette-de-sarrasin', 'pain-de-mie', 'baguette',
])
const FROZEN_VEG = new Set(['petits-pois-surgeles', 'epinards-surgeles', 'haricots-verts-surgeles'])

const byId = new Map(CATALOGUE.map((i) => [i.id, i]))

describe('protéines estimées', () => {
  it('ne parle que d’ingrédients du catalogue', () => {
    expect(Object.keys(PROTEIN).filter((id) => !byId.has(id))).toEqual([])
  })

  it('additionne par portion et ignore les « qs »', () => {
    const r = recipe(
      'Test protéines',
      '🍗 plat volaille 20 facile 1 poele 2',
      'Blanc de poulet 2, Riz 150, Œuf 2, Huile d\'olive',
      'a\nb\nc',
    )
    // (2 × 34 + 150 × 0,07 + 2 × 6,5) / 2 = 45,75
    expect(proteinPerServing(r, PROTEIN)).toBe(46)
  })

  it('suit le nombre de portions de la recette', () => {
    const pour4 = recipe('Test x4', '🍗 plat volaille 20 facile 1 poele 4', 'Blanc de poulet 4', 'a\nb\nc')
    expect(proteinPerServing(pour4, PROTEIN)).toBe(34)
  })
})

describe('recettes healthy', () => {
  const healthy = LIBRARY.filter((r) => r.healthy)

  it('apportent au moins 35 g de protéines par portion', () => {
    // C'est la promesse faite à un sportif : une assiette « healthy » nourrit vraiment.
    const faibles = healthy
      .map((r) => `${r.name} : ${proteinPerServing(r, PROTEIN)} g`)
      .filter((_, i) => proteinPerServing(healthy[i], PROTEIN) < 35)
    expect(faibles).toEqual([])
  })

  it('sont des assiettes complètes : un féculent et des légumes', () => {
    const incompletes = healthy.flatMap((r) => {
      const ids = r.items.map((i) => i.ingredientId)
      const starch = ids.some((id) => STARCHES.has(id))
      const veg = ids.some((id) => byId.get(id)?.aisle === 'Fruits & légumes' || FROZEN_VEG.has(id))
      return starch && veg ? [] : [`${r.name}${starch ? '' : ' (sans féculent)'}${veg ? '' : ' (sans légumes)'}`]
    })
    expect(incompletes).toEqual([])
  })
})
