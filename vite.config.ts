import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change `base` to your GitHub repo name if different (e.g. '/my-repo/').
  // For GitHub Pages with a project site, use '/<repo-name>/'.
  base: "https://saulocandeira.com.br/"
})
