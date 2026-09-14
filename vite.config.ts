import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { VitePWA } from 'vite-plugin-pwa'

const BUILD = new Date().toISOString().slice(0, 16).replace('T', ' ')

export default defineConfig({
  define: { __BUILD__: JSON.stringify(BUILD) },
  plugins: [
    react(),
    VitePWA({
      // 'prompt' plutôt que 'autoUpdate' : on ne recharge jamais sous les doigts de
      // l'utilisateur, on lui propose. Un rechargement d'office viderait un formulaire en cours.
      registerType: 'prompt',
      injectRegister: null,
      workbox: { cleanupOutdatedCaches: true },
      includeAssets: ['favicon.png'],
      manifest: {
        name: 'Mes Repas',
        short_name: 'Mes Repas',
        description: 'Choisir ses repas et générer la liste de courses',
        lang: 'fr',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#faf8f5',
        theme_color: '#e8552f',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  test: {
    environment: 'node',
  },
})
