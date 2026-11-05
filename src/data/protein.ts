/**
 * Protéines en grammes POUR UNE UNITÉ de l'ingrédient, dans l'unité du catalogue (1 g, 1 pièce,
 * 1 tranche, 1 boîte égouttée…). Valeurs moyennes des tables nutritionnelles usuelles (Ciqual),
 * ramenées au poids typique d'une pièce quand l'unité est « pièce » : c'est une estimation, pas
 * une pesée, et l'interface l'affiche comme telle (« ≈ »).
 *
 * Seuls les ingrédients qui pèsent dans l'apport y figurent : légumes, épices, matières grasses
 * et sucres comptent pour zéro. L'estimation est donc légèrement par défaut, jamais flatteuse.
 */
export const PROTEIN: Record<string, number> = {
  // Volaille (pièce : chair sans os)
  'blanc-de-poulet': 34, // ~150 g
  'cuisse-de-poulet': 30, // ~160 g de chair
  'pilon-de-poulet': 14, // ~70 g de chair
  'poulet-entier': 200, // ~850 g de chair
  'escalope-de-dinde': 30, // ~130 g
  // Viandes
  'steak-hache': 0.19,
  'b-uf-a-braiser': 0.2,
  'b-uf-emince': 0.21,
  'steak-de-b-uf': 31, // ~150 g
  'echine-de-porc': 0.18,
  'filet-mignon-de-porc': 0.21,
  'cote-de-porc': 28, // ~150 g de chair
  'epaule-d-agneau': 0.17, // avec os
  lardons: 0.14,
  'lardons-fumes': 0.14,
  bacon: 2, // ~15 g la tranche
  'jambon-blanc': 7, // ~40 g la tranche
  'jambon-cru': 4, // ~15 g la tranche
  chorizo: 0.24,
  saucisse: 14, // ~100 g
  'saucisse-de-strasbourg': 4.5,
  'saucisse-de-morteau': 50,
  chipolata: 8,
  merguez: 9,
  // Poissons et fruits de mer
  'pave-de-saumon': 25, // ~125 g
  'saumon-fume': 5.5, // ~25 g la tranche
  cabillaud: 0.18,
  'filet-de-colin': 0.18,
  crevette: 0.2,
  moules: 0.03, // poids avec coquille
  'noix-de-saint-jacques': 0.17,
  'thon-en-boite': 35, // ~140 g égoutté
  'sardines-en-boite': 24,
  'poisson-pane': 12,
  // Œufs et laitages
  uf: 6.5, // un œuf
  lait: 0.033,
  'fromage-blanc': 0.08,
  'yaourt-nature': 5, // pot de 125 g
  'yaourt-grec': 0.09,
  'gruyere-rape': 0.27,
  parmesan: 0.33,
  comte: 0.27,
  mozzarella: 23, // boule de 125 g
  feta: 0.14,
  'buche-de-chevre': 0.18,
  'chevre-frais': 0.1,
  cheddar: 0.25,
  raclette: 7, // ~30 g la tranche
  reblochon: 90,
  'fromage-frais': 0.07,
  ricotta: 0.1,
  mascarpone: 0.05,
  burrata: 18,
  camembert: 50,
  halloumi: 0.21,
  roquefort: 0.2,
  tofu: 0.12,
  // Féculents et légumineuses (poids sec)
  riz: 0.07,
  'riz-rond': 0.07,
  'riz-arborio': 0.07,
  pates: 0.12,
  spaghetti: 0.12,
  coquillettes: 0.12,
  penne: 0.12,
  tagliatelles: 0.12,
  'feuilles-de-lasagne': 0.12,
  'nouilles-de-riz': 0.06,
  'nouilles-chinoises': 0.11,
  quinoa: 0.14,
  boulgour: 0.12,
  semoule: 0.12,
  lentilles: 0.24,
  'lentilles-corail': 0.24,
  'pois-chiches': 19, // boîte de 240 g égouttés
  'haricots-rouges': 20,
  'haricots-blancs': 18,
  gnocchis: 0.05,
  tortellini: 0.12,
  'flocons-d-avoine': 0.13,
  'pomme-de-terre': 0.02,
  'patate-douce': 5, // ~300 g
  'petits-pois-surgeles': 0.055,
  'mais-en-boite': 8,
  // Pains et pâtes à garnir
  'pain-de-mie': 2,
  'pain-de-campagne': 3.5,
  baguette: 22,
  'pain-a-burger': 7,
  'pain-pita': 6,
  'tortilla-de-ble': 5,
  'galette-de-sarrasin': 3,
  'pate-a-pizza': 20,
  'pate-brisee': 13,
  'pate-feuilletee': 13,
  farine: 0.1,
  // Oléagineux
  'beurre-de-cacahuete': 0.25,
  cacahuetes: 0.25,
  noix: 0.15,
  'noix-de-cajou': 0.18,
  noisettes: 0.15,
  'amandes-effilees': 0.21,
  'poudre-d-amande': 0.21,
  'graines-de-sesame': 0.18,
  // Légumes qui comptent un peu
  brocoli: 11, // ~400 g
  'chou-fleur': 11,
  'epinard-frais': 0.03,
  'epinards-surgeles': 0.03,
  'champignon-de-paris': 0.03,
}
