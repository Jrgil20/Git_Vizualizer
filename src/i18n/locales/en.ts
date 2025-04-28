export default {
  header: {
    title: 'Git Command Visualizer',
    subtitle: 'Interactive visualizations to help you understand Git workflows',
    tutorial: 'Start Tutorial',
    visualizer: 'View Visualizer',
    docs: 'Git Documentation'
  },
  footer: {
    description: 'Git Command Visualizer – A visual guide to understanding Git workflows',
    credits: 'Made with ❤️ by Jesus Gil | AI Assisted (Bolt)'
  },
  commands: {
    title: 'Git Commands',
    add: {
      label: 'git add',
      description: 'Stage changes for commit'
    },
    commit: {
      label: 'git commit',
      description: 'Save changes to history'
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
  // Step descriptions for each command
  add: {
    steps: {
      0: 'Files in working directory with changes',
      1: 'Running git add to stage changes',
      2: 'Files moved to staging area'
    }
  },
  commit: {
    steps: {
      0: 'Files in staging area ready to commit',
      1: 'Running git commit to create a snapshot',
      2: 'New commit created in repository',
      3: 'Staging area is cleared'
    }
  },
  branch: {
    steps: {
      0: 'Current branch with commits',
      1: 'Creating a new branch with git branch',
      2: 'Switching to the new branch with git checkout'
    }
  },
  merge: {
    steps: {
      0: 'Feature branch with unique commits',
      1: 'Main branch with its own commits',
      2: 'Checking out main branch',
      3: 'Running git merge to combine changes',
      4: 'Successful merge with combined history'
    }
  },
  push: {
    steps: {
      0: 'Local repository with commits',
      1: 'Remote repository before push',
      2: 'Running git push to upload commits',
      3: 'Remote repository updated with local commits'
    }
  },
  pull: {
    steps: {
      0: 'Local and remote repositories',
      1: 'Remote has new commits not in local',
      2: 'Running git pull to download changes',
      3: 'Local repository updated with remote commits'
    }
  },
  conflict: {
    steps: {
      0: 'Two branches with conflicting changes',
      1: 'Attempting to merge branches',
      2: 'Conflict detected in files',
      3: 'Editing files to resolve conflicts',
      4: 'Marking conflicts as resolved with git add',
      5: 'Completing the merge with git commit'
    }
  },
  tutorial: {
    title: 'Git Interactive Tutorial',
    next: 'Next',
    previous: 'Previous',
    step: 'Step {{current}} of {{total}}',
    resolveConflict: 'Resolve Conflict',
    outputs: {
      init: 'Initialized empty Git repository in .git/',
      createBranch: 'Created develop branch',
      createFile: 'Created file {{file}}',
      stageFile: 'Added file {{file}} to staging area',
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
    staged: 'Files in the staging area are ready to be committed',
    working: 'Modified files remain in the working directory but are also copied to the staging area',
    repository: 'The repository holds your commit history',
    branch: 'A branch is just a pointer to a specific commit',
    merge: 'A merge commit combines changes from both branches',
    remote: 'The remote repository is now in sync with your local repository'
  }
};