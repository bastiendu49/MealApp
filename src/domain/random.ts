/**
 * Générateur pseudo-aléatoire à graine (mulberry32). Le hasard est injecté partout où il sert
 * (menu généré, rangées du jour) : les tests passent une graine fixe et vérifient un résultat
 * exact au lieu d'un résultat « probable ».
 */
export function seededRandom(seed: string | number): () => number {
  let h = typeof seed === 'number' ? seed : 0
  if (typeof seed === 'string') {
    for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 2654435761)
  }
  let a = h >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Mélange de Fisher-Yates, sans toucher au tableau d'origine. */
export function shuffle<T>(items: readonly T[], rng: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
