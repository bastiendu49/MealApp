import { AISLES, isBulk, type Aisle, type CartEntry, type Extra, type Ingredient, type Recipe } from './types'

/** D'où vient une quantité, pour pouvoir déplier une ligne de la liste. */
export type LineSource = { recipeName: string; qty: number | null }

export type Line = {
  key: string
  name: string
  /** null = « qs » : aucune recette n'a donné de quantité chiffrée. */
  qty: number | null
  unit: string
  aisle: Aisle
  sources: LineSource[]
}

export type ShoppingList = {
  groups: { aisle: Aisle; lines: Line[] }[]
  /** Ingrédients « j'en ai toujours » : montrés à part, pas à acheter. */
  pantry: Line[]
}

/** Les flottants font dériver 3 × (1/3) à 0.9999999999999998 ; sans marge, ceil renverrait 2. */
const EPS = 1e-9

/** On arrondit au supérieur ce qui se dénombre : il faut acheter 2 œufs pour en utiliser 1,5. */
const roundForList = (qty: number, unit: string) =>
  isBulk(unit) ? Math.round(qty) : Math.ceil(qty - EPS)

const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, 'fr')

/**
 * Transforme le panier en liste de courses. Fonction pure : c'est le seul calcul non trivial de
 * l'app, et le seul endroit où un bug serait invisible à l'écran.
 */
export function buildShoppingList(input: {
  cart: CartEntry[]
  recipes: Recipe[]
  ingredients: Ingredient[]
  extras?: Extra[]
}): ShoppingList {
  const { cart, recipes, ingredients, extras = [] } = input
  const recipeById = new Map(recipes.map((r) => [r.id, r]))
  const ingredientById = new Map(ingredients.map((i) => [i.id, i]))

  const acc = new Map<string, { ingredient: Ingredient; qty: number | null; sources: LineSource[] }>()

  for (const entry of cart) {
    const recipe = recipeById.get(entry.recipeId)
    if (!recipe) continue // repas supprimé mais encore au panier
    const factor = recipe.servings > 0 ? entry.servings / recipe.servings : 1

    for (const item of recipe.items) {
      const ingredient = ingredientById.get(item.ingredientId)
      if (!ingredient) continue // ingrédient supprimé mais encore référencé
      const scaled = item.qty === null ? null : item.qty * factor

      let bucket = acc.get(ingredient.id)
      if (!bucket) {
        bucket = { ingredient, qty: null, sources: [] }
        acc.set(ingredient.id, bucket)
      }
      bucket.sources.push({ recipeName: recipe.name, qty: scaled })
      // Un « qs » ne contribue pas au total, mais reste visible dans les sources.
      if (scaled !== null) bucket.qty = (bucket.qty ?? 0) + scaled
    }
  }

  const toBuy: Line[] = []
  const pantry: Line[] = []
  for (const { ingredient, qty, sources } of acc.values()) {
    const line: Line = {
      key: ingredient.id,
      name: ingredient.name,
      qty: qty === null ? null : roundForList(qty, ingredient.unit),
      unit: ingredient.unit,
      aisle: ingredient.aisle,
      sources,
    }
    ;(ingredient.pantry ? pantry : toBuy).push(line)
  }

  for (const extra of extras) {
    toBuy.push({ key: extra.id, name: extra.name, qty: null, unit: '', aisle: extra.aisle, sources: [] })
  }

  const groups = AISLES.map((aisle) => ({
    aisle,
    lines: toBuy.filter((l) => l.aisle === aisle).sort(byName),
  })).filter((g) => g.lines.length > 0)

  return { groups, pantry: pantry.sort(byName) }
}

/** Quantités d'une recette ramenées à un nombre de convives, pour la fiche détail. */
export function scaleRecipe(recipe: Recipe, servings: number, ingredients: Ingredient[]) {
  const ingredientById = new Map(ingredients.map((i) => [i.id, i]))
  const factor = recipe.servings > 0 ? servings / recipe.servings : 1
  return recipe.items.flatMap((item) => {
    const ingredient = ingredientById.get(item.ingredientId)
    if (!ingredient) return []
    return [{ ingredient, qty: item.qty === null ? null : item.qty * factor }]
  })
}

/** Arrondi d'affichage : 2 décimales maximum, sans zéros inutiles, virgule française. */
const trim = (n: number) => (Math.round(n * 100) / 100).toLocaleString('fr-FR')

/** 'g' et 'ml' passent en kg/L au-delà de 1000. Aucune autre conversion : jamais de g vers ml. */
export function formatQty(qty: number | null, unit: string): string {
  if (qty === null) return 'qs'
  if (unit === 'g' && qty >= 1000) return `${trim(qty / 1000)} kg`
  if (unit === 'ml' && qty >= 1000) return `${trim(qty / 1000)} L`
  if (!unit) return trim(qty)
  // 'pièce' → 'pièces', mais 'g' et 'ml' restent invariables.
  const plural = qty > 1 && unit.length > 2 && !unit.endsWith('s') ? `${unit}s` : unit
  return `${trim(qty)} ${plural}`
}
