import type { Aisle, Ingredient } from '../domain/types'

/** [nom, unité, toujours en stock ?] — l'unité est fixée ici une fois pour toutes. */
type Seed = [string, string] | [string, string, true]

const BY_AISLE: [Aisle, Seed[]][] = [
  [
    'Fruits & légumes',
    [
      ['Tomate', 'pièce'],
      ['Tomate cerise', 'g'],
      ['Oignon', 'pièce'],
      ['Oignon rouge', 'pièce'],
      ['Échalote', 'pièce'],
      ['Ail', 'gousse'],
      ['Carotte', 'pièce'],
      ['Pomme de terre', 'g'],
      ['Patate douce', 'pièce'],
      ['Courgette', 'pièce'],
      ['Aubergine', 'pièce'],
      ['Poivron', 'pièce'],
      ['Champignon de Paris', 'g'],
      ['Poireau', 'pièce'],
      ['Céleri', 'branche'],
      ['Brocoli', 'pièce'],
      ['Chou-fleur', 'pièce'],
      ['Haricot vert', 'g'],
      ['Épinard frais', 'g'],
      ['Salade verte', 'pièce'],
      ['Concombre', 'pièce'],
      ['Avocat', 'pièce'],
      ['Citron', 'pièce'],
      ['Citron vert', 'pièce'],
      ['Orange', 'pièce'],
      ['Pomme', 'pièce'],
      ['Banane', 'pièce'],
      ['Fraise', 'g'],
      ['Persil', 'botte'],
      ['Basilic', 'botte'],
      ['Coriandre', 'botte'],
      ['Menthe', 'botte'],
      ['Gingembre frais', 'g'],
    ],
  ],
  [
    'Boucherie & poissonnerie',
    [
      ['Blanc de poulet', 'pièce'],
      ['Cuisse de poulet', 'pièce'],
      ['Steak haché', 'g'],
      ['Bœuf à braiser', 'g'],
      ['Échine de porc', 'g'],
      ['Lardons', 'g'],
      ['Jambon blanc', 'tranche'],
      ['Saucisse', 'pièce'],
      ['Merguez', 'pièce'],
      ['Pavé de saumon', 'pièce'],
      ['Cabillaud', 'g'],
      ['Crevette', 'g'],
    ],
  ],
  [
    'Crèmerie',
    [
      ['Lait', 'ml'],
      ['Beurre', 'g'],
      ['Crème fraîche', 'ml'],
      ['Crème liquide', 'ml'],
      ['Œuf', 'pièce'],
      ['Yaourt nature', 'pot'],
      ['Gruyère râpé', 'g'],
      ['Parmesan', 'g'],
      ['Mozzarella', 'boule'],
      ['Feta', 'g'],
      ['Bûche de chèvre', 'g'],
      ['Comté', 'g'],
      ['Galette de sarrasin', 'pièce'],
    ],
  ],
  [
    'Épicerie',
    [
      ['Farine', 'g'],
      ['Sucre', 'g'],
      ['Sucre vanillé', 'sachet'],
      ['Levure chimique', 'sachet'],
      ['Riz', 'g'],
      ['Pâtes', 'g'],
      ['Semoule', 'g'],
      ['Lentilles', 'g'],
      ['Pois chiches', 'boîte'],
      ['Haricots rouges', 'boîte'],
      ['Tomates concassées', 'boîte'],
      ['Concentré de tomate', 'g'],
      ['Coulis de tomate', 'ml'],
      ['Thon en boîte', 'boîte'],
      ['Lait de coco', 'ml'],
      ['Chapelure', 'g'],
      ['Pesto', 'g'],
      ['Beurre de cacahuète', 'g'],
      ['Épices tandoori', 'g'],
      ['Noix', 'g'],
      ['Olives noires', 'g'],
      ['Chocolat noir', 'g'],
      ['Pâte brisée', 'pièce'],
      ['Pâte feuilletée', 'pièce'],
      ['Baguette', 'pièce'],
      ['Pain de mie', 'tranche'],
      ['Sel', 'pincée', true],
      ['Poivre', 'pincée', true],
      ["Huile d'olive", 'ml', true],
      ['Huile de tournesol', 'ml', true],
      ['Vinaigre balsamique', 'ml', true],
      ['Vinaigre de vin', 'ml', true],
      ['Moutarde', 'g', true],
      ['Miel', 'g', true],
      ['Bouillon cube', 'pièce', true],
      ['Herbes de Provence', 'pincée', true],
      ['Thym', 'pincée', true],
      ['Origan', 'pincée', true],
      ['Laurier', 'feuille', true],
      ['Paprika', 'pincée', true],
      ['Curry', 'pincée', true],
      ['Cumin', 'pincée', true],
      ['Curcuma', 'pincée', true],
      ['Cannelle', 'pincée', true],
      ['Muscade', 'pincée', true],
      ['Piment', 'pincée', true],
    ],
  ],
  [
    'Surgelés',
    [
      ['Petits pois surgelés', 'g'],
      ['Épinards surgelés', 'g'],
      ['Poisson pané', 'pièce'],
      ['Glace', 'ml'],
    ],
  ],
  [
    'Boissons',
    [
      ['Vin blanc', 'ml'],
      ['Vin rouge', 'ml'],
      ['Bière', 'ml'],
      ['Jus de fruits', 'ml'],
    ],
  ],
]

/** Identifiant stable dérivé du nom : survit à une réinstallation et rend l'export lisible. */
export const slug = (name: string) =>
  name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

/** Catalogue de départ. Sert de valeur initiale : si l'utilisateur supprime tout, rien ne revient. */
export const CATALOGUE: Ingredient[] = BY_AISLE.flatMap(([aisle, seeds]) =>
  seeds.map(([name, unit, pantry]) => ({
    id: slug(name),
    name,
    unit,
    aisle,
    pantry: pantry === true,
  })),
)
