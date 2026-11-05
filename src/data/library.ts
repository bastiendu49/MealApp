import type { Recipe } from '../domain/types'
import { BASE_RECIPES } from './baseRecipes'

/**
 * Bibliothèque de recettes livrée avec l'app. Elle vit dans le code, pas sur le téléphone :
 * chaque mise à jour l'enrichit sans toucher aux données de l'utilisateur.
 * Les lots suivants s'ajoutent ici.
 */
export const LIBRARY: Recipe[] = [...BASE_RECIPES]

export const LIBRARY_IDS = new Set(LIBRARY.map((r) => r.id))

/**
 * Favoris au premier lancement : les dix recettes choisies par l'utilisateur avant que la
 * bibliothèque existe. Valeur initiale seulement, comme le catalogue.
 */
export const INITIAL_FAVORITES = BASE_RECIPES.map((r) => r.id)
