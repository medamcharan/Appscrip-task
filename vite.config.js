import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

export default defineConfig({
  plugins: [react(), ssr()],
  ssr: {
    noExternal: ['@mui/material', '@emotion/react', '@emotion/styled'] // Ensure MUI works with SSR
  }
})
