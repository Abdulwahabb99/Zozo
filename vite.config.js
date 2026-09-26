import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Link previews need an absolute image URL. Set SITE_URL (e.g. https://zozo.vercel.app)
// or let it fall back to the Vercel production domain.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  ''
).replace(/\/$/, '')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'site-url',
      transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    },
  ],
})
