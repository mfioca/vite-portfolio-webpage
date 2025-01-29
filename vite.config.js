import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    strictPort: true,
    port: 3000, // Use port 3000 like `npm start`
    open: true, // Auto-opens the browser
  }
});
