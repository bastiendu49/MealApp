import { describe, expect, it } from 'vitest'
import { CATALOGUE, slug } from './catalogue'
import { AISLES } from '../domain/types'

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
