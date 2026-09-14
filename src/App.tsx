import { useEffect, useState } from 'react'
import { CATALOGUE } from './data/catalogue'
import { usePersisted } from './domain/store'
import type { Ingredient, Recipe } from './domain/types'
import Ingredients from './screens/Ingredients'

const TABS = [
  { id: 'repas', label: 'Repas', glyph: '🍽️' },
  { id: 'liste', label: 'Liste', glyph: '✅' },
  { id: 'ingredients', label: 'Ingrédients', glyph: '🥕' },
] as const

type TabId = (typeof TABS)[number]['id']

/** Panneau de validation de l'étape 0. À supprimer quand le vrai écran Repas arrive. */
function Diagnostic() {
  const [online, setOnline] = useState(navigator.onLine)
  const [persisted, setPersisted] = useState<boolean | null>(null)
  const [swReady, setSwReady] = useState(false)

  const standalone = window.matchMedia('(display-mode: standalone)').matches

  useEffect(() => {
    const sync = () => setOnline(navigator.onLine)
    addEventListener('online', sync)
    addEventListener('offline', sync)
    return () => {
      removeEventListener('online', sync)
      removeEventListener('offline', sync)
    }
  }, [])

  useEffect(() => {
    // Demande à Android de ne pas purger IndexedDB : c'est notre garde-fou anti-perte de données.
    navigator.storage?.persist?.().then(setPersisted, () => setPersisted(null))
    navigator.serviceWorker?.ready.then(() => setSwReady(true), () => {})
  }, [])

  const yes = (v: boolean) => <span className={v ? 'ok' : 'ko'}>{v ? 'oui' : 'non'}</span>

  return (
    <div className="card">
      <p style={{ marginTop: 0 }}>
        <strong>Étape 0 — coquille installable.</strong>
      </p>
      <dl className="status">
        <div>
          <dt>Lancée comme une app (plein écran)</dt>
          <dd>{yes(standalone)}</dd>
        </div>
        <div>
          <dt>Fonctionne hors ligne</dt>
          <dd>{yes(swReady)}</dd>
        </div>
        <div>
          <dt>Réseau actuel</dt>
          <dd>{online ? 'en ligne' : <span className="ok">hors ligne</span>}</dd>
        </div>
        <div>
          <dt>Stockage protégé des purges</dt>
          <dd>{persisted === null ? '—' : yes(persisted)}</dd>
        </div>
      </dl>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState<TabId>('repas')
  // Le catalogue sert de valeur initiale : il s'écrit au premier lancement et ne revient jamais
  // ensuite, même si l'utilisateur supprime tout.
  const [ingredients, setIngredients, ingState] = usePersisted<Ingredient[]>('ingredients', CATALOGUE)
  const [recipes, , recipeState] = usePersisted<Recipe[]>('recipes', [])

  const active = TABS.find((t) => t.id === tab)!
  const error = ingState.error ?? recipeState.error
  const loading = !ingState.loaded || !recipeState.loaded

  return (
    <div className="app">
      <header className="topbar">
        <h1>{active.label}</h1>
        {tab === 'ingredients' && <span className="count">{ingredients.length}</span>}
      </header>

      {error && <p className="banner error">{error}</p>}

      <main className="screen">
        {loading ? (
          <p className="muted empty">Chargement…</p>
        ) : tab === 'repas' ? (
          <Diagnostic />
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
            <span className="glyph">{t.glyph}</span>
            {t.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
