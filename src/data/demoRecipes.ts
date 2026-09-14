import type { Recipe } from '../domain/types'

/**
 * Deux repas de démonstration, pour voir immédiatement à quoi ressemble une fiche remplie et
 * comment deux recettes s'agrègent (elles partagent oignon, ail et huile d'olive).
 * Sans photo : à toi d'en ajouter une, c'est le premier test de l'étape 3.
 * Les identifiants d'ingrédients viennent du catalogue et sont vérifiés par un test.
 */
export const DEMO_RECIPES: Recipe[] = [
  {
    id: 'demo-ratatouille',
    name: 'Ratatouille',
    servings: 4,
    items: [
      { ingredientId: 'aubergine', qty: 1 },
      { ingredientId: 'courgette', qty: 2 },
      { ingredientId: 'poivron', qty: 1 },
      { ingredientId: 'tomate', qty: 4 },
      { ingredientId: 'oignon', qty: 1 },
      { ingredientId: 'ail', qty: 2 },
      { ingredientId: 'huile-d-olive', qty: 40 },
      { ingredientId: 'thym', qty: null },
      { ingredientId: 'sel', qty: null },
      { ingredientId: 'poivre', qty: null },
    ],
    steps: [
      'Couper aubergine, courgettes, poivron et tomates en cubes réguliers.',
      "Faire revenir l'oignon émincé et l'ail dans l'huile d'olive, 5 minutes à feu moyen.",
      'Ajouter les légumes les plus fermes en premier : aubergine, puis poivron, puis courgettes.',
      'Ajouter les tomates, le thym, saler et poivrer.',
      'Couvrir et laisser mijoter 35 minutes à feu doux, en remuant de temps en temps.',
      'Goûter, rectifier l’assaisonnement et servir tiède ou froid.',
    ].join('\n'),
  },
  {
    id: 'demo-bolognaise',
    name: 'Pâtes à la bolognaise',
    servings: 4,
    items: [
      { ingredientId: 'pates', qty: 400 },
      { ingredientId: 'steak-hache', qty: 400 },
      { ingredientId: 'tomates-concassees', qty: 1 },
      { ingredientId: 'oignon', qty: 1 },
      { ingredientId: 'ail', qty: 2 },
      { ingredientId: 'concentre-de-tomate', qty: 30 },
      { ingredientId: 'parmesan', qty: 60 },
      { ingredientId: 'huile-d-olive', qty: 20 },
      { ingredientId: 'herbes-de-provence', qty: null },
      { ingredientId: 'sel', qty: null },
      { ingredientId: 'poivre', qty: null },
    ],
    steps: [
      "Émincer l'oignon et l'ail, les faire revenir dans l'huile d'olive.",
      'Ajouter la viande hachée et la faire colorer en l’écrasant à la cuillère.',
      'Ajouter le concentré de tomate, laisser cuire 1 minute pour le faire torréfier.',
      'Verser les tomates concassées, les herbes, saler et poivrer.',
      'Laisser mijoter 30 minutes à découvert, le temps que la sauce épaississe.',
      'Cuire les pâtes al dente, les mélanger à la sauce et servir avec le parmesan râpé.',
    ].join('\n'),
  },
]
