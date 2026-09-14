import { useEffect, useRef } from 'react'

/**
 * Fait consommer le bouton retour d'Android par les écrans superposés (fiche, éditeur, dialogue)
 * au lieu de quitter l'application.
 *
 * L'app n'ayant qu'une seule URL, il n'existe aucune entrée d'historique à dépiler : un retour
 * sort directement de la PWA. On maintient donc une entrée factice — la sentinelle — présente
 * exactement quand au moins un écran est ouvert.
 */

/** Écrans ouverts, du plus ancien au plus récent. Le dernier reçoit le retour. */
const stack: Array<() => void> = []
let scheduled = false

const hasSentinel = () => !!(history.state as { guard?: boolean } | null)?.guard

/**
 * Rétablit l'invariant « une sentinelle si et seulement si un écran est ouvert ».
 * Différé d'un tour de boucle : quand un écran en remplace un autre, la pile passe par zéro
 * le temps d'un rendu, et dépiler à ce moment-là ferait sortir de l'application.
 */
function sync() {
  if (scheduled) return
  scheduled = true
  setTimeout(() => {
    scheduled = false
    if (stack.length > 0 && !hasSentinel()) history.pushState({ guard: true }, '')
    else if (stack.length === 0 && hasSentinel()) history.back()
  }, 0)
}

function onPop() {
  // La sentinelle vient d'être consommée par le retour. On ferme le dernier écran ouvert,
  // puis sync() la rétablit s'il en reste d'autres en dessous.
  stack[stack.length - 1]?.()
  sync()
}

export function useBackGuard(onBack: () => void) {
  const callback = useRef(onBack)
  // Mis à jour après chaque rendu plutôt que pendant : le retour arrive toujours d'une
  // interaction, donc bien après, et la pile garde ainsi la version courante de la fermeture.
  useEffect(() => {
    callback.current = onBack
  })

  useEffect(() => {
    const entry = () => callback.current()
    if (stack.length === 0) addEventListener('popstate', onPop)
    stack.push(entry)
    sync()

    return () => {
      const index = stack.lastIndexOf(entry)
      if (index >= 0) stack.splice(index, 1)
      if (stack.length === 0) removeEventListener('popstate', onPop)
      sync()
    }
  }, [])
}
