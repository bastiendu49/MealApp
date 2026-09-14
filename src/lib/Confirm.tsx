import { useEffect, useRef } from 'react'
import { useBackGuard } from './useBackGuard'

/**
 * Remplace window.confirm : sur Android une boîte native peut être supprimée par le navigateur
 * (case « empêcher cette page de créer d'autres boîtes de dialogue »), et la confirmation
 * disparaît alors sans prévenir. Celle-ci s'affiche toujours.
 */
export function Confirm({
  message,
  confirmLabel,
  onConfirm,
  onCancel,
}: {
  message: string
  confirmLabel: string
  onConfirm: () => void
  onCancel: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useBackGuard(onCancel)
  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    dialog.setAttribute('autofocus', '') // aucun bouton présélectionné, aucun clavier
    dialog.showModal()
    dialog.focus()
  }, [])

  return (
    <dialog
      ref={ref}
      tabIndex={-1}
      className="confirm"
      onCancel={(e) => {
        e.preventDefault()
        onCancel()
      }}
      onClick={(e) => e.target === ref.current && onCancel()}
    >
      <div className="sheet">
        <p className="confirm-message">{message}</p>
        <div className="actions">
          <button type="button" className="ghost" onClick={onCancel}>
            Revenir
          </button>
          <button type="button" className="primary" onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  )
}
