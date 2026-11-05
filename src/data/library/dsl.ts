import {
  COURSES,
  DIFFICULTIES,
  EQUIPMENTS,
  MAINS,
  PRICES,
  type Course,
  type Difficulty,
  type Equipment,
  type Main,
  type Price,
  type Recipe,
} from '../../domain/types'
import { slug } from '../catalogue'

/**
 * Écriture compacte des recettes de la bibliothèque : plusieurs centaines de recettes en objets
 * complets seraient illisibles et impossibles à relire. Une recette tient en quatre arguments :
 *
 *   recipe('Poulet au curry & riz',
 *     '🍛 plat volaille 30 facile 1 poele 2',
 *     'Blanc de poulet 2, Lait de coco 200, Curry, Riz 150',
 *     `Couper le poulet en cubes.
 *      Le faire dorer…`)
 *
 * - métadonnées, dans cet ordre : emoji, type, [catégorie si plat], minutes, difficulté,
 *   prix (1 à 3), ustensiles séparés par des virgules, nombre de portions ;
 * - ingrédients par leur NOM du catalogue, quantité en fin (point décimal), sans quantité = « qs ».
 *   Le nom est converti en identifiant comme dans le catalogue : un test vérifie que chacun existe,
 *   une faute de frappe ferait sinon disparaître la ligne de la liste de courses ;
 * - étapes : une par ligne.
 *
 * Toute incohérence lève une erreur nommant la recette, au chargement du module : les tests
 * tombent avant qu'une recette bancale n'atteigne le téléphone.
 */
export function recipe(name: string, meta: string, items: string, steps: string): Recipe {
  const fail = (why: string): never => {
    throw new Error(`Recette « ${name} » : ${why}`)
  }
  const tokens = meta.trim().split(/\s+/)
  const emoji = tokens.shift() ?? fail('métadonnées vides')
  const course = tokens.shift() as Course
  if (!COURSES.includes(course)) fail(`type inconnu « ${course} »`)
  let main: Main | undefined
  if (course === 'plat') {
    main = tokens.shift() as Main
    if (!MAINS.includes(main)) fail(`catégorie inconnue « ${main} »`)
  }
  if (tokens.length !== 5) fail(`métadonnées incomplètes « ${meta} »`)
  const [minutesRaw, difficultyRaw, priceRaw, equipmentRaw, servingsRaw] = tokens
  const minutes = Number(minutesRaw)
  if (!Number.isInteger(minutes) || minutes <= 0) fail(`temps invalide « ${minutesRaw} »`)
  const difficulty = difficultyRaw as Difficulty
  if (!DIFFICULTIES.includes(difficulty)) fail(`difficulté inconnue « ${difficultyRaw} »`)
  const price = Number(priceRaw) as Price
  if (!PRICES.includes(price)) fail(`prix invalide « ${priceRaw} »`)
  const equipment = equipmentRaw.split(',') as Equipment[]
  for (const e of equipment) if (!EQUIPMENTS.includes(e)) fail(`ustensile inconnu « ${e} »`)
  const servings = Number(servingsRaw)
  if (!Number.isInteger(servings) || servings < 1) fail(`portions invalides « ${servingsRaw} »`)

  const parsedItems = items.split(',').map((raw) => {
    const m = /^(.*?)(?:\s+(\d+(?:\.\d+)?))?$/.exec(raw.trim())
    const label = m?.[1]?.trim() || fail(`ingrédient vide dans « ${items} »`)
    return { ingredientId: slug(label), qty: m?.[2] ? Number(m[2]) : null }
  })

  const lines = steps
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  if (lines.length < 2) fail('il faut au moins deux étapes')

  return {
    id: `lib-${slug(name)}`,
    name,
    servings,
    steps: lines.join('\n'),
    items: parsedItems,
    course,
    ...(main ? { main } : {}),
    minutes,
    difficulty,
    price,
    emoji,
    equipment,
  }
}
