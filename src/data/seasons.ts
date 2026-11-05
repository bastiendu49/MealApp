/** Mois de `from` à `to` inclus, de 1 à 12, en passant par janvier si besoin (9 → 3). */
const months = (from: number, to: number) => {
  const out: number[] = []
  for (let m = from; ; m = (m % 12) + 1) {
    out.push(m)
    if (m === to) return out
  }
}

/**
 * Saisons des fruits et légumes frais en France métropolitaine, par identifiant d'ingrédient.
 *
 * Seuls les produits dont la saison compte y figurent. Ce qu'on trouve toute l'année sans
 * différence notable (oignon, ail, carotte, pomme de terre, champignon de Paris, salade) ou
 * qui est importé de toute façon (citron, banane, avocat, gingembre) en est absent : un
 * ingrédient absent de cette table ne rend jamais un plat « hors saison ».
 *
 * C'est de là, et non d'une étiquette posée à la main, que se déduit la saison d'un plat :
 * corriger un légume ici corrige toutes les recettes qui l'utilisent.
 */
export const SEASONS: Record<string, number[]> = {
  tomate: months(6, 9),
  'tomate-cerise': months(6, 9),
  courgette: months(6, 9),
  aubergine: months(6, 9),
  poivron: months(7, 9),
  'haricot-vert': months(6, 9),
  concombre: months(5, 9),
  basilic: months(6, 9),
  fraise: months(5, 7),
  celeri: months(7, 10),
  brocoli: months(6, 11),
  'epinard-frais': [3, 4, 5, 9, 10, 11],
  poireau: months(9, 3),
  'chou-fleur': months(9, 4),
  pomme: months(9, 3),
  orange: months(12, 3),
  'courge-butternut': months(9, 1),
  potiron: months(9, 1),
  navet: months(10, 3),
  panais: months(10, 3),
  'celeri-rave': months(10, 3),
  'chou-vert': months(10, 3),
  'chou-rouge': months(10, 3),
  fenouil: months(6, 10),
  endive: months(10, 4),
  'asperge-verte': months(4, 6),
  radis: months(4, 7),
  mache: months(10, 3),
  'oignon-nouveau': months(4, 7),
  poire: months(8, 1),
  peche: months(6, 9),
  abricot: months(6, 8),
  framboise: months(6, 9),
  myrtille: months(7, 9),
  kiwi: months(11, 4),
  clementine: months(11, 2),
  rhubarbe: months(4, 6),
  cerise: months(6, 7),
  melon: months(6, 9),
  figue: months(8, 10),
}
