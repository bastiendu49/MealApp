/** Rayons, dans l'ordre où on traverse le magasin. L'ordre du tableau EST l'ordre d'affichage. */
export const AISLES = [
  'Fruits & légumes',
  'Boucherie & poissonnerie',
  'Crèmerie',
  'Épicerie',
  'Surgelés',
  'Boissons',
  'Entretien',
  'Autres',
] as const

export type Aisle = (typeof AISLES)[number]

/** Unités proposées par défaut. La liste n'est pas fermée : un ingrédient peut porter n'importe
 *  quel libellé ('botte', 'sachet'…). Seules 'g' et 'ml' sont converties à l'affichage. */
export const COMMON_UNITS = ['g', 'ml', 'pièce', 'gousse', 'botte', 'tranche', 'sachet', 'boîte']

/** Vrac = quantité continue, on l'arrondit à l'unité. Le reste se dénombre : on arrondit au
 *  supérieur, parce qu'on n'achète pas 1,5 œuf. */
export const isBulk = (unit: string) => unit === 'g' || unit === 'ml'

export type Ingredient = {
  id: string
  name: string
  /** Fixée à la création, jamais convertie entre familles. C'est l'invariant de toute l'app. */
  unit: string
  aisle: Aisle
  /** « J'en ai toujours » : apparaît dans la recette, pas dans la liste de courses. */
  pantry: boolean
}

/** `qty: null` = « quantité suffisante », affiché « qs », jamais additionné. */
export type RecipeItem = { ingredientId: string; qty: number | null }

export type Recipe = {
  id: string
  name: string
  /** Portions pour lesquelles les quantités ci-dessous sont écrites. */
  servings: number
  /** Une étape par ligne, numérotées à l'affichage. */
  steps: string
  items: RecipeItem[]
  photo?: Blob
}

/** Un repas ajouté deux fois = deux entrées, éventuellement avec des convives différents. */
export type CartEntry = { id: string; recipeId: string; servings: number }

/**
 * Article ajouté à la main. Il référence un ingrédient du catalogue : on récupère ainsi son
 * rayon et son unité, et l'article reste disponible pour les fois suivantes.
 */
export type Extra = { id: string; ingredientId: string; qty: number | null }

/**
 * Articles cochés : clé de ligne -> quantité au moment du cochage.
 * Mémoriser la quantité permet de signaler qu'elle a augmenté depuis (un repas ajouté au
 * panier pendant les courses) au lieu de décocher silencieusement une ligne déjà prise.
 */
export type Checked = Record<string, number | null>
