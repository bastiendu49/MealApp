import { useEffect, useMemo } from 'react'

/**
 * Réduit et recompresse une photo avant stockage. Une photo de téléphone pèse 3 à 8 Mo ;
 * on la ramène à ~80 Ko, ce qui tient largement dans IndexedDB même avec des centaines de repas.
 */
export async function compressPhoto(file: File, maxSide = 800, quality = 0.8): Promise<Blob> {
  // 'from-image' applique la rotation EXIF : sans ça, les photos prises en portrait
  // ressortent couchées sur le côté.
  const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
  try {
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas indisponible')
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('Compression impossible'))),
        'image/jpeg',
        quality,
      ),
    )
  } finally {
    bitmap.close()
  }
}

/** Teinte stable dérivée du nom, pour la vignette de remplacement quand il n'y a pas de photo. */
export const hueFor = (name: string) =>
  [...name].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7)

/**
 * URL temporaire d'un Blob, révoquée dès qu'on change de photo ou que le composant disparaît.
 * Calculée pendant le rendu plutôt que dans un effet : passer par un setState relancerait
 * un rendu complet à chaque affichage de vignette.
 */
export function useObjectUrl(blob?: Blob) {
  const url = useMemo(() => (blob ? URL.createObjectURL(blob) : undefined), [blob])
  useEffect(() => () => void (url && URL.revokeObjectURL(url)), [url])
  return url
}

/** Une photo doit voyager dans le JSON de sauvegarde : un Blob n'y survit pas. */
export const blobToDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(reader.error ?? new Error('Lecture impossible'))
    reader.readAsDataURL(blob)
  })

/** Décodage manuel : fetch() sur une data URL est inutilement lourd et dépend du réseau. */
export function dataUrlToBlob(url: string): Blob {
  const [head, base64] = url.split(',')
  const mime = /:(.*?);/.exec(head)?.[1] ?? 'image/jpeg'
  const binary = atob(base64)
  return new Blob([Uint8Array.from(binary, (c) => c.charCodeAt(0))], { type: mime })
}
