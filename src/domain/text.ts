/**
 * Forme de comparaison d'un texte : minuscules, sans accents ni ligatures. Sert à toutes les
 * recherches de l'app, pour que « creme » trouve « Crème » et « oeuf » trouve « Œuf ».
 */
export const fold = (s: string) =>
  s
    .toLowerCase()
    .replace(/œ/g, 'oe')
    .replace(/æ/g, 'ae')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .trim()

export const MONTHS = [
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre',
] as const

/** Mois courant, de 1 à 12 : c'est la convention de la table des saisons. */
export const currentMonth = (date = new Date()) => date.getMonth() + 1
