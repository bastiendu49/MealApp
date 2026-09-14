import { describe, expect, it } from 'vitest'
import { buildShoppingList, formatQty, lineState, scaleRecipe, type Line } from './shoppingList'
import { CATALOGUE } from '../data/catalogue'
import { DEMO_RECIPES } from '../data/demoRecipes'
import type { CartEntry, Ingredient, Recipe } from './types'

const ing = (id: string, over: Partial<Ingredient> = {}): Ingredient => ({
  id,
  name: id,
  unit: 'g',
  aisle: 'Épicerie',
  pantry: false,
  ...over,
})

const recipe = (id: string, over: Partial<Recipe> = {}): Recipe => ({
  id,
  name: id,
  servings: 4,
  steps: '',
  items: [],
  ...over,
})

const cart = (recipeId: string, servings: number): CartEntry => ({
  id: `${recipeId}-${servings}-${Math.random()}`,
  recipeId,
  servings,
})

/** Retrouve une ligne quel que soit son rayon. */
const line = (list: ReturnType<typeof buildShoppingList>, name: string) =>
  list.groups.flatMap((g) => g.lines).find((l) => l.name === name)

describe('buildShoppingList', () => {
  it('additionne un ingrédient partagé par deux recettes', () => {
    const ingredients = [ing('tomate', { name: 'Tomates concassées' })]
    const recipes = [
      recipe('bolo', { items: [{ ingredientId: 'tomate', qty: 300 }] }),
      recipe('ratatouille', { items: [{ ingredientId: 'tomate', qty: 500 }] }),
    ]
    const list = buildShoppingList({
      cart: [cart('bolo', 4), cart('ratatouille', 4)],
      recipes,
      ingredients,
    })
    expect(line(list, 'Tomates concassées')?.qty).toBe(800)
  })

  it('met les quantités à l’échelle du nombre de convives', () => {
    const ingredients = [ing('farine', { name: 'Farine' })]
    const recipes = [recipe('crepes', { servings: 4, items: [{ ingredientId: 'farine', qty: 250 }] })]
    // 6 convives pour une recette écrite pour 4 => x1,5
    const list = buildShoppingList({ cart: [cart('crepes', 6)], recipes, ingredients })
    expect(line(list, 'Farine')?.qty).toBe(375)
  })

  it('compte deux fois un repas sélectionné deux fois', () => {
    const ingredients = [ing('riz', { name: 'Riz' })]
    const recipes = [recipe('curry', { items: [{ ingredientId: 'riz', qty: 200 }] })]
    const list = buildShoppingList({ cart: [cart('curry', 4), cart('curry', 4)], recipes, ingredients })
    expect(line(list, 'Riz')?.qty).toBe(400)
  })

  it('arrondit au supérieur ce qui se dénombre, et à l’unité ce qui est en vrac', () => {
    const ingredients = [
      ing('oeuf', { name: 'Œufs', unit: 'pièce' }),
      ing('lait', { name: 'Lait', unit: 'ml' }),
    ]
    const recipes = [
      recipe('flan', {
        servings: 3,
        items: [
          { ingredientId: 'oeuf', qty: 2 },
          { ingredientId: 'lait', qty: 500 },
        ],
      }),
    ]
    // 2 convives sur 3 => 1,33 œuf et 333,33 ml.
    // L'œuf monte à 2 (on ne coupe pas un œuf en trois), le lait redescend à 333 (au litre près).
    const list = buildShoppingList({ cart: [cart('flan', 2)], recipes, ingredients })
    expect(line(list, 'Œufs')?.qty).toBe(2)
    expect(line(list, 'Lait')?.qty).toBe(333)
  })

  it('n’arrondit pas au-dessus quand le total tombe juste malgré les flottants', () => {
    const ingredients = [ing('oeuf', { name: 'Œufs', unit: 'pièce' })]
    const recipes = [recipe('omelette', { servings: 3, items: [{ ingredientId: 'oeuf', qty: 7 }] })]
    // 3 x (7 x 7/3) vaut 49.00000000000001 : sans marge, ceil achèterait un 50e œuf.
    const list = buildShoppingList({
      cart: [cart('omelette', 7), cart('omelette', 7), cart('omelette', 7)],
      recipes,
      ingredients,
    })
    expect(line(list, 'Œufs')?.qty).toBe(49)
  })

  it('exclut les ingrédients « toujours en stock » de la liste de courses', () => {
    const ingredients = [
      ing('sel', { name: 'Sel', unit: 'pincée', pantry: true }),
      ing('pates', { name: 'Pâtes' }),
    ]
    const recipes = [
      recipe('pasta', {
        items: [
          { ingredientId: 'sel', qty: null },
          { ingredientId: 'pates', qty: 500 },
        ],
      }),
    ]
    const list = buildShoppingList({ cart: [cart('pasta', 4)], recipes, ingredients })
    expect(line(list, 'Sel')).toBeUndefined()
    expect(list.pantry.map((l) => l.name)).toEqual(['Sel'])
    expect(line(list, 'Pâtes')?.qty).toBe(500)
  })

  it('traite « qs » comme une absence de quantité, sans casser le total', () => {
    const ingredients = [ing('huile', { name: "Huile d'olive", unit: 'ml' })]
    const recipes = [
      recipe('a', { items: [{ ingredientId: 'huile', qty: null }] }),
      recipe('b', { items: [{ ingredientId: 'huile', qty: 30 }] }),
    ]
    const mixed = buildShoppingList({ cart: [cart('a', 4), cart('b', 4)], recipes, ingredients })
    expect(line(mixed, "Huile d'olive")?.qty).toBe(30)

    const onlyQs = buildShoppingList({ cart: [cart('a', 4)], recipes, ingredients })
    expect(line(onlyQs, "Huile d'olive")?.qty).toBeNull()
  })

  it('garde la trace de la recette d’origine de chaque quantité', () => {
    const ingredients = [ing('tomate', { name: 'Tomates' })]
    const recipes = [
      recipe('bolo', { name: 'Bolognaise', items: [{ ingredientId: 'tomate', qty: 300 }] }),
      recipe('rata', { name: 'Ratatouille', items: [{ ingredientId: 'tomate', qty: 500 }] }),
    ]
    const list = buildShoppingList({ cart: [cart('bolo', 4), cart('rata', 4)], recipes, ingredients })
    expect(line(list, 'Tomates')?.sources).toEqual([
      { recipeName: 'Bolognaise', qty: 300 },
      { recipeName: 'Ratatouille', qty: 500 },
    ])
  })

  it('groupe par rayon dans l’ordre du magasin et ignore les rayons vides', () => {
    const ingredients = [
      ing('pates', { name: 'Pâtes', aisle: 'Épicerie' }),
      ing('carotte', { name: 'Carottes', aisle: 'Fruits & légumes', unit: 'pièce' }),
      ing('beurre', { name: 'Beurre', aisle: 'Crèmerie' }),
    ]
    const recipes = [
      recipe('r', {
        items: [
          { ingredientId: 'pates', qty: 500 },
          { ingredientId: 'carotte', qty: 3 },
          { ingredientId: 'beurre', qty: 50 },
        ],
      }),
    ]
    const list = buildShoppingList({ cart: [cart('r', 4)], recipes, ingredients })
    expect(list.groups.map((g) => g.aisle)).toEqual(['Fruits & légumes', 'Crèmerie', 'Épicerie'])
  })

  it('ignore sans planter un ingrédient ou un repas disparu', () => {
    const recipes = [recipe('r', { items: [{ ingredientId: 'fantome', qty: 100 }] })]
    const list = buildShoppingList({
      cart: [cart('r', 4), cart('repas-supprime', 4)],
      recipes,
      ingredients: [],
    })
    expect(list.groups).toEqual([])
  })

  it('rend une liste vide pour un panier vide', () => {
    const list = buildShoppingList({ cart: [], recipes: [], ingredients: [] })
    expect(list).toEqual({ groups: [], pantry: [] })
  })

  it('place les articles libres dans leur rayon, sans quantité', () => {
    const list = buildShoppingList({
      cart: [],
      recipes: [],
      ingredients: [],
      extras: [{ id: 'x1', name: 'Papier toilette', aisle: 'Entretien' }],
    })
    expect(list.groups).toEqual([
      {
        aisle: 'Entretien',
        lines: [
          { key: 'x1', name: 'Papier toilette', qty: null, unit: '', aisle: 'Entretien', sources: [] },
        ],
      },
    ])
  })
})

