import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/floods': {
        target: 'https://data.petabencana.id', // API base URL
        changeOrigin: true, // Agar CORS diizinkan
        rewrite: (path) => path.replace(/^\/floods/, '') // Menghapus '/floods' dari path URL
      }
    }
  }
})
