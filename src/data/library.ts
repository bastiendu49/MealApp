import type { Recipe } from '../domain/types'
import { BASE_RECIPES } from './baseRecipes'
import { DESSERTS_1 } from './library/desserts1'
import { DESSERTS_2 } from './library/desserts2'
import { JOW_FAVORITES } from './library/jow'
import { PLATS_1 } from './library/plats1'
import { PLATS_2 } from './library/plats2'

/**
 * Bibliothèque de recettes livrée avec l'app. Elle vit dans le code, pas sur le téléphone :
 * chaque mise à jour l'enrichit sans toucher aux données de l'utilisateur.
 * Les lots suivants s'ajoutent ici (format compact : voir library/dsl.ts).
 */
export const LIBRARY: Recipe[] = [...BASE_RECIPES, ...JOW_FAVORITES, ...PLATS_1, ...PLATS_2, ...DESSERTS_1, ...DESSERTS_2]

export const LIBRARY_IDS = new Set(LIBRARY.map((r) => r.id))

/**
 * Favoris au premier lancement : les dix recettes choisies par l'utilisateur avant que la
 * bibliothèque existe. Valeur initiale seulement, comme le catalogue.
 */
export const INITIAL_FAVORITES = BASE_RECIPES.map((r) => r.id)
