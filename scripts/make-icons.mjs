// Génère les icônes PWA (assiette + coche) sans dépendance : zlib suffit à écrire un PNG.
// Relancer après modification : node scripts/make-icons.mjs
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'

const BG = [0xe8, 0x55, 0x2f] // orange tomate, doit rester égal à --c-accent
const FG = [0xff, 0xff, 0xff]

/** Distance d'un point à un segment, pour dessiner la coche. */
const distToSeg = (px, py, ax, ay, bx, by) => {
  const dx = bx - ax, dy = by - ay
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)))
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
}

/** Couleur du motif en coordonnées normalisées [0,1]. Rayon 0.34 < 0.4 => déjà dans la zone sûre maskable. */
const sample = (x, y) => {
  const inPlate = Math.hypot(x - 0.5, y - 0.5) < 0.34
  if (!inPlate) return BG
  const onCheck =
    distToSeg(x, y, 0.4, 0.5, 0.47, 0.585) < 0.035 || distToSeg(x, y, 0.47, 0.585, 0.62, 0.4) < 0.035
  return onCheck ? BG : FG
}

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})
const crc32 = (buf) => {
  let c = 0xffffffff
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

const chunk = (type, data) => {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([len, body, crc])
}

const png = (size) => {
  const SS = 3 // suréchantillonnage : lisse les bords du cercle et de la coche
  const raw = Buffer.alloc(size * (size * 3 + 1))
  for (let y = 0; y < size; y++) {
    const row = y * (size * 3 + 1)
    raw[row] = 0 // filtre None
    for (let x = 0; x < size; x++) {
      const acc = [0, 0, 0]
      for (let sy = 0; sy < SS; sy++)
        for (let sx = 0; sx < SS; sx++) {
          const c = sample((x + (sx + 0.5) / SS) / size, (y + (sy + 0.5) / SS) / size)
          acc[0] += c[0]; acc[1] += c[1]; acc[2] += c[2]
        }
      const o = row + 1 + x * 3
      for (let i = 0; i < 3; i++) raw[o + i] = Math.round(acc[i] / (SS * SS))
    }
  }
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // 8 bits par canal
  ihdr[9] = 2 // truecolor RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

mkdirSync('public', { recursive: true })
for (const size of [192, 512]) {
  writeFileSync(`public/icon-${size}.png`, png(size))
  console.log(`public/icon-${size}.png`)
}
writeFileSync('public/favicon.png', png(48))
console.log('public/favicon.png')
