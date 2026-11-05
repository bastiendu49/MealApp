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

/** Plat ou dessert : le générateur de menu ne pioche que dans les plats. */
export const COURSES = ['plat', 'dessert'] as const
export type Course = (typeof COURSES)[number]

/** Ingrédient principal d'un plat, pour filtrer et varier le menu. */
export const MAINS = ['viande', 'volaille', 'poisson', 'vege'] as const
export type Main = (typeof MAINS)[number]

export const DIFFICULTIES = ['facile', 'moyen', 'difficile'] as const
export type Difficulty = (typeof DIFFICULTIES)[number]

/** Estimation relative du coût : € petit prix, €€ moyen, €€€ plus cher. Pas de vrais prix. */
export const PRICES = [1, 2, 3] as const
export type Price = (typeof PRICES)[number]

/** Ustensiles de cuisson, pour choisir selon ce qu'on a sous la main ou l'envie du soir. */
export const EQUIPMENTS = ['four', 'poele', 'airfryer', 'casserole', 'sans-cuisson'] as const
export type Equipment = (typeof EQUIPMENTS)[number]

export type Recipe = {
  id: string
  name: string
  /** Portions pour lesquelles les quantités ci-dessous sont écrites. */
  servings: number
  /** Une étape par ligne, numérotées à l'affichage. */
  steps: string
  items: RecipeItem[]
  photo?: Blob
  /* Métadonnées facultatives : une recette saisie à la main peut ne pas les avoir, elle
     n'apparaît alors simplement pas dans les filtres qui les demandent. */
  course?: Course
  main?: Main
  /** Temps total, préparation et cuisson comprises. */
  minutes?: number
  difficulty?: Difficulty
  price?: Price
  /** Vignette quand il n'y a pas de photo. */
  emoji?: string
  /** Ce qu'il faut pour la cuisson. Plusieurs = au choix ou ensemble (« four ou airfryer »). */
  equipment?: Equipment[]
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
