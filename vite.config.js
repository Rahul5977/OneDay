import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works on GitHub Pages / Netlify / a file path alike.
export default defineConfig({
  base: './',
  plugins: [react()],
})
