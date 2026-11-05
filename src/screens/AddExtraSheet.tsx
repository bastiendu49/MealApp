import { useEffect, useRef, useState } from 'react'
import { fold } from '../domain/text'
import type { Ingredient } from '../domain/types'
import { IconPlus } from '../lib/icons'
import { useBackGuard } from '../lib/useBackGuard'

/**
 * Feuille d'ajout d'un article hors recettes (café, papier toilette…). On cherche dans le
 * catalogue : l'article hérite ainsi de son rayon et de son unité, et fusionne avec la même
 * ligne si une recette en demande déjà.
 *
 * La création d'un ingrédient inconnu ne s'ouvre pas par-dessus : l'appelant ferme cette
 * feuille et ouvre la fiche ingrédient, puis la rouvre (pas de modale imbriquée).
 */
export default function AddExtraSheet({
  ingredients,
  listed,
  recent,
  initialPending,
  onAdd,
  onCreate,
  onClose,
}: {
  ingredients: Ingredient[]
  /** Déjà sur la liste : on ne le repropose pas en suggestion. */
  listed: Set<string>
  recent: Ingredient[]
  initialPending: Ingredient | null
  onAdd: (ingredient: Ingredient, qty: number | null) => void
  onCreate: (name: string) => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const qtyRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [pending, setPending] = useState<Ingredient | null>(initialPending)
  const [qty, setQty] = useState('')
  useBackGuard(onClose)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.showModal()
  }, [])

  useEffect(() => {
    if (pending) qtyRef.current?.focus()
  }, [pending])

  const q = fold(query)
  const matches = q ? ingredients.filter((i) => !listed.has(i.id) && fold(i.name).includes(q)).slice(0, 6) : []
  const exactExists = ingredients.some((i) => fold(i.name) === q)

  const submit = () => {
    if (!pending) return
    const raw = qty.trim().replace(',', '.')
    const n = Number(raw)
    onAdd(pending, !raw || !Number.isFinite(n) || n < 0 ? null : n)
  }

  return (
    <dialog
      ref={ref}
      className="bottom-sheet"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <div className="sheet">
        <span className="grabber" aria-hidden="true" />
        <h2>Ajouter à la liste</h2>

        {pending ? (
          <>
            <div className="pending">
              <span className="pending-name">{pending.name}</span>
              <span className="muted">{pending.aisle}</span>
            </div>
            <label>
              Quantité (vide = « qs »)
              <span className="pending-qty">
                <input
                  ref={qtyRef}
                  inputMode="decimal"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="qs"
                />
                <span className="item-unit">{pending.unit}</span>
              </span>
            </label>
            <div className="actions">
              <button type="button" className="ghost" onClick={() => setPending(null)}>
                Changer
              </button>
              <button type="button" className="primary" onClick={submit}>
                Ajouter à la liste
              </button>
            </div>
          </>
        ) : (
          <>
            <label>
              Article
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Café, papier toilette…"
              />
            </label>

            {q ? (
              <ul className="rows suggestions">
                {matches.map((i) => (
                  <li key={i.id}>
                    <button type="button" onClick={() => setPending(i)}>
                      <span className="row-name">{i.name}</span>
                      <span className="row-meta">
                        {i.aisle} · {i.unit}
                      </span>
                    </button>
                  </li>
                ))}
                {!exactExists && (
                  <li>
                    <button type="button" className="create" onClick={() => onCreate(query.trim())}>
                      + Créer « {query.trim()} »
                    </button>
                  </li>
                )}
              </ul>
            ) : (
              recent.length > 0 && (
                <div className="field">
                  <span className="field-label">Récemment ajoutés</span>
                  <div className="pills wrap">
                    {recent.map((i) => (
                      <button key={i.id} type="button" className="pill" onClick={() => setPending(i)}>
                        <IconPlus size={14} /> {i.name}
                      </button>
                    ))}
                  </div>
                </div>
              )
            )}

            <div className="actions">
              <button type="button" className="ghost" onClick={onClose}>
                Annuler
              </button>
            </div>
          </>
        )}
      </div>
    </dialog>
  )
}
