import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(), react()],
  resolve: {
    alias: {
      '#components': resolve(dirname(fileURLToPath(import.meta.url)), './src/components'),
      '#features': resolve(dirname(fileURLToPath(import.meta.url)), './src/features'),
      '#pages': resolve(dirname(fileURLToPath(import.meta.url)), './src/pages'),
      '#assets': resolve(dirname(fileURLToPath(import.meta.url)), './src/assets'),
      '#api': resolve(dirname(fileURLToPath(import.meta.url)), './src/api'),
      '#app': resolve(dirname(fileURLToPath(import.meta.url)), './src/app'),     
    },
  },
})
