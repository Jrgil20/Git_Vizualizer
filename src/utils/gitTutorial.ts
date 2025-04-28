import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface GitStep {
  command: string;
  output: string;
  requiresInput?: boolean;
  resolved?: boolean;
  visualization?: {
    type: 'init' | 'branch' | 'add' | 'commit' | 'merge' | 'push';
    state: {
      workingDir?: string[];
      stagingArea?: string[];
      localRepo?: string[];
      remoteRepo?: string[];
      branches?: string[];
      currentBranch?: string;
    };
  };
}

export function useGitTutorial() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps] = useState<GitStep[]>([
    {
      command: 'git init',
      output: t('tutorial.outputs.init'),
      visualization: {
        type: 'init',
        state: {
          workingDir: [],
          stagingArea: [],
          localRepo: [],
          branches: ['main'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git branch develop',
      output: t('tutorial.outputs.createBranch'),
      visualization: {
        type: 'branch',
        state: {
          workingDir: [],
          stagingArea: [],
          localRepo: [],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'echo "<h1>Hello Git</h1>" > index.html',
      output: t('tutorial.outputs.createFile', { file: 'index.html' }),
      visualization: {
        type: 'add',
        state: {
          workingDir: ['index.html'],
          stagingArea: [],
          localRepo: [],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git add index.html',
      output: t('tutorial.outputs.stageFile', { file: 'index.html' }),
      visualization: {
        type: 'add',
        state: {
          workingDir: ['index.html'],
          stagingArea: ['index.html'],
          localRepo: [],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git commit -m "Initial commit"',
      output: t('tutorial.outputs.commit'),
      visualization: {
        type: 'commit',
        state: {
          workingDir: ['index.html'],
          stagingArea: [],
          localRepo: ['Initial commit'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git checkout develop',
      output: t('tutorial.outputs.checkout', { branch: 'develop' }),
      visualization: {
        type: 'branch',
        state: {
          workingDir: ['index.html'],
          stagingArea: [],
          localRepo: ['Initial commit'],
          branches: ['main', 'develop'],
          currentBranch: 'develop'
        }
      }
    },
    {
      command: 'echo "body { margin: 0; }" > styles.css',
      output: t('tutorial.outputs.createFile', { file: 'styles.css' }),
      visualization: {
        type: 'add',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: [],
          localRepo: ['Initial commit'],
          branches: ['main', 'develop'],
          currentBranch: 'develop'
        }
      }
    },
    {
      command: 'git add styles.css',
      output: t('tutorial.outputs.stageFile', { file: 'styles.css' }),
      visualization: {
        type: 'add',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: ['styles.css'],
          localRepo: ['Initial commit'],
          branches: ['main', 'develop'],
          currentBranch: 'develop'
        }
      }
    },
    {
      command: 'git commit -m "Add styles"',
      output: t('tutorial.outputs.commit'),
      visualization: {
        type: 'commit',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: [],
          localRepo: ['Initial commit', 'Add styles'],
          branches: ['main', 'develop'],
          currentBranch: 'develop'
        }
      }
    },
    {
      command: 'git checkout main',
      output: t('tutorial.outputs.checkout', { branch: 'main' }),
      visualization: {
        type: 'branch',
        state: {
          workingDir: ['index.html'],
          stagingArea: [],
          localRepo: ['Initial commit'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git merge develop',
      output: t('tutorial.outputs.mergeConflict'),
      requiresInput: true,
      visualization: {
        type: 'merge',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: [],
          localRepo: ['Initial commit', 'Add styles'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git add styles.css',
      output: t('tutorial.outputs.resolveConflict'),
      resolved: true,
      visualization: {
        type: 'merge',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: ['styles.css'],
          localRepo: ['Initial commit', 'Add styles'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git commit -m "Merge branch develop"',
      output: t('tutorial.outputs.mergeComplete'),
      visualization: {
        type: 'merge',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: [],
          localRepo: ['Initial commit', 'Add styles', 'Merge branch develop'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    },
    {
      command: 'git push origin main',
      output: t('tutorial.outputs.push'),
      visualization: {
        type: 'push',
        state: {
          workingDir: ['index.html', 'styles.css'],
          stagingArea: [],
          localRepo: ['Initial commit', 'Add styles', 'Merge branch develop'],
          remoteRepo: ['Initial commit', 'Add styles', 'Merge branch develop'],
          branches: ['main', 'develop'],
          currentBranch: 'main'
        }
      }
    }
  ]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resolveConflict = () => {
    if (steps[currentStep].requiresInput) {
      steps[currentStep].resolved = true;
      nextStep();
    }
  };

  return {
    currentStep,
    steps,
    nextStep,
    prevStep,
    resolveConflict,
  };
}