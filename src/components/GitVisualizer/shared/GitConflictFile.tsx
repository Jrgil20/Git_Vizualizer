import React from 'react';
import { FileWarning } from 'lucide-react';

interface GitConflictFileProps {
  name: string;
  status: 'conflict';
  className?: string;
}

export const GitConflictFile: React.FC<GitConflictFileProps> = ({
  name,
  status,
  className = ''
}) => {
  return (
    <div className={`flex items-center p-2 rounded bg-red-900 bg-opacity-20 mb-2 ${className}`}>
      <div className="mr-2">
        <FileWarning size={18} className="text-red-500" />
      </div>
      <div className="flex-1 font-mono text-sm">{name}</div>
      <div className="text-xs font-medium text-red-500 bg-red-900 bg-opacity-30 px-2 py-1 rounded">
        {status}
      </div>
    </div>
  );
};