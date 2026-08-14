import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // change to your repo name for GitHub Pages, or '/' for a custom domain / <username>.github.io repo
  plugins: [react(), tailwindcss()],
})
