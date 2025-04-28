import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Determina si estamos construyendo para GitHub Pages
  const isGitHubPages = mode === 'github';
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    // Usar una ruta base para GitHub Pages, y la raíz para Netlify u otros despliegues
    base: isGitHubPages ? '/Git_Vizualizer/' : '/',
  };
});
