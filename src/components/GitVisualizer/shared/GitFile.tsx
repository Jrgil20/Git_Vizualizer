import React from 'react';
import { FileIcon, FileCheck, FilePlus, FileWarning } from 'lucide-react';

type FileStatus = 'untracked' | 'modified' | 'staged' | 'unchanged' | 'conflict';

interface GitFileProps {
  name: string;
  status: FileStatus;
  className?: string;
}

export const GitFile: React.FC<GitFileProps> = ({
  name,
  status,
  className = ''
}) => {
  // Define styles and icons based on status
  const getIcon = () => {
    switch (status) {
      case 'untracked': return <FilePlus size={18} className="text-red-400" />;
      case 'modified': return <FileWarning size={18} className="text-yellow-400" />;
      case 'staged': return <FileCheck size={18} className="text-green-400" />;
      case 'unchanged': return <FileIcon size={18} className="text-slate-400" />;
      case 'conflict': return <FileWarning size={18} className="text-red-500" />;
      default: return <FileIcon size={18} className="text-slate-400" />;
    }
  };
  
  const getStatusColor = () => {
    switch (status) {
      case 'untracked': return 'text-red-400';
      case 'modified': return 'text-yellow-400';
      case 'staged': return 'text-green-400';
      case 'unchanged': return 'text-slate-400';
      case 'conflict': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };
  
  const getBackgroundColor = () => {
    switch (status) {
      case 'untracked': return 'bg-red-900 bg-opacity-15';
      case 'modified': return 'bg-yellow-900 bg-opacity-15';
      case 'staged': return 'bg-green-900 bg-opacity-15';
      case 'unchanged': return '';
      case 'conflict': return 'bg-red-900 bg-opacity-20';
      default: return '';
    }
  };
  
  return (
    <div className={`flex items-center p-2 rounded ${getBackgroundColor()} mb-2 ${className}`}>
      <div className="mr-2">
        {getIcon()}
      </div>
      <div className="flex-1 font-mono text-sm">{name}</div>
      <div className={`text-xs font-medium ${getStatusColor()}`}>
        {status}
      </div>
    </div>
  );
};