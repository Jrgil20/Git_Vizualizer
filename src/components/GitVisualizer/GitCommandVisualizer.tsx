import React from 'react';
import { CommandType } from '../../types/gitCommands';
import { AddVisualizer } from './Visualizers/AddVisualizer';
import { CommitVisualizer } from './Visualizers/CommitVisualizer';
import { BranchVisualizer } from './Visualizers/BranchVisualizer';
import { MergeVisualizer } from './Visualizers/MergeVisualizer';
import { PushVisualizer } from './Visualizers/PushVisualizer';
import { PullVisualizer } from './Visualizers/PullVisualizer';
import { ConflictVisualizer } from './Visualizers/ConflictVisualizer';

interface GitCommandVisualizerProps {
  command: CommandType;
  step: number;
}

export const GitCommandVisualizer: React.FC<GitCommandVisualizerProps> = ({ command, step }) => {
  // Render the appropriate visualizer based on the selected command
  const renderVisualizer = () => {
    switch (command) {
      case 'add':
        return <AddVisualizer step={step} />;
      case 'commit':
        return <CommitVisualizer step={step} />;
      case 'branch':
        return <BranchVisualizer step={step} />;
      case 'merge':
        return <MergeVisualizer step={step} />;
      case 'push':
        return <PushVisualizer step={step} />;
      case 'pull':
        return <PullVisualizer step={step} />;
      case 'conflict':
        return <ConflictVisualizer step={step} />;
      default:
        return <div>Select a Git command to visualize</div>;
    }
  };

  return (
    <div className="relative bg-slate-850 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
      {renderVisualizer()}
    </div>
  );
};