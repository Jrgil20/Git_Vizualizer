export default {
  header: {
    title: 'Git Command Visualizer',
    subtitle: 'Interactive visualizations to help you understand Git workflows',
    tutorial: 'Start Tutorial',
    visualizer: 'View Visualizer',
    docs: 'Git Docs'
  },
  footer: {
    description: 'Git Command Visualizer – A visual guide to understand Git workflows',
    credits: 'Made with ❤️ by Jesus Gil | Assisted by AI (Bolt)'
  },
  commands: {
    add: {
      label: 'git add',
      description: 'Stage changes for commit'
    },
    commit: {
      label: 'git commit',
      description: 'Save staged changes to history'
    },
    branch: {
      label: 'git branch',
      description: 'Create and switch branches'
    },
    merge: {
      label: 'git merge',
      description: 'Combine branch histories'
    },
    push: {
      label: 'git push',
      description: 'Upload local to remote'
    },
    pull: {
      label: 'git pull',
      description: 'Download remote to local'
    },
    conflict: {
      label: 'Conflict Resolution',
      description: 'Resolve merge conflicts'
    }
  },
  tutorial: {
    title: 'Interactive Git Tutorial',
    next: 'Next',
    previous: 'Previous',
    step: 'Step {{current}} of {{total}}',
    resolveConflict: 'Resolve Conflict',
    outputs: {
      init: 'Initialized empty Git repository in .git/',
      createBranch: 'Created branch develop',
      createFile: 'Created {{file}}',
      stageFile: 'Added {{file}} to staging area',
      commit: 'Changes committed successfully',
      checkout: 'Switched to branch {{branch}}',
      mergeConflict: 'CONFLICT (content): Merge conflict in styles.css\nAutomatic merge failed; fix conflicts and then commit the result.',
      resolveConflict: 'Conflict resolved in styles.css',
      mergeComplete: 'Merge completed successfully',
      push: 'Changes pushed to remote repository'
    }
  },
  areas: {
    working: 'Working Directory',
    staging: 'Staging Area',
    local: 'Local Repository',
    remote: 'Remote Repository'
  },
  tooltips: {
    staged: 'Files in staging are ready to be committed',
    working: 'Modified files remain in working directory but are also copied to staging area',
    repository: 'The repository contains your commit history',
    branch: 'A branch is just a pointer to a specific commit',
    merge: 'A merge commit combines changes from both branches',
    remote: 'Remote repository is now synchronized with your local repository'
  }
};