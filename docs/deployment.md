# Guía de Despliegue

Este documento explica cómo desplegar Git Visualizer tanto en GitHub Pages como en Netlify sin que los despliegues interfieran entre sí.

## Despliegue en GitHub Pages

El proyecto está configurado para desplegar en GitHub Pages sin interferir con otros despliegues gracias a una configuración específica en Vite.

### Despliegue Manual

Para desplegar manualmente en GitHub Pages:

```bash
npm run deploy:github
```

Este comando realiza las siguientes acciones:
1. Construye el proyecto con la configuración específica para GitHub Pages (`--mode github`)
2. Utiliza el paquete `gh-pages` para publicar la carpeta `dist` en la rama `gh-pages`

### Despliegue Automático

También existe un workflow de GitHub Actions que automatiza el despliegue a GitHub Pages cada vez que hay cambios en la rama principal:

1. El archivo `.github/workflows/deploy-gh-pages.yml` contiene la configuración
2. El workflow se activa automáticamente con cada push a la rama `main`
3. Construye el proyecto y lo despliega en la rama `gh-pages`

## Despliegue en Netlify

El proyecto mantiene plena compatibilidad con Netlify sin que el despliegue en GitHub Pages interfiera con él.

### Configuración en Netlify

Para configurar el despliegue continuo en Netlify:

1. Conecta tu repositorio de GitHub a Netlify
2. Configura los siguientes ajustes:
   - Build command: `npm run build` o `npm run deploy:netlify`
   - Publish directory: `dist`

### Despliegue Manual

Para construir manualmente para Netlify:

```bash
npm run deploy:netlify
```

## Cómo Funciona

La configuración que permite mantener ambos despliegues independientes se encuentra en:

1. **vite.config.ts**: Utiliza configuración condicional según el entorno:
   ```javascript
   base: isGitHubPages ? '/Git_Vizualizer/' : '/',
   ```

2. **package.json**: Scripts separados para cada plataforma:
   ```json
   "build": "vite build",
   "build:github": "vite build --mode github",
   "deploy:github": "npm run build:github && gh-pages -d dist",
   "deploy:netlify": "npm run build"
   ```

De esta manera, el despliegue en GitHub Pages usa una ruta base específica, mientras que Netlify sigue utilizando la configuración estándar.