import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //We change the dev server by adding a "server" property-key to the defineConfig({}) and then pass an object as its property-value - We can then change the port (default is 5173)
  server: {
    port: 4010, 
  }
})
