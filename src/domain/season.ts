import type { Recipe } from './types'

export type SeasonTable = Record<string, number[]>

export type Season = {
  /**
   * 'saison' : le plat contient des produits saisonniers, tous de saison ce mois-ci.
   * 'hors-saison' : au moins un ne l'est pas.
   * 'neutre' : aucun produit saisonnier (pâtes, viande, placard…), la question ne se pose pas.
   */
  status: 'saison' | 'hors-saison' | 'neutre'
  /** Identifiants des produits de saison, pour expliquer pourquoi le plat est mis en avant. */
  inSeason: string[]
  outOfSeason: string[]
}

export function seasonOf(recipe: Recipe, month: number, table: SeasonTable): Season {
  const inSeason: string[] = []
  const outOfSeason: string[] = []
  for (const { ingredientId } of recipe.items) {
    const months = table[ingredientId]
    if (!months) continue
    const list = months.includes(month) ? inSeason : outOfSeason
    if (!list.includes(ingredientId)) list.push(ingredientId)
  }
  const status = outOfSeason.length > 0 ? 'hors-saison' : inSeason.length > 0 ? 'saison' : 'neutre'
  return { status, inSeason, outOfSeason }
}
