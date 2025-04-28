# Git Command Visualizer

An interactive web application that visually demonstrates Git workflows and commands through animated graphics.

## Features

- Interactive visualizations of core Git commands and workflows
- Step-by-step walkthroughs of Git operations
- Visual explanations of Git concepts like staging, commits, branches, and more
- Color-coded elements showing different Git states
- Hover tooltips with additional information

## Git Commands Visualized

- `git add` - Staging changes
- `git commit` - Saving snapshots
- `git branch` / `git checkout` - Working with branches
- `git merge` - Combining branches
- `git push` / `git pull` - Working with remote repositories
- Conflict resolution process

## Setup for Local Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/git-command-visualizer.git
   cd git-command-visualizer
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:5173

## Deployment

### Deploying to GitHub Pages

El proyecto está configurado para desplegar en GitHub Pages sin interferir con otros despliegues.

1. Ejecuta el siguiente comando para construir y desplegar en GitHub Pages:
   ```
   npm run deploy:github
   ```

Este comando construye el proyecto con la configuración adecuada para GitHub Pages y luego despliega la carpeta `dist` utilizando el paquete `gh-pages`.

### Deploying to Netlify

El proyecto mantiene compatibilidad con Netlify para despliegue continuo:

1. Conecta tu repositorio a Netlify siguiendo las instrucciones en su plataforma
2. Configura los siguientes ajustes de despliegue:
   - Build command: `npm run deploy:netlify`
   - Publish directory: `dist`

También puedes ejecutar manualmente la construcción para Netlify con:
```
npm run deploy:netlify
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## License

MIT License

## Contributions

Contributions are welcome! Please feel free to submit a Pull Request.