import { useEffect, useRef, useState } from 'react'
import { BACKUP_VERSION, parseBackup, type Backup } from '../domain/backup'
import type { CartEntry, Checked, Extra, Ingredient, Recipe } from '../domain/types'
import { Confirm } from '../lib/Confirm'
import { blobToDataUrl } from '../lib/photo'
import { useBackGuard } from '../lib/useBackGuard'

type State = {
  ingredients: Ingredient[]
  recipes: Recipe[]
  cart: CartEntry[]
  extras: Extra[]
  checked: Checked
}

export default function Settings({
  state,
  onImport,
  onLoadBase,
  onClose,
}: {
  state: State
  onImport: (backup: Backup) => void
  onLoadBase: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState<Backup | null>(null)
  const [storage, setStorage] = useState('—')
  const [persisted, setPersisted] = useState<boolean | null>(null)

  useBackGuard(onClose)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.setAttribute('autofocus', '')
    dialog.showModal()
    dialog.focus()
  }, [])

  useEffect(() => {
    navigator.storage?.estimate?.().then(
      (e) => e.usage != null && setStorage(`${(e.usage / 1048576).toFixed(1)} Mo`),
      () => {},
    )
    navigator.storage?.persisted?.().then(setPersisted, () => setPersisted(null))
  }, [])

  const exportNow = async () => {
    setBusy(true)
    setError(null)
    try {
      const recipes = await Promise.all(
        state.recipes.map(async (r) => ({
          ...r,
          photo: r.photo ? await blobToDataUrl(r.photo) : undefined,
        })),
      )
      const backup: Backup = {
        version: BACKUP_VERSION,
        exportedAt: new Date().toISOString(),
        ingredients: state.ingredients,
        recipes,
        cart: state.cart,
        extras: state.extras,
        checked: state.checked,
      }
      const url = URL.createObjectURL(
        new Blob([JSON.stringify(backup)], { type: 'application/json' }),
      )
      const link = document.createElement('a')
      link.href = url
      link.download = `mes-repas-${new Date().toISOString().slice(0, 10)}.json`
      document.body.appendChild(link)
      link.click()
      link.remove()
      // Révoquer tout de suite annulerait le téléchargement avant qu'il ne démarre.
      setTimeout(() => URL.revokeObjectURL(url), 30_000)
    } catch (e) {
      setError(`Export impossible : ${e instanceof Error ? e.message : e}`)
    } finally {
      setBusy(false)
    }
  }

  const pickFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setError(null)
    const result = parseBackup(await file.text())
    if (!result.ok) {
      setError(result.error)
      return
    }
    setPending(result.data)
  }

  return (
    <dialog ref={ref} tabIndex={-1} onClose={onClose}>
      <div className="sheet">
        <h2>Réglages</h2>

        <dl className="status">
          <div>
            <dt>Repas · Ingrédients</dt>
            <dd>
              {state.recipes.length} · {state.ingredients.length}
            </dd>
          </div>
          <div>
            <dt>Espace utilisé</dt>
            <dd>{storage}</dd>
          </div>
          <div>
            <dt>Stockage protégé des purges</dt>
            <dd className={persisted ? 'ok' : 'ko'}>
              {persisted === null ? '—' : persisted ? 'oui' : 'non'}
            </dd>
          </div>
          <div>
            <dt>Version</dt>
            <dd>{__BUILD__}</dd>
          </div>
        </dl>

        <p className="hint">
          Tes données ne quittent jamais ce téléphone : aucun serveur n’en a de copie. Vider les
          données de Chrome ou changer d’appareil les efface définitivement. L’export est ta seule
          sauvegarde — garde le fichier ailleurs que sur le téléphone.
        </p>

        <button type="button" className="primary wide" onClick={exportNow} disabled={busy}>
          {busy ? 'Export en cours…' : 'Exporter mes données'}
        </button>

        <label className="ghost wide import">
          Importer une sauvegarde
          <input type="file" accept="application/json,.json" onChange={pickFile} hidden />
        </label>

        <button type="button" className="ghost wide" onClick={onLoadBase}>
          Ajouter les recettes fournies
        </button>
        <p className="hint">
          N’écrase rien : seules les recettes fournies que tu n’as pas déjà sont ajoutées, avec
          les ingrédients qui leur manquent.
        </p>

        {error && <p className="error">{error}</p>}

        <div className="actions">
          <button type="button" className="ghost" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>

      {pending && (
        <Confirm
          message={`Remplacer TOUT le contenu actuel par cette sauvegarde du ${new Date(
            pending.exportedAt,
          ).toLocaleDateString('fr-FR')} ? ${pending.recipes.length} repas et ${
            pending.ingredients.length
          } ingrédients seront restaurés. Tes données actuelles seront perdues.`}
          confirmLabel="Remplacer"
          onConfirm={() => {
            onImport(pending)
            setPending(null)
            onClose()
          }}
          onCancel={() => setPending(null)}
        />
      )}
    </dialog>
  )
}
