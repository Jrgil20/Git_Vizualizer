import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { GitBranchLabel } from '../shared/GitBranchLabel';
import { Tooltip } from '../../UI/Tooltip';

interface BranchVisualizerProps {
  step: number;
}

export const BranchVisualizer: React.FC<BranchVisualizerProps> = ({ step }) => {
  // Step 0: Initial state - main branch with commits
  // Step 1: Creating a new branch - git branch feature
  // Step 2: Switching to the new branch - git checkout feature
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Repository" type="repository" className="w-full max-w-lg">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
                
                <div className="mt-2">
                  <GitBranchLabel name="main" active />
                </div>
                
                <Tooltip content="Each commit represents a snapshot of your code at a point in time">
                  <div className="mt-4 text-xs text-slate-400">
                    Repository with linear commit history on main branch
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git branch feature" />
            
            <GitArea title="Repository" type="repository" className="w-full max-w-lg mt-4">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
                
                <div className="mt-2 flex gap-2">
                  <GitBranchLabel name="main" active />
                  <GitBranchLabel name="feature" className="animate-pulse" />
                </div>
                
                <Tooltip content="A branch is just a pointer to a specific commit">
                  <div className="mt-4 text-xs text-slate-400">
                    New feature branch created, pointing to the same commit as main
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git checkout feature" />
            
            <GitArea title="Repository" type="repository" className="w-full max-w-lg mt-4">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
                
                <div className="mt-2 flex gap-2">
                  <GitBranchLabel name="main" />
                  <GitBranchLabel name="feature" active />
                </div>
                
                <Tooltip content="HEAD is now pointing to the feature branch">
                  <div className="mt-4 text-xs text-slate-400">
                    Now on feature branch, ready to make changes
                  </div>
                </Tooltip>
                
                <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                  <div className="text-sm mb-2 text-slate-300">Pro Tip:</div>
                  <div className="text-xs text-slate-400">
                    You can also use <code className="bg-slate-800 px-1 rounded">git checkout -b feature</code> to create and switch to a branch in one command.
                  </div>
                </div>
              </div>
            </GitArea>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="w-full">
      {renderStep()}
    </div>
  );
};