import type { Recipe } from '../domain/types'
import { BASE_RECIPES } from './baseRecipes'
import { DESSERTS_1 } from './library/desserts1'
import { DESSERTS_2 } from './library/desserts2'
import { DESSERTS_3 } from './library/desserts3'
import { DESSERTS_4 } from './library/desserts4'
import { FIT } from './library/fit'
import { FIT_2 } from './library/fit2'
import { JOW_FAVORITES } from './library/jow'
import { PLATS_1 } from './library/plats1'
import { PLATS_2 } from './library/plats2'
import { PLATS_3 } from './library/plats3'
import { PLATS_4 } from './library/plats4'
import { PLATS_5 } from './library/plats5'
import { PLATS_6 } from './library/plats6'
import { PLATS_7 } from './library/plats7'
import { PLATS_8 } from './library/plats8'
import { PLATS_9 } from './library/plats9'
import { PLATS_10 } from './library/plats10'

/**
 * Bibliothèque de recettes livrée avec l'app. Elle vit dans le code, pas sur le téléphone :
 * chaque mise à jour l'enrichit sans toucher aux données de l'utilisateur.
 * Les lots suivants s'ajoutent ici (format compact : voir library/dsl.ts).
 */
export const LIBRARY: Recipe[] = [...BASE_RECIPES, ...JOW_FAVORITES, ...PLATS_1, ...PLATS_2, ...PLATS_3, ...PLATS_4, ...PLATS_5, ...PLATS_6, ...PLATS_7, ...PLATS_8, ...PLATS_9, ...PLATS_10, ...FIT, ...FIT_2, ...DESSERTS_1, ...DESSERTS_2, ...DESSERTS_3, ...DESSERTS_4]

export const LIBRARY_IDS = new Set(LIBRARY.map((r) => r.id))

/**
 * Favoris au premier lancement : les dix recettes choisies par l'utilisateur avant que la
 * bibliothèque existe. Valeur initiale seulement, comme le catalogue.
 */
export const INITIAL_FAVORITES = BASE_RECIPES.map((r) => r.id)
