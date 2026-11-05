import type { Recipe } from '../domain/types'
import { IconGear, IconMinus, IconPlus } from '../lib/icons'
import { hueFor, useObjectUrl } from '../lib/photo'

/**
 * Vignette : la photo si l'utilisateur en a mis une, sinon l'emoji du plat (ou son initiale)
 * sur une teinte pastel dérivée du nom, stable d'un affichage à l'autre.
 */
export function Thumb({ recipe, className }: { recipe: Recipe; className: string }) {
  const url = useObjectUrl(recipe.photo)
  if (url) return <img className={className} src={url} alt="" />
  return (
    <div
      className={`${className} fallback`}
      style={{ '--hue': hueFor(recipe.name) } as React.CSSProperties}
      aria-hidden="true"
    >
      {recipe.emoji ?? (recipe.name.trim().charAt(0).toUpperCase() || '?')}
    </div>
  )
}

export function Stepper({
  value,
  onChange,
  min = 1,
  max = 50,
  format = String,
  label,
}: {
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
  format?: (n: number) => string
  /** Ce que compte le compteur, pour les lecteurs d'écran : « convive », « repas ». */
  label: string
}) {
  return (
    <div className="stepper">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label={`Un ${label} de moins`}
      >
        <IconMinus size={18} />
      </button>
      <strong>{format(value)}</strong>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label={`Un ${label} de plus`}
      >
        <IconPlus size={18} />
      </button>
    </div>
  )
}

/** En-tête commun aux trois onglets : titre, sous-titre, accès aux réglages toujours au même endroit. */
export function ScreenHeader({
  title,
  subtitle,
  onSettings,
}: {
  title: string
  subtitle?: string
  onSettings: () => void
}) {
  return (
    <header className="screen-head">
      <div>
        <h1>{title}</h1>
        {subtitle && <p className="muted">{subtitle}</p>}
      </div>
      <button type="button" className="icon-btn" onClick={onSettings} aria-label="Réglages">
        <IconGear size={24} />
      </button>
    </header>
  )
}

/** Pastille de filtre : bouton à bascule, l'état est annoncé par aria-pressed. */
export function Pill({
  on,
  onClick,
  children,
}: {
  on: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button type="button" className="pill" aria-pressed={on} onClick={onClick}>
      {on && '✓ '}
      {children}
    </button>
  )
}
