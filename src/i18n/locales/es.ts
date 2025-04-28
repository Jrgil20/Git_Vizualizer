export default {
  header: {
    title: 'Visualizador de Comandos Git',
    subtitle: 'Visualizaciones interactivas para ayudarte a entender los flujos de trabajo de Git',
    tutorial: 'Iniciar Tutorial',
    visualizer: 'Ver Visualizador',
    docs: 'Documentación Git'
  },
  footer: {
    description: 'Visualizador de Comandos Git – Una guía visual para entender los flujos de trabajo de Git',
    credits: 'Hecho con ❤️ por Jesus Gil | Asistido por IA (Bolt)'
  },
  commands: {
    title: 'Comandos Git',
    add: {
      label: 'git add',
      description: 'Preparar cambios para confirmación'
    },
    commit: {
      label: 'git commit',
      description: 'Guardar cambios en el historial'
    },
    branch: {
      label: 'git branch',
      description: 'Crear y gestionar ramas'
    },
    merge: {
      label: 'git merge',
      description: 'Fusionar ramas'
    },
    push: {
      label: 'git push',
      description: 'Enviar cambios al repositorio remoto'
    },
    pull: {
      label: 'git pull',
      description: 'Obtener cambios del repositorio remoto'
    },
    conflict: {
      label: 'Resolución de Conflictos',
      description: 'Resolver conflictos de fusión'
    }
  },
  // Descripciones de los pasos para cada comando
  add: {
    steps: {
      0: 'Archivos con cambios en el directorio de trabajo',
      1: 'Ejecutando git add para preparar cambios',
      2: 'Archivos movidos al área de preparación'
    }
  },
  commit: {
    steps: {
      0: 'Archivos en el área de preparación listos para confirmar',
      1: 'Ejecutando git commit para crear una instantánea',
      2: 'Nueva confirmación creada en el repositorio',
      3: 'Área de preparación vacía'
    }
  },
  branch: {
    steps: {
      0: 'Rama actual con confirmaciones',
      1: 'Creando una nueva rama con git branch',
      2: 'Cambiando a la nueva rama con git checkout'
    }
  },
  merge: {
    steps: {
      0: 'Rama feature con confirmaciones únicas',
      1: 'Rama main con sus propias confirmaciones',
      2: 'Cambiando a la rama main',
      3: 'Ejecutando git merge para combinar cambios',
      4: 'Fusión exitosa con historial combinado'
    }
  },
  push: {
    steps: {
      0: 'Repositorio local con confirmaciones',
      1: 'Repositorio remoto antes de enviar cambios',
      2: 'Ejecutando git push para subir confirmaciones',
      3: 'Repositorio remoto actualizado con confirmaciones locales'
    }
  },
  pull: {
    steps: {
      0: 'Repositorios local y remoto',
      1: 'El remoto tiene nuevas confirmaciones que no están en local',
      2: 'Ejecutando git pull para descargar cambios',
      3: 'Repositorio local actualizado con confirmaciones remotas'
    }
  },
  conflict: {
    steps: {
      0: 'Dos ramas con cambios conflictivos',
      1: 'Intentando fusionar ramas',
      2: 'Conflicto detectado en archivos',
      3: 'Editando archivos para resolver conflictos',
      4: 'Marcando conflictos como resueltos con git add',
      5: 'Completando la fusión con git commit'
    }
  },
  tutorial: {
    title: 'Tutorial Interactivo de Git',
    next: 'Siguiente',
    previous: 'Anterior',
    step: 'Paso {{current}} de {{total}}',
    resolveConflict: 'Resolver Conflicto',
    outputs: {
      init: 'Repositorio Git inicializado en .git/',
      createBranch: 'Rama "develop" creada',
      createFile: 'Archivo {{file}} creado',
      stageFile: 'Archivo {{file}} añadido al área de preparación',
      commit: 'Cambios confirmados exitosamente',
      checkout: 'Cambiado a la rama "{{branch}}"',
      mergeConflict: 'CONFLICTO (contenido): Conflicto de fusión en styles.css\nLa fusión automática falló; resuelve los conflictos y luego realiza la confirmación.',
      resolveConflict: 'Conflicto resuelto en styles.css',
      mergeComplete: 'Fusión completada exitosamente',
      push: 'Cambios enviados al repositorio remoto'
    }
  },
  areas: {
    working: 'Directorio de Trabajo',
    staging: 'Área de Preparación',
    local: 'Repositorio Local',
    remote: 'Repositorio Remoto'
  },
  tooltips: {
    staged: 'Los archivos en el área de preparación están listos para ser confirmados',
    working: 'Los archivos modificados permanecen en el directorio de trabajo pero también se copian al área de preparación',
    repository: 'El repositorio contiene tu historial de confirmaciones',
    branch: 'Una rama es simplemente un apuntador a una confirmación específica',
    merge: 'Una confirmación de fusión combina cambios de ambas ramas',
    remote: 'El repositorio remoto ahora está sincronizado con tu repositorio local'
  }
};