import React from 'react';
import { useTranslation } from 'react-i18next';
import { GitBranch, GitCommit, GitCompare, GitMerge, GitPullRequest, UploadCloud, DownloadCloud } from 'lucide-react';
import { CommandType } from '../../types/gitCommands';

interface CommandOption {
  id: CommandType;
  icon: React.ReactNode;
}

interface GitCommandSelectorProps {
  selectedCommand: CommandType;
  onSelectCommand: (command: CommandType) => void;
}

export const GitCommandSelector: React.FC<GitCommandSelectorProps> = ({
  selectedCommand,
  onSelectCommand
}) => {
  const { t } = useTranslation();
  
  const commands: CommandOption[] = [
    {
      id: 'add',
      icon: <GitCommit size={20} />
    },
    {
      id: 'commit',
      icon: <GitCommit size={20} />
    },
    {
      id: 'branch',
      icon: <GitBranch size={20} />
    },
    {
      id: 'merge',
      icon: <GitMerge size={20} />
    },
    {
      id: 'push',
      icon: <UploadCloud size={20} />
    },
    {
      id: 'pull',
      icon: <DownloadCloud size={20} />
    },
    {
      id: 'conflict',
      icon: <GitCompare size={20} />
    }
  ];

  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">{t('commands.title', 'Git Commands')}</h2>
      
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
              <div className="font-mono font-bold">{t(`commands.${command.id}.label`)}</div>
              <div className="text-sm opacity-80">{t(`commands.${command.id}.description`)}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};