import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { GitBranchLabel } from '../shared/GitBranchLabel';
import { Tooltip } from '../../UI/Tooltip';

interface MergeVisualizerProps {
  step: number;
}

export const MergeVisualizer: React.FC<MergeVisualizerProps> = ({ step }) => {
  // Step 0: Feature branch with commits
  // Step 1: Main branch with its own commits
  // Step 2: Checking out main branch
  // Step 3: Running git merge
  // Step 4: Successful merge with combined history
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Repository - Feature Branch" type="repository" className="w-full max-w-xl">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full justify-center">
                  <div className="border-l-2 border-green-500 h-8"></div>
                </div>
                
                <GitCommitNode id="c4" message="Add user profile" color="green" isLatest />
                
                <div className="mt-2">
                  <GitBranchLabel name="feature" color="green" active />
                </div>
                
                <Tooltip content="Feature branch has new commits that aren't in main">
                  <div className="mt-4 text-xs text-slate-400">
                    Feature branch with unique commits (user profile)
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Repository - Main Branch" type="repository" className="w-full max-w-xl">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c5" message="Fix homepage bug" color="blue" isLatest />
                  </div>
                  <div className="flex-1 invisible">
                    <GitCommitNode id="c4" message="Add user profile" color="green" />
                  </div>
                </div>
                
                <div className="mt-2 flex w-full">
                  <div className="flex-1 flex justify-end mr-4">
                    <GitBranchLabel name="main" color="blue" active />
                  </div>
                  <div className="flex-1 flex justify-start ml-4">
                    <GitBranchLabel name="feature" color="green" />
                  </div>
                </div>
                
                <Tooltip content="Different branches can have different commits">
                  <div className="mt-4 text-xs text-slate-400">
                    Main branch has different commits (bug fix)
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git checkout main" />
            
            <GitArea title="Repository" type="repository" className="w-full max-w-xl mt-4">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c5" message="Fix homepage bug" color="blue" isLatest />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c4" message="Add user profile" color="green" />
                  </div>
                </div>
                
                <div className="mt-2 flex w-full">
                  <div className="flex-1 flex justify-end mr-4">
                    <GitBranchLabel name="main" color="blue" active />
                  </div>
                  <div className="flex-1 flex justify-start ml-4">
                    <GitBranchLabel name="feature" color="green" />
                  </div>
                </div>
                
                <Tooltip content="We need to be on the branch we want to merge into">
                  <div className="mt-4 text-xs text-slate-400">
                    Currently on main branch, ready to merge feature branch
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git merge feature" />
            
            <GitArea title="Repository" type="repository" className="w-full max-w-xl mt-4">
              <div className="flex flex-col items-center pb-4 relative">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c5" message="Fix homepage bug" color="blue" />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c4" message="Add user profile" color="green" />
                  </div>
                </div>
                
                <div className="w-full flex justify-center mt-4">
                  <div className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-ping"></div>
                  <div className="absolute w-32 h-32 bg-purple-500 rounded-full opacity-5"></div>
                  <div className="z-10 text-purple-300 font-bold">Merging...</div>
                </div>
                
                <div className="mt-8 flex w-full">
                  <div className="flex-1 flex justify-end mr-4">
                    <GitBranchLabel name="main" color="blue" active />
                  </div>
                  <div className="flex-1 flex justify-start ml-4">
                    <GitBranchLabel name="feature" color="green" />
                  </div>
                </div>
              </div>
            </GitArea>
          </div>
        );
        
      case 4:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Repository - Merged" type="repository" className="w-full max-w-xl">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c5" message="Fix homepage bug" color="blue" />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c4" message="Add user profile" color="green" />
                  </div>
                </div>
                
                <div className="w-full flex justify-center mt-2">
                  <div className="border-l-2 border-r-2 border-t-2 border-purple-500 w-32 h-8 rounded-t-lg"></div>
                </div>
                
                <GitCommitNode id="c6" message="Merge feature into main" color="purple" isLatest />
                
                <div className="mt-2">
                  <GitBranchLabel name="main" color="purple" active />
                  <GitBranchLabel name="feature" color="green" />
                </div>
                
                <Tooltip content="A merge commit combines changes from both branches">
                  <div className="mt-4 text-xs text-slate-400">
                    Merge complete! Main branch now contains all commits from feature branch
                  </div>
                </Tooltip>
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