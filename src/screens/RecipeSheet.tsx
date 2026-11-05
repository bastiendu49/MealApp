import { useMemo, useState } from 'react'
import { PROTEIN } from '../data/protein'
import { SEASONS } from '../data/seasons'
import { proteinPerServing } from '../domain/nutrition'
import { seasonOf } from '../domain/season'
import { formatQty, scaleRecipe } from '../domain/shoppingList'
import { currentMonth } from '../domain/text'
import type { CartEntry, Ingredient, Recipe } from '../domain/types'
import { IconBack, IconClose, IconEdit, IconHeart, IconPlus } from '../lib/icons'
import { useBackGuard } from '../lib/useBackGuard'
import { Stepper, Thumb } from './common'
import { DIFFICULTY_LABEL, EQUIPMENT_LABEL, MAIN_LABEL, people, priceLabel } from './labels'

export type EditFocus = 'steps' | 'items' | undefined

type Tab = 'ingredients' | 'recette'

/** Une étape par ligne, lignes vides ignorées. */
const stepsOf = (recipe: Recipe) => recipe.steps.split('\n').map((s) => s.trim()).filter(Boolean)

/**
 * Fiche d'un plat, superposée à l'écran d'où on l'ouvre (Menu ou Recettes). Cet écran reste
 * monté en dessous : le retour y ramène exactement là où on était, défilement compris.
 */
export default function RecipeSheet({
  recipe,
  ingredients,
  entries,
  favorite,
  defaultServings,
  onToggleFavorite,
  onAdd,
  onRemove,
  onEdit,
  onClose,
}: {
  recipe: Recipe
  ingredients: Ingredient[]
  entries: CartEntry[]
  favorite: boolean
  defaultServings: number
  onToggleFavorite: () => void
  onAdd: (servings: number) => void
  onRemove: (entryId: string) => void
  onEdit: (focus: EditFocus) => void
  onClose: () => void
}) {
  const [tab, setTab] = useState<Tab>('ingredients')
  const [servings, setServings] = useState(defaultServings)
  useBackGuard(onClose)
  const steps = stepsOf(recipe)
  const season = seasonOf(recipe, currentMonth(), SEASONS)
  const nameOf = (id: string) => ingredients.find((i) => i.id === id)?.name.toLowerCase() ?? id

  // Les quantités suivent le sélecteur de convives : on voit ce qu'on va acheter.
  const scaled = useMemo(() => scaleRecipe(recipe, servings, ingredients), [recipe, servings, ingredients])

  return (
    <div className="editor recipe-page">
      <div className="hero-wrap">
        <Thumb recipe={recipe} className="hero" />
        <button type="button" className="round-btn hero-back" onClick={onClose} aria-label="Retour">
          <IconBack />
        </button>
        <div className="hero-actions">
          <button
            type="button"
            className="round-btn"
            // Le crayon modifie ce qu'on regarde : l'éditeur s'ouvre sur la section de l'onglet actif.
            onClick={() => onEdit(tab === 'recette' ? 'steps' : 'items')}
            aria-label="Modifier la recette"
          >
            <IconEdit size={20} />
          </button>
          <button
            type="button"
            className="round-btn heart"
            onClick={onToggleFavorite}
            aria-pressed={favorite}
            aria-label={favorite ? 'Retirer de mes repas' : 'Ajouter à mes repas'}
          >
            <IconHeart filled={favorite} />
          </button>
        </div>
      </div>

      <div className="recipe-body">
        <h1>{recipe.name}</h1>
        <ul className="chips">
          {recipe.healthy && <li className="good">Healthy</li>}
          {proteinPerServing(recipe, PROTEIN) > 0 && (
            <li>💪 ≈ {proteinPerServing(recipe, PROTEIN)} g protéines / pers.</li>
          )}
          {recipe.minutes && <li>⏱ {recipe.minutes} min</li>}
          {recipe.difficulty && <li>{DIFFICULTY_LABEL[recipe.difficulty]}</li>}
          {recipe.price && <li>{priceLabel(recipe.price)}</li>}
          {recipe.course === 'dessert' ? <li>Dessert</li> : recipe.main && <li>{MAIN_LABEL[recipe.main]}</li>}
          {/* « · » plutôt que « ou » : selon la recette, plusieurs ustensiles sont au choix
              (four ou airfryer) ou s'utilisent ensemble (poêle et casserole). */}
          {recipe.equipment && <li>{recipe.equipment.map((e) => EQUIPMENT_LABEL[e]).join(' · ')}</li>}
          {season.status === 'saison' && <li className="good">De saison</li>}
          {season.status === 'hors-saison' && (
            <li className="off">Hors saison : {season.outOfSeason.map(nameOf).join(', ')}</li>
          )}
        </ul>

        {entries.length > 0 && (
          <ul className="cart-entries">
            {entries.map((entry) => (
              <li key={entry.id}>
                <span>Au menu · {people(entry.servings)}</span>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => onRemove(entry.id)}
                  aria-label="Retirer du menu"
                >
                  <IconClose size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="servings-card">
          <span>Pour combien ?</span>
          <Stepper value={servings} onChange={setServings} format={people} label="convive" />
        </div>

        <div className="tabs" role="tablist">
          <button role="tab" type="button" aria-selected={tab === 'ingredients'} onClick={() => setTab('ingredients')}>
            Ingrédients
          </button>
          <button role="tab" type="button" aria-selected={tab === 'recette'} onClick={() => setTab('recette')}>
            Recette
          </button>
        </div>

        {tab === 'recette' ? (
          steps.length === 0 ? (
            <p className="muted empty">Aucune étape saisie.</p>
          ) : (
            <ol className="steps">
              {steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          )
        ) : scaled.length === 0 ? (
          <p className="muted empty">Aucun ingrédient.</p>
        ) : (
          <>
            <ul className="detail-items">
              {scaled.map(({ ingredient, qty }, i) => (
                <li key={`${ingredient.id}-${i}`}>
                  <span className="detail-name">
                    {ingredient.name}
                    {ingredient.pantry && <span className="tag">en stock</span>}
                  </span>
                  <span className="detail-qty">{formatQty(qty, ingredient.unit)}</span>
                </li>
              ))}
            </ul>
            {scaled.some((s) => s.ingredient.pantry) && (
              <p className="hint">« en stock » : supposé dans ton placard, il n’ira pas sur la liste.</p>
            )}
          </>
        )}
      </div>

      <div className="bottom-bar">
        <button type="button" className="primary big" onClick={() => onAdd(servings)}>
          <IconPlus size={20} />
          Ajouter au menu · {people(servings)}
        </button>
      </div>
    </div>
  )
}
