# Guía de Contribución

¡Gracias por tu interés en contribuir a Git Visualizer! Esta guía te ayudará a entender el proceso de contribución a este proyecto.

## Código de Conducta

Al contribuir a este proyecto, te comprometes a mantener un ambiente respetuoso y colaborativo. Cualquier contribución, sugerencia o problema debe presentarse de manera constructiva.

## ¿Cómo Puedo Contribuir?

Hay varias formas de contribuir al proyecto:

### 1. Reportando Errores (Bugs)

Si encuentras un error, por favor crea un issue en GitHub con la siguiente información:
- Título claro y descriptivo
- Pasos detallados para reproducir el error
- Comportamiento esperado y comportamiento actual
- Capturas de pantalla (si aplica)
- Información del entorno (navegador, sistema operativo, versión de Node.js)

### 2. Sugiriendo Mejoras

Las sugerencias de nuevas funcionalidades también son bienvenidas:
- Proporciona un título claro para tu sugerencia
- Describe detalladamente la funcionalidad propuesta
- Explica por qué sería útil esta funcionalidad
- Si es posible, proporciona ejemplos visuales o mockups

### 3. Pull Requests

Nos encantaría recibir tus contribuciones directas al código:

#### Proceso para Contribuir Código

1. **Fork del Repositorio**: Crea un fork del repositorio en GitHub
2. **Crea una Rama**: Para cada nueva funcionalidad o corrección, crea una nueva rama
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```
3. **Escribe tu Código**: Asegúrate de seguir las convenciones de código (detalladas abajo)
4. **Prueba tu Código**: Verifica que tu código funcione correctamente
5. **Commit de tus Cambios**: Realiza commits con mensajes claros y descriptivos
   ```bash
   git commit -m "Tipo: Descripción corta de los cambios"
   ```
   Tipos de commit recomendados:
   - `feat`: Nueva funcionalidad
   - `fix`: Corrección de errores
   - `docs`: Cambios en la documentación
   - `style`: Cambios que no afectan el significado del código (espacios, formateo, etc.)
   - `refactor`: Cambios de código que no corrigen errores ni añaden funcionalidades
   - `test`: Añadir o corregir pruebas
   - `chore`: Cambios en el proceso de build o herramientas auxiliares

6. **Push a tu Fork**: Envía tus cambios a tu fork
   ```bash
   git push origin feature/nombre-descriptivo
   ```
7. **Crea un Pull Request**: Desde la página de tu fork en GitHub

## Convenciones de Código

Para mantener la coherencia en el código, por favor sigue estas convenciones:

### Estilo de Código

- Utiliza **2 espacios** para la indentación
- Utiliza **punto y coma** al final de cada declaración
- Sigue las reglas de ESLint configuradas en el proyecto
- Utiliza nombres descriptivos para variables y funciones

### TypeScript

- Proporciona tipos explícitos cuando no sean evidentes
- Evita el uso de `any`
- Utiliza interfaces para definir la forma de objetos
- Documenta las funciones y clases con comentarios JSDoc

### Componentes React

- Utiliza componentes funcionales y hooks
- Separa la lógica de la presentación cuando sea posible
- Nombra los archivos de componentes con PascalCase
- Utiliza el patrón de props destructuring

### CSS / Estilos

- Sigue el enfoque de Tailwind CSS para los estilos
- Utiliza clases semánticas y descriptivas
- Evita el uso de estilos inline salvo cuando sea estrictamente necesario

## Proceso de Revisión

Una vez que hayas creado un Pull Request, los mantenedores del proyecto lo revisarán:

1. Un mantenedor revisará tu código y proporcionará comentarios si es necesario
2. Es posible que se te pida realizar cambios antes de que tu contribución sea aceptada
3. Una vez aprobado, un mantenedor hará merge de tu Pull Request

## Desarrollo Local

Para configurar el entorno de desarrollo local, consulta nuestra [Guía de Configuración para Desarrollo](./development-setup.md).

---

¡Gracias por contribuir al proyecto Git Visualizer!