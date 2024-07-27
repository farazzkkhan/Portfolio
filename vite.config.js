import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.docx'],
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
