import { useEffect, useMemo, useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { CATALOGUE } from './data/catalogue'
import { INITIAL_FAVORITES, LIBRARY, LIBRARY_IDS } from './data/library'
import { PROTEIN } from './data/protein'
import { SEASONS } from './data/seasons'
import type { Backup } from './domain/backup'
import { missingIngredients, pruneUnchangedCopies, resolveRecipes } from './domain/library'
import { menuPool, NO_WISHES } from './domain/recipeFilters'
import { buildShoppingList } from './domain/shoppingList'
import { uid, usePersisted } from './domain/store'
import { currentMonth } from './domain/text'
import type { CartEntry, Checked, Extra, Ingredient, Recipe } from './domain/types'
import { IconBook, IconCart, IconMenu } from './lib/icons'
import { dataUrlToBlob } from './lib/photo'
import { useBackGuard } from './lib/useBackGuard'
import { IngredientsPage } from './screens/Ingredients'
import Menu, { type MenuPrefs } from './screens/Menu'
import RecipeEditor from './screens/RecipeEditor'
import Recipes from './screens/Recipes'
import RecipeSheet, { type EditFocus } from './screens/RecipeSheet'
import Settings from './screens/Settings'
import ShoppingList from './screens/ShoppingList'

const TABS = [
  { id: 'menu', label: 'Menu', Icon: IconMenu },
  { id: 'recettes', label: 'Recettes', Icon: IconBook },
  { id: 'courses', label: 'Courses', Icon: IconCart },
] as const

type TabId = (typeof TABS)[number]['id']

const DEFAULT_PREFS: MenuPrefs = { count: 5, servings: 2, wishes: NO_WISHES, recentExtras: [] }

/** Au-delà, la ligne « Récemment ajoutés » deviendrait une deuxième liste à parcourir. */
const RECENT_MAX = 8

/**
 * Le service worker sert l'ancien bundle tant que la page n'a pas été rechargée. Sur téléphone
 * l'app reste en mémoire des jours : sans ce bandeau, une mise à jour peut ne jamais apparaître.
 */
function UpdateBanner() {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      // Le bon moment pour chercher une mise à jour, c'est le retour au premier plan.
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') registration?.update()
      })
    },
  })

  if (!needRefresh) return null
  return (
    <div className="banner update">
      <span>Nouvelle version disponible.</span>
      <button onClick={() => updateServiceWorker(true)}>Recharger</button>
    </div>
  )
}

/** Depuis un autre onglet, le retour ramène au menu plutôt que de quitter l'application. */
function BackToHome({ onBack }: { onBack: () => void }) {
  useBackGuard(onBack)
  return null
}

