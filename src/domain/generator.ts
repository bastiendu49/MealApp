import { shuffle } from './random'
import type { Recipe } from './types'

/**
 * Tire `count` repas différents dans `pool`, en variant les ingrédients principaux.
 *
 * Premier passage : on refuse un plat de la même famille que le précédent (pas deux poulets
 * d'affilée) et on plafonne chaque famille à la moitié du menu. Second passage : si la
 * contrainte a laissé des trous (peu de recettes, envies très restrictives), on complète
 * sans elle — mieux vaut deux plats végé de suite qu'un menu incomplet.
 *
 * Rend moins de `count` repas seulement si `pool` n'en contient pas assez.
 */
export function generateMenu(pool: Recipe[], count: number, rng: () => number): Recipe[] {
  const candidates = shuffle(pool, rng)
  const cap = Math.max(1, Math.ceil(count / 2))
  const picked: Recipe[] = []
  const perMain = new Map<string, number>()

  for (const r of candidates) {
    if (picked.length >= count) break
    const family = r.main ?? '?'
    const last = picked[picked.length - 1]
    if (last && r.main && last.main === r.main) continue
    if ((perMain.get(family) ?? 0) >= cap) continue
    picked.push(r)
    perMain.set(family, (perMain.get(family) ?? 0) + 1)
  }

  for (const r of candidates) {
    if (picked.length >= count) break
    if (!picked.includes(r)) picked.push(r)
  }
  return picked
}

/**
 * Un autre plat que tous ceux du menu, pour le bouton « Remplacer ». De préférence d'une autre
 * famille que celui qu'on remplace : si on n'en voulait pas, c'est souvent pour changer.
 */
export function pickReplacement(
  pool: Recipe[],
  menuIds: string[],
  replaced: Recipe | undefined,
  rng: () => number,
): Recipe | null {
  const taken = new Set(menuIds)
  const free = shuffle(
    pool.filter((r) => !taken.has(r.id)),
    rng,
  )
  return free.find((r) => !replaced?.main || r.main !== replaced.main) ?? free[0] ?? null
}
