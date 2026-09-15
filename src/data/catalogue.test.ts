import { describe, expect, it } from 'vitest'
import { CATALOGUE, slug } from './catalogue'
import { AISLES } from '../domain/types'
import { BASE_RECIPES, mergeBaseRecipes } from './baseRecipes'

describe('catalogue de départ', () => {
  it('n’a aucun identifiant en double', () => {
    // Deux ingrédients partageant un id fusionneraient silencieusement dans la liste de courses.
    const ids = CATALOGUE.map((i) => i.id)
    expect(ids.length).toBe(new Set(ids).size)
  })

  it('n’a aucun identifiant vide et n’utilise que des rayons connus', () => {
    for (const i of CATALOGUE) {
      expect(i.id, i.name).not.toBe('')
      expect(i.unit, i.name).not.toBe('')
      expect(AISLES, i.name).toContain(i.aisle)
    }
  })

  it('range bien le sel et les épices en fond de placard', () => {
    const pantry = CATALOGUE.filter((i) => i.pantry).map((i) => i.name)
    expect(pantry).toContain('Sel')
    expect(pantry).toContain('Poivre')
    expect(pantry).toContain("Huile d'olive")
    expect(CATALOGUE.find((i) => i.name === 'Farine')?.pantry).toBe(false)
  })
})

describe('slug', () => {
  it('efface accents, casse et ponctuation', () => {
    expect(slug('Œuf')).toBe('uf') // « Œ » n'a pas de décomposition ASCII : acceptable, l'id reste unique
    expect(slug('Crème fraîche')).toBe('creme-fraiche')
    expect(slug("Huile d'olive")).toBe('huile-d-olive')
    expect(slug('  Épinard frais  ')).toBe('epinard-frais')
  })
})

describe('recettes fournies', () => {
  it('ne référence que des ingrédients existants du catalogue', () => {
    // Une faute de frappe dans un id ferait disparaître l'ingrédient de la liste de courses
    // sans le moindre message : buildShoppingList ignore les références inconnues.
    const known = new Set(CATALOGUE.map((i) => i.id))
    const unknown = BASE_RECIPES.flatMap((r) =>
      r.items.filter((i) => !known.has(i.ingredientId)).map((i) => `${r.name} → ${i.ingredientId}`),
    )
    expect(unknown).toEqual([])
  })

  it('a des portions et des étapes exploitables', () => {
    for (const r of BASE_RECIPES) {
      expect(r.servings, r.name).toBeGreaterThanOrEqual(1)
      expect(r.steps.split('\n').filter(Boolean).length, r.name).toBeGreaterThan(2)
      expect(r.items.length, r.name).toBeGreaterThan(0)
    }
  })
})

describe('mergeBaseRecipes', () => {
  it('ajoute les recettes fournies et les ingrédients qui leur manquent', () => {
    // Cas réel : les ingrédients ajoutés au catalogue après la première installation ne sont
    // jamais semés. Sans ce rattrapage, les lignes correspondantes disparaîtraient en silence
    // de la liste de courses.
    const merged = mergeBaseRecipes({ recipes: [], ingredients: [] })
    expect(merged.recipes).toHaveLength(BASE_RECIPES.length)
    const known = new Set(merged.ingredients.map((i) => i.id))
    for (const r of BASE_RECIPES) {
      for (const item of r.items) expect(known, `${r.name} → ${item.ingredientId}`).toContain(item.ingredientId)
    }
  })

  it('n’écrase ni ne duplique ce qui existe déjà', () => {
    const mine = { ...BASE_RECIPES[0], name: 'Ma version à moi' }
    const merged = mergeBaseRecipes({ recipes: [mine], ingredients: CATALOGUE })
    expect(merged.recipes.filter((r) => r.id === mine.id)).toEqual([mine])
    expect(merged.recipes).toHaveLength(BASE_RECIPES.length)
    expect(merged.ingredients).toEqual(CATALOGUE)
  })

  it('n’ajoute aucun ingrédient en double', () => {
    const merged = mergeBaseRecipes({ recipes: [], ingredients: CATALOGUE })
    const ids = merged.ingredients.map((i) => i.id)
    expect(ids.length).toBe(new Set(ids).size)
  })
})