export default function App() {
  const [tab, setTabState] = useState<TabId>('menu')
  const [settings, setSettings] = useState(false)
  const [ingredientsOpen, setIngredientsOpen] = useState(false)
  // On garde l'identifiant plutôt que l'objet : après enregistrement, la fiche doit réafficher
  // la version à jour et non celle capturée à l'ouverture.
  const [viewingId, setViewingId] = useState<string | null>(null)
  const [editing, setEditing] = useState<Recipe | null | undefined>(undefined)
  const [editFocus, setEditFocus] = useState<EditFocus>(undefined)

  // Le catalogue sert de valeur initiale : écrit au premier lancement, jamais réimposé ensuite.
  const [ingredients, setIngredients, ingState] = usePersisted<Ingredient[]>('ingredients', CATALOGUE)
  // Seulement les recettes de l'utilisateur et ses versions modifiées : la bibliothèque est
  // dans le code et se met à jour avec l'app.
  const [stored, setStored, recipeState] = usePersisted<Recipe[]>('recipes', [])
  const [favoriteList, setFavoriteList, favState] = usePersisted<string[]>('favorites', INITIAL_FAVORITES)
  const [prefs, setPrefsRaw, prefsState] = usePersisted<MenuPrefs>('prefs', DEFAULT_PREFS)
  const [cart, setCart, cartState] = usePersisted<CartEntry[]>('cart', [])
  const [checked, setChecked, checkedState] = usePersisted<Checked>('checked', {})
  const [extras, setExtras, extrasState] = usePersisted<Extra[]>('extras', [])

  // Préférences enregistrées par une version antérieure : les champs ajoutés depuis prennent
  // leur valeur par défaut au lieu de valoir undefined.
  const menuPrefs: MenuPrefs = { ...DEFAULT_PREFS, ...prefs, wishes: { ...NO_WISHES, ...prefs.wishes } }
  const setPrefs = (next: MenuPrefs) => setPrefsRaw(next)

  const recipes = useMemo(() => resolveRecipes(LIBRARY, stored), [stored])
  const favorites = useMemo(() => new Set(favoriteList), [favoriteList])
  const ownIds = useMemo(() => new Set(stored.filter((r) => !LIBRARY_IDS.has(r.id)).map((r) => r.id)), [stored])

  // Migration douce, à chaque chargement : les copies jamais modifiées des recettes fournies
  // (écrites sur le téléphone avant la bibliothèque) laissent place à l'original.
  useEffect(() => {
    if (!recipeState.loaded) return
    const pruned = pruneUnchangedCopies(stored, LIBRARY)
    if (pruned.length !== stored.length) setStored(pruned)
  }, [recipeState.loaded, stored, setStored])

  // Les recettes de la bibliothèque peuvent utiliser des ingrédients arrivés après la première
  // installation : sans eux, la ligne disparaîtrait en silence de la liste de courses.
  useEffect(() => {
    if (!ingState.loaded || !recipeState.loaded) return
    const missing = missingIngredients(ingredients, recipes, CATALOGUE)
    if (missing.length > 0) setIngredients([...ingredients, ...missing])
  }, [ingState.loaded, recipeState.loaded, ingredients, recipes, setIngredients])

  const ctx = useMemo(
    () => ({
      month: currentMonth(),
      seasons: SEASONS,
      ingredientById: new Map(ingredients.map((i) => [i.id, i])),
      protein: PROTEIN,
      favorites,
    }),
    [ingredients, favorites],
  )
  const pool = useMemo(() => menuPool(recipes, menuPrefs.wishes, ctx), [recipes, menuPrefs.wishes, ctx])
  const listCount = useMemo(
    () => buildShoppingList({ cart, recipes, ingredients, extras }).groups.reduce((n, g) => n + g.lines.length, 0),
    [cart, recipes, ingredients, extras],
  )

  const setTab = (next: TabId) => {
    setTabState(next)
    window.scrollTo(0, 0)
  }

  const toggleFavorite = (r: Recipe) =>
    setFavoriteList(favorites.has(r.id) ? favoriteList.filter((id) => id !== r.id) : [...favoriteList, r.id])

  const addToMenu = (r: Recipe, servings = menuPrefs.servings) =>
    setCart([...cart, { id: uid(), recipeId: r.id, servings }])

  const saveRecipe = (recipe: Recipe) => {
    const exists = stored.some((r) => r.id === recipe.id)
    setStored(exists ? stored.map((r) => (r.id === recipe.id ? recipe : r)) : [...stored, recipe])
    // Une recette qu'on vient d'écrire soi-même fait partie de « Mes repas ».
    if (!recipes.some((r) => r.id === recipe.id) && !favorites.has(recipe.id)) {
      setFavoriteList([...favoriteList, recipe.id])
    }
    setEditing(undefined)
  }

  /** Suppression d'une recette à soi, ou retour à l'original pour une recette de bibliothèque. */
  const deletion = (r: Recipe | null) => {
    if (!r || !stored.some((s) => s.id === r.id)) return undefined
    if (LIBRARY_IDS.has(r.id)) {
      return {
        label: 'Revenir à la version d’origine',
        message: `Abandonner tes modifications de « ${r.name} » et revenir à la recette de la bibliothèque ?`,
        onDelete: () => {
          setStored(stored.filter((s) => s.id !== r.id))
          setEditing(undefined)
        },
      }
    }
    return {
      label: 'Supprimer cette recette',
      message: `Supprimer « ${r.name} » ? Cette action est définitive.`,
      onDelete: () => {
        setStored(stored.filter((s) => s.id !== r.id))
        // Un repas supprimé ne doit pas rester au menu : il y deviendrait invisible.
        setCart(cart.filter((e) => e.recipeId !== r.id))
        setFavoriteList(favoriteList.filter((id) => id !== r.id))
        setViewingId(null)
        setEditing(undefined)
      },
    }
  }

  const viewing = recipes.find((r) => r.id === viewingId) ?? null
  const states = [ingState, recipeState, favState, prefsState, cartState, checkedState, extrasState]
  const error = states.find((s) => s.error)?.error ?? null
  const loading = states.some((s) => !s.loaded)
  const openSettings = () => setSettings(true)

  return (
    <div className="app">
      {tab !== 'menu' && <BackToHome onBack={() => setTab('menu')} />}
      <UpdateBanner />
      {error && <p className="banner error">{error}</p>}

      <main className="screen">
        {loading ? (
          <p className="muted empty">Chargement…</p>
        ) : tab === 'menu' ? (
          <Menu
            cart={cart}
            setCart={setCart}
            recipes={recipes}
            pool={pool}
            prefs={menuPrefs}
            setPrefs={setPrefs}
            listCount={listCount}
            onOpen={(r) => setViewingId(r.id)}
            onBrowse={() => setTab('recettes')}
            onSeeList={() => setTab('courses')}
            onSettings={openSettings}
          />
        ) : tab === 'recettes' ? (
          <Recipes
            recipes={recipes}
            ingredients={ingredients}
            favorites={favorites}
            ownIds={ownIds}
            menuCount={(id) => cart.filter((e) => e.recipeId === id).length}
            onOpen={(r) => setViewingId(r.id)}
            onAdd={(r) => addToMenu(r)}
            onToggleFavorite={toggleFavorite}
            onCreate={() => {
              setEditFocus(undefined)
              setEditing(null)
            }}
            onSettings={openSettings}
          />
        ) : (
          <ShoppingList
            cart={cart}
            recipes={recipes}
            ingredients={ingredients}
            setIngredients={setIngredients}
            checked={checked}
            setChecked={setChecked}
            extras={extras}
            setExtras={setExtras}
            recentExtras={menuPrefs.recentExtras}
            onExtraAdded={(id) =>
              setPrefs({
                ...menuPrefs,
                recentExtras: [id, ...menuPrefs.recentExtras.filter((x) => x !== id)].slice(0, RECENT_MAX),
              })
            }
            onFinish={() => {
              setCart([])
              setChecked({})
              setExtras([])
            }}
            onGoToMenu={() => setTab('menu')}
            onSettings={openSettings}
          />
        )}
      </main>

      {/* Écrans superposés : l'onglet reste monté dessous, le retour y ramène à l'identique. */}
      {viewing && (
        <RecipeSheet
          key={viewing.id}
          recipe={viewing}
          ingredients={ingredients}
          entries={cart.filter((e) => e.recipeId === viewing.id)}
          favorite={favorites.has(viewing.id)}
          defaultServings={menuPrefs.servings}
          onToggleFavorite={() => toggleFavorite(viewing)}
          onAdd={(servings) => addToMenu(viewing, servings)}
          onRemove={(entryId) => setCart(cart.filter((e) => e.id !== entryId))}
          onEdit={(focus) => {
            setEditFocus(focus)
            setEditing(viewing)
          }}
          onClose={() => setViewingId(null)}
        />
      )}

      {editing !== undefined && (
        <RecipeEditor
          key={editing?.id ?? 'nouvelle'}
          initial={editing}
          focus={editFocus}
          ingredients={ingredients}
          setIngredients={setIngredients}
          deletion={deletion(editing)}
          fromLibrary={!!editing && LIBRARY_IDS.has(editing.id)}
          onSave={saveRecipe}
          onClose={() => setEditing(undefined)}
        />
      )}

      {ingredientsOpen && (
        <IngredientsPage
          ingredients={ingredients}
          setIngredients={setIngredients}
          recipes={recipes}
          onClose={() => setIngredientsOpen(false)}
        />
      )}

      {settings && (
        <Settings
          state={{
            ingredients,
            recipes: stored,
            favorites: favoriteList,
            libraryCount: LIBRARY.length,
            cart,
            extras,
            checked,
          }}
          onOpenIngredients={() => {
            setSettings(false)
            setIngredientsOpen(true)
          }}
          onImport={(backup: Backup) => {
            // Les photos voyagent en data URL dans le fichier : on les remet en Blob.
            const imported = backup.recipes.map(({ photo, ...rest }) =>
              photo ? { ...rest, photo: dataUrlToBlob(photo) } : rest,
            )
            setStored(pruneUnchangedCopies(imported, LIBRARY))
            setIngredients(backup.ingredients)
            setCart(backup.cart)
            setExtras(backup.extras)
            setChecked(backup.checked)
            if (backup.favorites) setFavoriteList(backup.favorites)
          }}
          onClose={() => setSettings(false)}
        />
      )}

      <nav className="tabbar">
        {TABS.map(({ id, label, Icon }) => (
          <button key={id} onClick={() => setTab(id)} aria-current={id === tab ? 'page' : undefined}>
            <span className="tab-icon">
              <Icon />
            </span>
            {label}
            {id === 'courses' && listCount > 0 ? ` · ${listCount}` : ''}
          </button>
        ))}
      </nav>
    </div>
  )
}
