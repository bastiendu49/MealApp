import type { Ingredient, Recipe } from './types'

/**
 * Deux sources de recettes :
 * - la bibliothèque, livrée avec le code : elle s'enrichit à chaque mise à jour de l'app ;
 * - les recettes stockées sur le téléphone : celles créées par l'utilisateur, et ses versions
 *   modifiées de recettes de la bibliothèque (même identifiant).
 *
 * Une version modifiée remplace l'originale. Les métadonnées qu'elle n'a pas (temps, prix…)
 * sont reprises de la bibliothèque : les copies enregistrées avant que ces champs existent
 * profitent ainsi des filtres sans rien perdre de leurs modifications.
 */
export function resolveRecipes(library: Recipe[], stored: Recipe[]): Recipe[] {
  const storedById = new Map(stored.map((r) => [r.id, r]))
  const libraryIds = new Set(library.map((r) => r.id))
  return [
    ...library.map((base) => {
      const mine = storedById.get(base.id)
      return mine ? { ...metadataOf(base), ...stripUndefined(mine) } : base
    }),
    ...stored.filter((r) => !libraryIds.has(r.id)),
  ]
}

const metadataOf = ({ course, main, minutes, difficulty, price, emoji, equipment }: Recipe) =>
  stripUndefined({ course, main, minutes, difficulty, price, emoji, equipment })

const stripUndefined = <T extends object>(o: T): T =>
  Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as T

const sameContent = (a: Recipe, b: Recipe) =>
  a.name === b.name &&
  a.servings === b.servings &&
  a.steps === b.steps &&
  JSON.stringify(a.items) === JSON.stringify(b.items)

/**
 * Retire du stockage les copies identiques à leur recette de bibliothèque.
 *
 * Avant la bibliothèque, les recettes fournies étaient recopiées sur le téléphone au premier
 * lancement. Ces copies jamais modifiées masqueraient pour toujours les corrections apportées
 * plus tard à l'original. Une copie modifiée ou avec une photo est gardée.
 */
export function pruneUnchangedCopies(stored: Recipe[], library: Recipe[]): Recipe[] {
  const libraryById = new Map(library.map((r) => [r.id, r]))
  return stored.filter((r) => {
    const base = libraryById.get(r.id)
    return !base || !!r.photo || !sameContent(r, base)
  })
}

/**
 * Ingrédients du catalogue dont les recettes ont besoin et qui manquent sur le téléphone :
 * ceux ajoutés au catalogue après la première installation ne sont jamais semés, et une
 * recette qui référence un ingrédient absent perd la ligne en silence dans la liste.
 */
export function missingIngredients(
  ingredients: Ingredient[],
  recipes: Recipe[],
  catalogue: Ingredient[],
): Ingredient[] {
  const known = new Set(ingredients.map((i) => i.id))
  const needed = new Set(recipes.flatMap((r) => r.items.map((i) => i.ingredientId)))
  return catalogue.filter((i) => needed.has(i.id) && !known.has(i.id))
}
