import React from 'react';
import { GitBranch } from 'lucide-react';

interface GitBranchLabelProps {
  name: string;
  active?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'default';
  className?: string;
}

export const GitBranchLabel: React.FC<GitBranchLabelProps> = ({
  name,
  active = false,
  color = 'default',
  className = ''
}) => {
  // Define color schemes based on branch
  const getBranchColor = () => {
    switch (color) {
      case 'blue': return active 
        ? 'bg-blue-600 text-white border-blue-800' 
        : 'bg-blue-500 bg-opacity-20 text-blue-400 border-blue-700 border-opacity-30';
      case 'green': return active 
        ? 'bg-green-600 text-white border-green-800' 
        : 'bg-green-500 bg-opacity-20 text-green-400 border-green-700 border-opacity-30';
      case 'purple': return active 
        ? 'bg-purple-600 text-white border-purple-800' 
        : 'bg-purple-500 bg-opacity-20 text-purple-400 border-purple-700 border-opacity-30';
      default: return active 
        ? 'bg-slate-600 text-white border-slate-800' 
        : 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };
  
  return (
    <div className={`
      inline-flex 
      items-center 
      px-3 
      py-1 
      rounded 
      text-sm 
      font-medium 
      border
      ${getBranchColor()}
      ${className}
    `}>
      <GitBranch size={14} className="mr-1" />
      {name}
    </div>
  );
};