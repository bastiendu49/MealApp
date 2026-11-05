import type { Recipe } from './types'

export type ProteinTable = Record<string, number>

/** Seuil du filtre « Protéiné » : un repas d'adulte sportif vise 30 à 40 g de protéines. */
export const HIGH_PROTEIN = 30

/**
 * Protéines estimées par portion, arrondies au gramme. « qs » et ingrédients absents de la
 * table comptent pour zéro : l'estimation pèche par défaut, jamais par excès.
 */
export function proteinPerServing(recipe: Recipe, table: ProteinTable): number {
  const total = recipe.items.reduce(
    (sum, { ingredientId, qty }) => sum + (qty === null ? 0 : qty * (table[ingredientId] ?? 0)),
    0,
  )
  return recipe.servings > 0 ? Math.round(total / recipe.servings) : 0
}
