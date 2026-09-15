import { describe, expect, it } from 'vitest'
import { BACKUP_VERSION, parseBackup } from './backup'
import { CATALOGUE } from '../data/catalogue'
import { BASE_RECIPES } from '../data/baseRecipes'

/** Sauvegarde minimale valide, que chaque test dégrade sur un point précis. */
const valid = {
  version: BACKUP_VERSION,
  exportedAt: '2026-09-14T20:00:00.000Z',
  ingredients: [{ id: 'tomate', name: 'Tomate', unit: 'pièce', aisle: 'Fruits & légumes', pantry: false }],
  recipes: [
    {
      id: 'r1',
      name: 'Salade',
      servings: 2,
      steps: 'Couper.\nAssaisonner.',
      items: [{ ingredientId: 'tomate', qty: 3 }],
    },
  ],
  cart: [],
  extras: [],
  checked: {},
}

const parse = (o: unknown) => parseBackup(JSON.stringify(o))
const ok = (r: ReturnType<typeof parseBackup>) => {
  if (!r.ok) throw new Error(`attendu valide, refusé : ${r.error}`)
  return r.data
}

describe('parseBackup — refus', () => {
  it('refuse ce qui n’est pas du JSON', () => {
    const r = parseBackup('ceci nest pas du json')
    expect(r.ok).toBe(false)
  })

  it('refuse un JSON qui n’est pas un objet', () => {
    expect(parse([1, 2, 3]).ok).toBe(false)
    expect(parse('texte').ok).toBe(false)
  })

  it('refuse une version de sauvegarde inconnue', () => {
    expect(parse({ ...valid, version: 99 }).ok).toBe(false)
    expect(parse({ ...valid, version: undefined }).ok).toBe(false)
  })

  it('refuse un fichier sans les deux listes principales', () => {
    expect(parse({ ...valid, ingredients: undefined }).ok).toBe(false)
    expect(parse({ ...valid, recipes: 'non' }).ok).toBe(false)
  })

  it('refuse un ingrédient sans unité', () => {
    // L'unité fixe est l'invariant qui rend l'addition des quantités exacte : sans elle,
    // mieux vaut refuser l'import que restaurer un catalogue inutilisable.
    const r = parse({
      ...valid,
      ingredients: [{ id: 'x', name: 'Truc', aisle: 'Épicerie', pantry: false }],
    })
    expect(r.ok).toBe(false)
    expect(r.ok === false && r.error).toContain('Truc')
  })

  it('refuse un repas au nombre de personnes invalide', () => {
    expect(parse({ ...valid, recipes: [{ ...valid.recipes[0], servings: 0 }] }).ok).toBe(false)
    expect(parse({ ...valid, recipes: [{ ...valid.recipes[0], servings: 'quatre' }] }).ok).toBe(false)
  })

  it('refuse une quantité qui n’est pas un nombre', () => {
    const r = parse({
      ...valid,
      recipes: [{ ...valid.recipes[0], items: [{ ingredientId: 'tomate', qty: 'beaucoup' }] }],
    })
    expect(r.ok).toBe(false)
    expect(r.ok === false && r.error).toContain('Salade')
  })

  it('refuse un ingrédient de recette sans référence', () => {
    const r = parse({ ...valid, recipes: [{ ...valid.recipes[0], items: [{ qty: 2 }] }] })
    expect(r.ok).toBe(false)
  })
})

describe('parseBackup — acceptation', () => {
  it('accepte une sauvegarde complète', () => {
    const data = ok(parse(valid))
    expect(data.ingredients).toEqual(valid.ingredients)
    expect(data.recipes[0].items).toEqual([{ ingredientId: 'tomate', qty: 3 }])
  })

  it('accepte un fichier sans panier, articles ni cochages', () => {
    const data = ok(
      parse({
        version: valid.version,
        exportedAt: valid.exportedAt,
        ingredients: valid.ingredients,
        recipes: valid.recipes,
      }),
    )
    expect(data).toMatchObject({ cart: [], extras: [], checked: {} })
  })

  it('range dans Autres un rayon inconnu au lieu de tout refuser', () => {
    const data = ok(
      parse({ ...valid, ingredients: [{ ...valid.ingredients[0], aisle: 'Rayon disparu' }] }),
    )
    expect(data.ingredients[0].aisle).toBe('Autres')
  })

  it('conserve « qs » en tant qu’absence de quantité', () => {
    const data = ok(
      parse({ ...valid, recipes: [{ ...valid.recipes[0], items: [{ ingredientId: 'tomate', qty: null }] }] }),
    )
    expect(data.recipes[0].items[0].qty).toBeNull()
  })

  it('conserve la photo en data URL et ignore une photo bidon', () => {
    const photo = 'data:image/jpeg;base64,AAAA'
    expect(ok(parse({ ...valid, recipes: [{ ...valid.recipes[0], photo }] })).recipes[0].photo).toBe(photo)
    expect(
      ok(parse({ ...valid, recipes: [{ ...valid.recipes[0], photo: 'https://ailleurs/x.jpg' }] }))
        .recipes[0].photo,
    ).toBeUndefined()
  })

  it('écarte les entrées de panier bancales sans refuser le fichier', () => {
    // Le panier est jetable : le perdre n'est pas grave, perdre les recettes le serait.
    const data = ok(
      parse({
        ...valid,
        cart: [{ id: 'c1', recipeId: 'r1', servings: 2 }, { recipeId: '', servings: 4 }, 'nimporte quoi'],
      }),
    )
    expect(data.cart).toEqual([{ id: 'c1', recipeId: 'r1', servings: 2 }])
  })
})

describe('aller-retour export puis import', () => {
  it('relit sans perte une sauvegarde des données réelles', () => {
    // Le vrai risque n'est pas qu'un fichier étranger passe : c'est que l'export écrive
    // quelque chose que notre propre import refuse, et que la sauvegarde soit illusoire.
    // Les photos sont absentes ici (Blob et FileReader n'existent pas côté Node) : leur
    // conservation en data URL est couverte plus haut.
    const exported = {
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      ingredients: CATALOGUE,
      recipes: BASE_RECIPES,
      cart: [{ id: 'c1', recipeId: 'demo-ratatouille', servings: 6 }],
      extras: [{ id: 'x1', ingredientId: 'cafe', qty: null }],
      checked: { tomate: 10, sel: null },
    }

    const data = ok(parseBackup(JSON.stringify(exported)))
    expect(data.ingredients).toEqual(CATALOGUE)
    expect(data.recipes.map((r) => r.name)).toEqual(BASE_RECIPES.map((r) => r.name))
    expect(data.recipes[0].items).toEqual(BASE_RECIPES[0].items)
    expect(data.cart).toEqual(exported.cart)
    expect(data.extras).toEqual(exported.extras)
    expect(data.checked).toEqual(exported.checked)
  })
})
