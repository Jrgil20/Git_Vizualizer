import React from 'react';
import { GitBranch, GitCommit, GitCompare, GitMerge, GitPullRequest, UploadCloud, DownloadCloud } from 'lucide-react';
import { CommandType } from '../../types/gitCommands';

interface CommandOption {
  id: CommandType;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface GitCommandSelectorProps {
  selectedCommand: CommandType;
  onSelectCommand: (command: CommandType) => void;
}

export const GitCommandSelector: React.FC<GitCommandSelectorProps> = ({
  selectedCommand,
  onSelectCommand
}) => {
  const commands: CommandOption[] = [
    {
      id: 'add',
      label: 'git add',
      icon: <GitCommit size={20} />,
      description: 'Stage changes for commit'
    },
    {
      id: 'commit',
      label: 'git commit',
      icon: <GitCommit size={20} />,
      description: 'Save staged changes to history'
    },
    {
      id: 'branch',
      label: 'git branch',
      icon: <GitBranch size={20} />,
      description: 'Create and switch branches'
    },
    {
      id: 'merge',
      label: 'git merge',
      icon: <GitMerge size={20} />,
      description: 'Combine branch histories'
    },
    {
      id: 'push',
      label: 'git push',
      icon: <UploadCloud size={20} />,
      description: 'Upload local to remote'
    },
    {
      id: 'pull',
      label: 'git pull',
      icon: <DownloadCloud size={20} />,
      description: 'Download remote to local'
    },
    {
      id: 'conflict',
      label: 'Conflict Resolution',
      icon: <GitCompare size={20} />,
      description: 'Resolve merge conflicts'
    }
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Git Commands</h2>
      
      <div className="space-y-2">
        {commands.map((command) => (
          <button
            key={command.id}
            onClick={() => onSelectCommand(command.id)}
            className={`w-full text-left px-4 py-3 rounded-md flex items-center ${
              selectedCommand === command.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors'
            }`}
          >
            <div className="mr-3">
              {command.icon}
            </div>
            <div>
              <div className="font-mono font-bold">{command.label}</div>
              <div className="text-sm opacity-80">{command.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};