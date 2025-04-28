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
    add: {
      label: 'git add',
      description: 'Preparar cambios para commit'
    },
    commit: {
      label: 'git commit',
      description: 'Guardar cambios en el historial'
    },
    branch: {
      label: 'git branch',
      description: 'Crear y cambiar ramas'
    },
    merge: {
      label: 'git merge',
      description: 'Combinar historiales de ramas'
    },
    push: {
      label: 'git push',
      description: 'Subir local al remoto'
    },
    pull: {
      label: 'git pull',
      description: 'Descargar remoto al local'
    },
    conflict: {
      label: 'Resolución de Conflictos',
      description: 'Resolver conflictos de fusión'
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
      createBranch: 'Rama develop creada',
      createFile: 'Archivo {{file}} creado',
      stageFile: 'Archivo {{file}} añadido al área de preparación',
      commit: 'Cambios guardados exitosamente',
      checkout: 'Cambiado a la rama {{branch}}',
      mergeConflict: 'CONFLICTO (contenido): Conflicto de fusión en styles.css\nLa fusión automática falló; arregla los conflictos y luego realiza el commit.',
      resolveConflict: 'Conflicto resuelto en styles.css',
      mergeComplete: 'Fusión completada exitosamente',
      push: 'Cambios subidos al repositorio remoto'
    }
  },
  areas: {
    working: 'Directorio de Trabajo',
    staging: 'Área de Preparación',
    local: 'Repositorio Local',
    remote: 'Repositorio Remoto'
  },
  tooltips: {
    staged: 'Los archivos en el área de preparación están listos para commit',
    working: 'Los archivos modificados permanecen en el directorio de trabajo pero también se copian al área de preparación',
    repository: 'El repositorio contiene tu historial de commits',
    branch: 'Una rama es solo un puntero a un commit específico',
    merge: 'Un commit de fusión combina cambios de ambas ramas',
    remote: 'El repositorio remoto está ahora sincronizado con tu repositorio local'
  }
};