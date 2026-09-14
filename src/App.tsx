import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { CATALOGUE } from './data/catalogue'
import { DEMO_RECIPES } from './data/demoRecipes'
import { usePersisted } from './domain/store'
import type { CartEntry, Checked, Extra, Ingredient, Recipe } from './domain/types'
import Ingredients from './screens/Ingredients'
import Recipes from './screens/Recipes'
import ShoppingList from './screens/ShoppingList'
import { useBackGuard } from './lib/useBackGuard'

const TABS = [
  { id: 'repas', label: 'Repas', glyph: '🍽️' },
  { id: 'liste', label: 'Liste', glyph: '✅' },
  { id: 'ingredients', label: 'Ingrédients', glyph: '🥕' },
] as const

type TabId = (typeof TABS)[number]['id']

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

/** Depuis un autre onglet, le retour ramène à l'accueil plutôt que de quitter l'application. */
function BackToHome({ onBack }: { onBack: () => void }) {
  useBackGuard(onBack)
  return null
}

export default function App() {
  const [tab, setTab] = useState<TabId>('repas')
  // Catalogue et repas de démonstration servent de valeur initiale : ils s'écrivent au premier
  // lancement et ne réapparaissent jamais ensuite, même si tout est supprimé.
  const [ingredients, setIngredients, ingState] = usePersisted<Ingredient[]>('ingredients', CATALOGUE)
  const [recipes, setRecipes, recipeState] = usePersisted<Recipe[]>('recipes', DEMO_RECIPES)
  const [cart, setCart, cartState] = usePersisted<CartEntry[]>('cart', [])
  const [checked, setChecked, checkedState] = usePersisted<Checked>('checked', {})
  const [extras, setExtras, extrasState] = usePersisted<Extra[]>('extras', [])

  const active = TABS.find((t) => t.id === tab)!
  const states = [ingState, recipeState, cartState, checkedState, extrasState]
  const error = states.find((s) => s.error)?.error ?? null
  const loading = states.some((s) => !s.loaded)

  return (
    <div className="app">
      <header className="topbar">
        <h1>{active.label}</h1>
        <span className="count">
          {tab === 'ingredients' ? ingredients.length : tab === 'liste' ? cart.length : recipes.length}
        </span>
      </header>

      {tab !== 'repas' && <BackToHome onBack={() => setTab('repas')} />}
      <UpdateBanner />
      {error && <p className="banner error">{error}</p>}

      <main className="screen">
        {loading ? (
          <p className="muted empty">Chargement…</p>
        ) : tab === 'repas' ? (
          <Recipes
            recipes={recipes}
            setRecipes={setRecipes}
            ingredients={ingredients}
            setIngredients={setIngredients}
            cart={cart}
            setCart={setCart}
            onSeeList={() => setTab('liste')}
          />
        ) : tab === 'ingredients' ? (
          <Ingredients ingredients={ingredients} setIngredients={setIngredients} recipes={recipes} />
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
            onFinish={() => {
              setCart([])
              setChecked({})
              setExtras([])
            }}
            onGoToMeals={() => setTab('repas')}
          />
        )}
      </main>

      <nav className="tabbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            aria-current={t.id === tab ? 'page' : undefined}
          >
            <span className="glyph">
              {t.glyph}
              {t.id === 'liste' && cart.length > 0 && <span className="tab-badge">{cart.length}</span>}
            </span>
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
