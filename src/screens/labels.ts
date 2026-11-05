import type { Difficulty, Equipment, Main, Price, Recipe } from '../domain/types'

export const MAIN_LABEL: Record<Main, string> = {
  viande: 'Viande',
  volaille: 'Volaille',
  poisson: 'Poisson',
  vege: 'Végé',
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  facile: 'Facile',
  moyen: 'Moyen',
  difficile: 'Difficile',
}

export const EQUIPMENT_LABEL: Record<Equipment, string> = {
  four: 'Four',
  poele: 'Poêle',
  airfryer: 'Airfryer',
  casserole: 'Casserole',
  'sans-cuisson': 'Sans cuisson',
}

export const priceLabel = (p: Price) => '€'.repeat(p)

/** « 30 min · Facile · € » : ce qu'on veut savoir d'un plat avant de l'ouvrir. */
export function metaLine(r: Recipe) {
  return [
    r.minutes ? `${r.minutes} min` : null,
    r.difficulty ? DIFFICULTY_LABEL[r.difficulty] : null,
    r.price ? priceLabel(r.price) : null,
  ]
    .filter(Boolean)
    .join(' · ')
}

export const people = (n: number) => `${n} pers.`
