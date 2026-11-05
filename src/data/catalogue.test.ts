import { describe, expect, it } from 'vitest'
import { CATALOGUE, slug } from './catalogue'
import { AISLES } from '../domain/types'
import { LIBRARY } from './library'
import { SEASONS } from './seasons'
import { COURSES, DIFFICULTIES, MAINS, PRICES } from '../domain/types'

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

describe('bibliothèque', () => {
  it('ne référence que des ingrédients existants du catalogue', () => {
    // Une faute de frappe dans un id ferait disparaître l'ingrédient de la liste de courses
    // sans le moindre message : buildShoppingList ignore les références inconnues.
    const known = new Set(CATALOGUE.map((i) => i.id))
    const unknown = LIBRARY.flatMap((r) =>
      r.items.filter((i) => !known.has(i.ingredientId)).map((i) => `${r.name} → ${i.ingredientId}`),
    )
    expect(unknown).toEqual([])
  })

  it('a des portions et des étapes exploitables', () => {
    for (const r of LIBRARY) {
      expect(r.servings, r.name).toBeGreaterThanOrEqual(1)
      expect(r.steps.split('\n').filter(Boolean).length, r.name).toBeGreaterThan(2)
      expect(r.items.length, r.name).toBeGreaterThan(0)
    }
  })
})

describe('bibliothèque — métadonnées', () => {
  it('n’a aucun identifiant de recette en double', () => {
    const ids = LIBRARY.map((r) => r.id)
    expect(ids.length).toBe(new Set(ids).size)
  })

  it('renseigne type, catégorie, temps, difficulté, prix et vignette de chaque recette', () => {
    // Une recette de la bibliothèque sans ces champs disparaîtrait de tous les filtres et
    // rangées sans que rien ne le signale.
    for (const r of LIBRARY) {
      expect(COURSES, r.name).toContain(r.course)
      if (r.course === 'plat') expect(MAINS, r.name).toContain(r.main)
      expect(r.minutes, r.name).toBeGreaterThan(0)
      expect(DIFFICULTIES, r.name).toContain(r.difficulty)
      expect(PRICES, r.name).toContain(r.price)
      expect(r.emoji, r.name).toBeTruthy()
    }
  })
})

describe('table des saisons', () => {
  it('ne parle que d’ingrédients du catalogue, avec des mois de 1 à 12', () => {
    const known = new Set(CATALOGUE.map((i) => i.id))
    for (const [id, months] of Object.entries(SEASONS)) {
      expect(known, id).toContain(id)
      expect(months.length, id).toBeGreaterThan(0)
      for (const m of months) expect(m >= 1 && m <= 12, `${id} : ${m}`).toBe(true)
    }
  })

  it('fait passer l’hiver du poireau par janvier', () => {
    expect(SEASONS.poireau).toEqual([9, 10, 11, 12, 1, 2, 3])
  })
})
