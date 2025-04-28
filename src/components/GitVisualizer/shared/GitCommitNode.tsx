import React from 'react';
import { GitCommit } from 'lucide-react';

interface GitCommitNodeProps {
  id: string;
  message: string;
  isLatest?: boolean;
  isRemote?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'default';
  className?: string;
}

export const GitCommitNode: React.FC<GitCommitNodeProps> = ({
  id,
  message,
  isLatest = false,
  isRemote = false,
  color = 'default',
  className = ''
}) => {
  // Define color schemes based on branch
  const getCommitColor = () => {
    switch (color) {
      case 'blue': return 'bg-blue-500 border-blue-700 text-white';
      case 'green': return 'bg-green-500 border-green-700 text-white';
      case 'purple': return 'bg-purple-500 border-purple-700 text-white';
      default: return 'bg-gray-700 border-gray-800 text-white';
    }
  };
  
  // Add a glow effect for the latest commit
  const getLatestEffect = () => {
    if (!isLatest) return '';
    
    switch (color) {
      case 'blue': return 'ring-2 ring-blue-400 ring-opacity-50';
      case 'green': return 'ring-2 ring-green-400 ring-opacity-50';
      case 'purple': return 'ring-2 ring-purple-400 ring-opacity-50';
      default: return 'ring-2 ring-gray-400 ring-opacity-50';
    }
  };
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`
        relative 
        rounded-full 
        h-10 
        w-10 
        ${getCommitColor()}
        border-2
        flex 
        items-center 
        justify-center
        ${getLatestEffect()}
        ${isRemote ? 'opacity-80' : ''}
      `}>
        <GitCommit size={20} />
        {isLatest && (
          <div className="absolute -top-1 -right-1 rounded-full bg-yellow-500 h-3 w-3 border border-yellow-600"></div>
        )}
      </div>
      
      <div className="ml-3 bg-slate-700 px-3 py-1 rounded text-sm max-w-[150px] truncate">
        <div className="text-slate-400 text-xs font-mono">{id}</div>
        <div className="text-white font-medium">{message}</div>
      </div>
    </div>
  );
};