describe('formatQty', () => {
  it('passe en kg et en L au-delà de 1000, et jamais entre familles', () => {
    expect(formatQty(1200, 'g')).toBe('1,2 kg')
    expect(formatQty(800, 'g')).toBe('800 g')
    expect(formatQty(1500, 'ml')).toBe('1,5 L')
    expect(formatQty(250, 'ml')).toBe('250 ml')
  })

  it('accorde les unités dénombrables au pluriel', () => {
    expect(formatQty(1, 'pièce')).toBe('1 pièce')
    expect(formatQty(3, 'pièce')).toBe('3 pièces')
    expect(formatQty(2, 'gousse')).toBe('2 gousses')
    expect(formatQty(500, 'g')).toBe('500 g')
  })

  it('affiche « qs » en l’absence de quantité', () => {
    expect(formatQty(null, 'g')).toBe('qs')
  })
})

describe('scaleRecipe', () => {
  it('proportionne les ingrédients et laisse « qs » intact', () => {
    const ingredients = [
      ing('farine', { name: 'Farine' }),
      ing('sel', { name: 'Sel', unit: 'pincée' }),
    ]
    const r = recipe('crepes', {
      servings: 4,
      items: [
        { ingredientId: 'farine', qty: 250 },
        { ingredientId: 'sel', qty: null },
      ],
    })
    expect(scaleRecipe(r, 2, ingredients)).toEqual([
      { ingredient: ingredients[0], qty: 125 },
      { ingredient: ingredients[1], qty: null },
    ])
  })
})

