import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Ändere den Port deines Entwicklungsservers
    open: true, // Öffne einen Browser beim Start des Servers
  },
  build: {
    outDir: 'dist', // Ändere das Ausgabe-Verzeichnis für den Build
  },
})
