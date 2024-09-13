import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather-api/",
  plugins: [react()],
  server: {
    host: true, //now we can launch the app within mobile devices to test it
  }
})
