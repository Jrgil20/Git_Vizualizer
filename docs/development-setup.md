# Configuración para Desarrollo Local

Esta guía explica cómo configurar tu entorno local para contribuir al proyecto Git Visualizer.

## Requisitos Previos

- **Node.js**: Versión 16.0.0 o superior
  - [Descargar Node.js](https://nodejs.org/es/)
  - Para verificar tu versión: `node --version`

- **npm**: Se instala junto con Node.js
  - Para verificar tu versión: `npm --version`
  
- **Git**: Para gestionar el control de versiones
  - [Descargar Git](https://git-scm.com/downloads)
  - Para verificar tu versión: `git --version`

## Clonar el Repositorio

1. Crea un fork del repositorio en GitHub haciendo clic en el botón "Fork" en la página del repositorio
2. Clona tu fork del repositorio:

```bash
git clone https://github.com/TU-USUARIO/Git_Vizualizer.git
cd Git_Vizualizer
```

3. Configura el repositorio original como "upstream":

```bash
git remote add upstream https://github.com/USUARIO-ORIGINAL/Git_Vizualizer.git
```

## Instalación de Dependencias

Instala todas las dependencias del proyecto con npm:

```bash
npm install
```

## Scripts de Desarrollo

El proyecto incluye varios scripts útiles en el archivo `package.json`:

- **Iniciar servidor de desarrollo**:
  ```bash
  npm run dev
  ```
  Esto iniciará un servidor de desarrollo local en `http://localhost:5173`

- **Compilar para producción**:
  ```bash
  npm run build
  ```
  
- **Ejecutar linting**:
  ```bash
  npm run lint
  ```

- **Vista previa de la build**:
  ```bash
  npm run preview
  ```

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
src/
├── App.tsx                     # Componente raíz de la aplicación
├── index.css                   # Estilos globales
├── main.tsx                    # Punto de entrada
├── vite-env.d.ts              
├── components/                 # Componentes de la aplicación
│   ├── GitVisualizer/          # Componentes específicos del visualizador
│   │   ├── shared/             # Componentes compartidos
│   │   └── Visualizers/        # Visualizadores para cada comando
│   ├── Layout/                 # Componentes de layout
│   └── UI/                     # Componentes de interfaz reutilizables
├── i18n/                       # Configuración y archivos de internacionalización
│   └── locales/                # Archivos de traducción
├── types/                      # Definiciones de tipos TypeScript
└── utils/                      # Funciones y utilidades
```

## Flujo de Trabajo de Desarrollo

1. Crea una nueva rama para tu función o corrección:
   ```bash
   git checkout -b feature/nombre-de-tu-funcion
   ```

2. Realiza tus cambios, asegurándote de seguir las convenciones de código del proyecto

3. Comprueba que el proyecto se compila correctamente:
   ```bash
   npm run build
   ```

4. Ejecuta el linting para detectar posibles errores:
   ```bash
   npm run lint
   ```

5. Prueba tus cambios localmente:
   ```bash
   npm run dev
   ```

6. Una vez que estés satisfecho con tus cambios, envíalos a tu fork:
   ```bash
   git push origin feature/nombre-de-tu-funcion
   ```

7. Crea un Pull Request desde tu fork al repositorio original para que tus cambios sean revisados

Para más detalles sobre cómo contribuir, consulta [CONTRIBUTING.md](./contributing.md).