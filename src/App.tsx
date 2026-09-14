import { useState } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { CATALOGUE } from './data/catalogue'
import { DEMO_RECIPES } from './data/demoRecipes'
import { usePersisted } from './domain/store'
import type { CartEntry, Ingredient, Recipe } from './domain/types'
import Ingredients from './screens/Ingredients'
import Recipes from './screens/Recipes'
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

  const active = TABS.find((t) => t.id === tab)!
  const error = ingState.error ?? recipeState.error ?? cartState.error
  const loading = !ingState.loaded || !recipeState.loaded || !cartState.loaded

  return (
    <div className="app">
      <header className="topbar">
        <h1>{active.label}</h1>
        <span className="count">{tab === 'ingredients' ? ingredients.length : recipes.length}</span>
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
          <p className="muted empty">À construire à l’étape suivante.</p>
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
