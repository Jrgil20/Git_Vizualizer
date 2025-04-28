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

## Deploying to GitHub Pages

1. Update the `vite.config.ts` file to include your repository name as the base path:

   ```ts
   export default defineConfig({
     base: '/git-command-visualizer/',
     // rest of your config
   })
   ```

2. Build the project
   ```
   npm run build
   ```

3. Deploy to GitHub Pages
   ```
   npm run deploy
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