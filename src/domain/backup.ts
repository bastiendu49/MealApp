import {
  AISLES,
  COURSES,
  DIFFICULTIES,
  EQUIPMENTS,
  MAINS,
  PRICES,
  type Aisle,
  type CartEntry,
  type Equipment,
  type Checked,
  type Extra,
  type Ingredient,
  type Recipe,
} from './types'
import { uid } from './id'

/**
 * Format du fichier de sauvegarde. Les photos y voyagent en data URL : le JSON reste un
 * fichier unique qu'on peut envoyer par mail ou déposer sur un cloud.
 *
 * v2 : métadonnées des recettes (temps, prix…) et favoris. Seules les recettes stockées sur
 * le téléphone y figurent (créées ou modifiées par l'utilisateur) : la bibliothèque est dans
 * le code. Un fichier v1 reste importable.
 */
export type Backup = {
  version: 2
  exportedAt: string
  /** Absent d'un fichier v1 : on garde alors les favoris actuels plutôt que de les vider. */
  favorites?: string[]
  ingredients: Ingredient[]
  recipes: (Omit<Recipe, 'photo'> & { photo?: string })[]
  cart: CartEntry[]
  extras: Extra[]
  checked: Checked
}

export const BACKUP_VERSION = 2

/** Versions que l'import sait relire. */
const READABLE = [1, 2]

type Result = { ok: true; data: Backup } | { ok: false; error: string }

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

/** Un rayon inconnu ne doit pas faire échouer tout l'import : l'article atterrit dans Autres. */
const toAisle = (v: unknown): Aisle => (AISLES.includes(v as Aisle) ? (v as Aisle) : 'Autres')

/**
 * Valide un fichier de sauvegarde avant de remplacer les données de l'application.
 *
 * Volontairement strict sur la structure : un import écrase tout, donc mieux vaut refuser un
 * fichier douteux que restaurer des recettes amputées sans que personne ne s'en aperçoive.
 * Tolérant en revanche sur ce qui est optionnel (panier, cochages), qui n'a rien d'essentiel.
 */
