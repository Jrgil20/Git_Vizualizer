import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { Tooltip } from '../../UI/Tooltip';

interface PushVisualizerProps {
  step: number;
}

export const PushVisualizer: React.FC<PushVisualizerProps> = ({ step }) => {
  // Step 0: Local repository with commits
  // Step 1: Remote repository before push
  // Step 2: Running git push
  // Step 3: Remote repository updated
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-start gap-8">
            <GitArea title="Local Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
                
                <Tooltip content="These are your local commits">
                  <div className="mt-4 text-xs text-slate-400">
                    Your local repository with commits
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
                
                <GitCommitNode id="c2" message="Add styling" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
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
                
                <GitCommitNode id="c2" message="Add styling" isRemote isLatest />
                
                <Tooltip content="Remote is missing your latest commit">
                  <div className="mt-4 text-xs text-slate-400">
                    Remote repository is missing your latest commit
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
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c3" message="Implement login" isLatest className="animate-pulse" />
              </div>
            </GitArea>
            
            <div className="md:block self-center">
              <GitCommand command="git push origin main" />
              
              <svg width="80" height="40">
                <path 
                  d="M0,20 L80,20" 
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
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                  </marker>
                </defs>
              </svg>
            </div>
            
            <GitArea title="Remote Repository (Origin)" type="repository" className="bg-slate-750">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode id="c2" message="Add styling" isRemote />
                
                <div className="h-8 border-l-2 border-slate-600 opacity-50"></div>
                
                <GitCommitNode 
                  id="c3" 
                  message="Implement login" 
                  isRemote 
                  className="opacity-50 scale-90 transition-all duration-700" 
                />
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
                
                <GitCommitNode id="c3" message="Implement login" isLatest />
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
                
                <GitCommitNode id="c3" message="Implement login" isRemote isLatest />
                
                <Tooltip content="Local and remote repositories are now in sync">
                  <div className="mt-4 text-xs text-slate-400">
                    Remote repository is now synchronized with your local repository
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