describe('scénario complet sur le catalogue réel', () => {
  // Panier : ratatouille pour 4, bolognaise pour 4, et de nouveau ratatouille pour 6.
  // Les deux recettes partagent oignon, ail, huile d'olive, sel et poivre : c'est exactement
  // le cas où une erreur d'agrégation se voit au magasin et nulle part ailleurs.
  const cartOf = (...entries: [string, number][]) =>
    entries.map(([recipeId, servings], i) => ({ id: `e${i}`, recipeId, servings }))

  const list = buildShoppingList({
    cart: cartOf(['demo-ratatouille', 4], ['demo-bolognaise', 4], ['demo-ratatouille', 6]),
    recipes: DEMO_RECIPES,
    ingredients: CATALOGUE,
  })

  const find = (name: string) => list.groups.flatMap((g) => g.lines).find((l) => l.name === name)

  it('additionne les ingrédients communs aux deux recettes', () => {
    // Oignon : 1 + 1 + 1,5 = 3,5 -> on en achète 4, on ne coupe pas un oignon en deux au magasin.
    expect(find('Oignon')?.qty).toBe(4)
    expect(find('Ail')?.qty).toBe(7) // 2 + 2 + 3 gousses
  })

  it('met à l’échelle le repas pris pour 6 personnes', () => {
    expect(find('Tomate')?.qty).toBe(10) // 4 + 6
    expect(find('Courgette')?.qty).toBe(5) // 2 + 3
    expect(find('Aubergine')?.qty).toBe(3) // 1 + 1,5 arrondi au supérieur
  })

  it('laisse intactes les quantités des ingrédients non partagés', () => {
    expect(find('Pâtes')?.qty).toBe(400)
    expect(find('Steak haché')?.qty).toBe(400)
    expect(find('Tomates concassées')?.qty).toBe(1)
    expect(find('Parmesan')?.qty).toBe(60)
  })

  it('sort du panier tout ce qui est en fond de placard', () => {
    expect(find("Huile d'olive")).toBeUndefined()
    expect(list.pantry.map((l) => l.name).sort()).toEqual([
      'Herbes de Provence',
      "Huile d'olive",
      'Poivre',
      'Sel',
      'Thym',
    ])
    // L'huile reste chiffrée dans la section placard : 40 + 20 + 60 ml.
    expect(list.pantry.find((l) => l.name === "Huile d'olive")?.qty).toBe(120)
  })

  it('range les rayons dans l’ordre de traversée du magasin', () => {
    expect(list.groups.map((g) => g.aisle)).toEqual([
      'Fruits & légumes',
      'Boucherie & poissonnerie',
      'Crèmerie',
      'Épicerie',
    ])
  })

  it('garde la trace des trois origines de l’oignon', () => {
    expect(find('Oignon')?.sources).toEqual([
      { recipeName: 'Ratatouille', qty: 1 },
      { recipeName: 'Pâtes à la bolognaise', qty: 1 },
      { recipeName: 'Ratatouille', qty: 1.5 },
    ])
  })

  it('affiche des quantités lisibles en rayon', () => {
    expect(formatQty(find('Tomate')!.qty, find('Tomate')!.unit)).toBe('10 pièces')
    expect(formatQty(find('Pâtes')!.qty, find('Pâtes')!.unit)).toBe('400 g')
    expect(formatQty(find('Ail')!.qty, find('Ail')!.unit)).toBe('7 gousses')
  })
})

describe('lineState', () => {
  const at = (qty: number | null): Line => ({
    key: 'k',
    name: 'Tomates',
    qty,
    unit: 'g',
    aisle: 'Épicerie',
    sources: [],
  })

  it('laisse une ligne non cochée intacte', () => {
    expect(lineState(at(800), {})).toEqual({ checked: false, bumped: false, done: false })
  })

  it('marque prise une ligne cochée dont la quantité n’a pas bougé', () => {
    expect(lineState(at(800), { k: 800 })).toEqual({ checked: true, bumped: false, done: true })
  })

  it('signale une quantité montée depuis le cochage sans décocher', () => {
    // Un repas ajouté au panier au milieu des courses : 500 g pris, 800 g nécessaires.
    expect(lineState(at(800), { k: 500 })).toEqual({ checked: true, bumped: true, done: false })
  })

  it('ne signale rien quand la quantité a baissé', () => {
    // On en a déjà assez dans le caddie : rien à faire, la ligne reste barrée.
    expect(lineState(at(300), { k: 500 })).toEqual({ checked: true, bumped: false, done: true })
  })

  it('traite « qs » et les articles libres comme simplement pris', () => {
    expect(lineState(at(null), { k: null })).toEqual({ checked: true, bumped: false, done: true })
  })
})
