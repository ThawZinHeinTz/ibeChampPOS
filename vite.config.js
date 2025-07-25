import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // or a specific IP like '192.168.1.100'
    port: 9999,      // optional: set your desired port
  },
})
