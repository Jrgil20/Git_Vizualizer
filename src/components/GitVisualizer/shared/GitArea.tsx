import React, { ReactNode } from 'react';

type AreaType = 'working' | 'staging' | 'repository' | 'editor';

interface GitAreaProps {
  title: string;
  type: AreaType;
  children: ReactNode;
  className?: string;
}

export const GitArea: React.FC<GitAreaProps> = ({ 
  title, 
  type, 
  children,
  className = ''
}) => {
  // Define styles based on area type
  const getBackgroundColor = () => {
    switch (type) {
      case 'working': return 'bg-slate-800';
      case 'staging': return 'bg-slate-800';
      case 'repository': return 'bg-slate-800';
      case 'editor': return 'bg-slate-800';
      default: return 'bg-slate-800';
    }
  };
  
  const getBorderColor = () => {
    switch (type) {
      case 'working': return 'border-blue-700';
      case 'staging': return 'border-green-700';
      case 'repository': return 'border-purple-700';
      case 'editor': return 'border-amber-700';
      default: return 'border-slate-700';
    }
  };
  
  const getTitleColor = () => {
    switch (type) {
      case 'working': return 'bg-blue-900 text-blue-100';
      case 'staging': return 'bg-green-900 text-green-100';
      case 'repository': return 'bg-purple-900 text-purple-100';
      case 'editor': return 'bg-amber-900 text-amber-100';
      default: return 'bg-slate-700 text-slate-100';
    }
  };
  
  return (
    <div className={`rounded-lg shadow-md border ${getBorderColor()} ${getBackgroundColor()} ${className}`}>
      <div className={`rounded-t-lg ${getTitleColor()} py-2 px-4 font-medium`}>
        {title}
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};