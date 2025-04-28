import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { Tooltip } from '../../UI/Tooltip';

interface PullVisualizerProps {
  step: number;
}

export const PullVisualizer: React.FC<PullVisualizerProps> = ({ step }) => {
  // Step 0: Local and remote repositories
  // Step 1: Remote has new commits not in local
  // Step 2: Running git pull
  // Step 3: Local repository updated
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-start gap-8">
            <GitArea title="Local Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isLatest />
                
                <Tooltip content="Your local repository state">
                  <div className="mt-4 text-xs text-slate-400">
                    Your current local repository
                  </div>
                </Tooltip>
              </div>
            </GitArea>
            
            <div className="hidden md:block self-center">
              <svg width="80" height="40">
                <path 
                  d="M0,20 L80,20" 
                  stroke="#64748b" 
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </svg>
            </div>
            
            <GitArea title="Remote Repository (Origin)" type="repository" className="bg-slate-750">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isRemote />
                
                <Tooltip content="Remote repository matches your local">
                  <div className="mt-4 text-xs text-slate-400">
                    Remote repository is currently in sync with local
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-start gap-8">
            <GitArea title="Local Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isLatest />
              </div>
            </GitArea>
            
            <div className="hidden md:block self-center">
              <svg width="80" height="40">
                <path 
                  d="M0,20 L80,20" 
                  stroke="#64748b" 
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                />
              </svg>
            </div>
            
            <GitArea title="Remote Repository (Origin)" type="repository" className="bg-slate-750">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Fix button styles" isRemote className="pulse-fade" isLatest />
                
                <Tooltip content="Remote has a new commit you don't have locally">
                  <div className="mt-4 text-xs text-slate-400">
                    Remote repository has new commits not in your local repository
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-start gap-8">
            <GitArea title="Local Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600 opacity-50"></div>
                
                <GitCommitNode 
                  id="c3" 
                  message="Fix button styles" 
                  className="opacity-50 scale-90 transition-all duration-700" 
                />
              </div>
            </GitArea>
            
            <div className="md:block self-center">
              <GitCommand command="git pull origin main" />
              
              <svg width="80" height="40">
                <path 
                  d="M80,20 L0,20" 
                  stroke="#3b82f6" 
                  strokeWidth="2"
                  markerEnd="url(#arrowhead)"
                  fill="none"
                />
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="0"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="10 0, 0 3.5, 10 7" fill="#3b82f6" />
                  </marker>
                </defs>
              </svg>
            </div>
            
            <GitArea title="Remote Repository (Origin)" type="repository" className="bg-slate-750">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Fix button styles" isRemote className="animate-pulse" isLatest />
              </div>
            </GitArea>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-start gap-8">
            <GitArea title="Local Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Fix button styles" isLatest />
                
                <Tooltip content="Local repository is now updated with remote changes">
                  <div className="mt-4 text-xs text-slate-400">
                    Local repository has been updated with commits from remote
                  </div>
                </Tooltip>
              </div>
            </GitArea>
            
            <div className="hidden md:block self-center">
              <svg width="80" height="40">
                <path 
                  d="M0,20 L80,20" 
                  stroke="#10b981" 
                  strokeWidth="2"
                  strokeDasharray="2,2"
                  fill="none"
                />
                <circle cx="40" cy="20" r="4" fill="#10b981" />
              </svg>
            </div>
            
            <GitArea title="Remote Repository (Origin)" type="repository" className="bg-slate-750">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Fix button styles" isRemote isLatest />
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