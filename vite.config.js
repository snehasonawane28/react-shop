import { defineConfig } from 'vite'; // Importing the defineConfig function from Vite
import react from '@vitejs/plugin-react'; // Importing the Vite plugin for React support

// https://vite.dev/config/ - A link to Vite's official documentation for configuration options.

export default defineConfig({
  plugins: [react()], // Adds the React plugin to your Vite configuration. This plugin handles JSX, Fast Refresh, and other React-specific features.
  
  base: process.env.VITE_BASE_PATH || '/react-shop', // Sets the base path for your app. This is the path Vite uses when building the application.
  // If the `VITE_BASE_PATH` environment variable is set, it will be used as the base path. Otherwise, the default is '/react-shop'.
})
