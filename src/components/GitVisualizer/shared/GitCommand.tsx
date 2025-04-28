import React from 'react';
import { Terminal } from 'lucide-react';

interface GitCommandProps {
  command: string;
}

export const GitCommand: React.FC<GitCommandProps> = ({ command }) => {
  return (
    <div className="bg-slate-950 text-white p-3 rounded font-mono text-sm flex items-center mb-2">
      <Terminal size={16} className="mr-2 text-green-500" />
      <div>
        <span className="text-green-500">$</span> {command}
      </div>
    </div>
  );
};