export function parseBackup(text: string): Result {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { ok: false, error: 'Ce fichier n’est pas un JSON valide.' }
  }
  if (!isObject(raw)) return { ok: false, error: 'Fichier de sauvegarde illisible.' }
  if (!READABLE.includes(raw.version as number)) {
    return { ok: false, error: `Version de sauvegarde non reconnue (attendu ${BACKUP_VERSION}).` }
  }
  if (!Array.isArray(raw.ingredients) || !Array.isArray(raw.recipes)) {
    return { ok: false, error: 'Le fichier ne contient ni ingrédients ni repas.' }
  }

  const ingredients: Ingredient[] = []
  for (const entry of raw.ingredients) {
    if (!isObject(entry)) return { ok: false, error: 'Un ingrédient est illisible.' }
    const id = str(entry.id)
    const name = str(entry.name)
    const unit = str(entry.unit)
    // Sans unité, l'addition des quantités n'a plus de sens : c'est l'invariant de l'app.
    if (!id || !name || !unit) {
      return { ok: false, error: `Ingrédient incomplet : « ${name || id || '?'} ».` }
    }
    ingredients.push({ id, name, unit, aisle: toAisle(entry.aisle), pantry: entry.pantry === true })
  }

  const recipes: Backup['recipes'] = []
  for (const entry of raw.recipes) {
    if (!isObject(entry)) return { ok: false, error: 'Un repas est illisible.' }
    const id = str(entry.id)
    const name = str(entry.name)
    const servings = Number(entry.servings)
    if (!id || !name) return { ok: false, error: `Repas incomplet : « ${name || id || '?'} ».` }
    if (!Number.isFinite(servings) || servings < 1) {
      return { ok: false, error: `Nombre de personnes invalide pour « ${name} ».` }
    }
    if (!Array.isArray(entry.items)) {
      return { ok: false, error: `Liste d’ingrédients manquante pour « ${name} ».` }
    }

    const items = []
    for (const item of entry.items) {
      if (!isObject(item)) return { ok: false, error: `Ingrédient illisible dans « ${name} ».` }
      const ingredientId = str(item.ingredientId)
      if (!ingredientId) return { ok: false, error: `Ingrédient sans référence dans « ${name} ».` }
      if (item.qty === null || item.qty === undefined) {
        items.push({ ingredientId, qty: null })
        continue
      }
      const qty = Number(item.qty)
      if (!Number.isFinite(qty) || qty < 0) {
        return { ok: false, error: `Quantité invalide dans « ${name} ».` }
      }
      items.push({ ingredientId, qty })
    }

    recipes.push({
      id,
      name,
      servings,
      steps: typeof entry.steps === 'string' ? entry.steps : '',
      items,
      ...metadata(entry),
      ...(typeof entry.photo === 'string' && entry.photo.startsWith('data:')
        ? { photo: entry.photo }
        : {}),
    })
  }

  const cart: CartEntry[] = Array.isArray(raw.cart)
    ? raw.cart.flatMap((e) => {
        if (!isObject(e)) return []
        const recipeId = str(e.recipeId)
        const servings = Number(e.servings)
        if (!recipeId || !Number.isFinite(servings) || servings < 1) return []
        return [{ id: str(e.id) || uid(), recipeId, servings }]
      })
    : []

  const extras: Extra[] = Array.isArray(raw.extras)
    ? raw.extras.flatMap((e) => {
        if (!isObject(e)) return []
        const ingredientId = str(e.ingredientId)
        if (!ingredientId) return []
        const qty = e.qty === null || e.qty === undefined ? null : Number(e.qty)
        return [
          {
            id: str(e.id) || uid(),
            ingredientId,
            qty: qty !== null && Number.isFinite(qty) ? qty : null,
          },
        ]
      })
    : []

  const favorites = Array.isArray(raw.favorites)
    ? raw.favorites.filter((f): f is string => typeof f === 'string' && !!f)
    : undefined

  const checked: Checked = {}
  if (isObject(raw.checked)) {
    for (const [key, value] of Object.entries(raw.checked)) {
      const n = Number(value)
      checked[key] = value === null || !Number.isFinite(n) ? null : n
    }
  }

  return {
    ok: true,
    data: {
      version: BACKUP_VERSION,
      exportedAt: str(raw.exportedAt) || new Date().toISOString(),
      ingredients,
      recipes,
      cart,
      extras,
      checked,
      ...(favorites ? { favorites } : {}),
    },
  }
}

/** Métadonnées facultatives : une valeur inconnue est ignorée, jamais une cause de refus. */
type Metadata = Partial<Pick<Recipe, 'course' | 'main' | 'minutes' | 'difficulty' | 'price' | 'emoji' | 'equipment' | 'healthy'>>

function metadata(entry: Record<string, unknown>): Metadata {
  const out: Metadata = {}
  if (COURSES.includes(entry.course as never)) out.course = entry.course as Recipe['course']
  if (MAINS.includes(entry.main as never)) out.main = entry.main as Recipe['main']
  if (DIFFICULTIES.includes(entry.difficulty as never)) {
    out.difficulty = entry.difficulty as Recipe['difficulty']
  }
  if (PRICES.includes(entry.price as never)) out.price = entry.price as Recipe['price']
  const minutes = Number(entry.minutes)
  if (entry.minutes !== undefined && Number.isFinite(minutes) && minutes > 0) out.minutes = minutes
  if (typeof entry.emoji === 'string' && entry.emoji.trim()) out.emoji = entry.emoji.trim()
  if (Array.isArray(entry.equipment)) {
    const equipment = entry.equipment.filter((e): e is Equipment => EQUIPMENTS.includes(e as never))
    if (equipment.length > 0) out.equipment = equipment
  }
  if (entry.healthy === true) out.healthy = true
  return out
}
