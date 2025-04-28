import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitFile } from '../shared/GitFile';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { Tooltip } from '../../UI/Tooltip';

interface CommitVisualizerProps {
  step: number;
}

export const CommitVisualizer: React.FC<CommitVisualizerProps> = ({ step }) => {
  // Define files for the visualization
  const files = [
    { id: 'file1', name: 'index.html', status: 'staged' },
    { id: 'file2', name: 'style.css', status: 'staged' }
  ];
  
  // Step 0: Initial state - files in staging area
  // Step 1: Running git commit
  // Step 2: New commit created
  // Step 3: Staging area cleared
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Staging Area" type="staging">
              {files.map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status="staged"
                />
              ))}
            </GitArea>
            
            <div className="hidden md:block">
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
            
            <GitArea title="Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <Tooltip content="The repository contains your commit history">
                  <div className="mt-4 text-xs text-slate-400">
                    Current repository state
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Staging Area" type="staging">
              {files.map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status="staged"
                  className="transition-all duration-700 opacity-50 translate-x-16"
                />
              ))}
            </GitArea>
            
            <div className="md:block">
              <GitCommand command='git commit -m "Add styling"' />
              
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
            
            <GitArea title="Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode 
                  id="c2" 
                  message="Add styling" 
                  className="opacity-50 scale-90 transition-all duration-700"
                />
              </div>
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Staging Area" type="staging">
              {files.map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status="staged"
                  className="transition-all duration-700 opacity-30 blur-sm"
                />
              ))}
            </GitArea>
            
            <div className="hidden md:block">
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
            
            <GitArea title="Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode 
                  id="c2" 
                  message="Add styling" 
                  isLatest
                />
                
                <Tooltip content="New commit is now part of your repository history">
                  <div className="mt-4 text-xs text-slate-400">
                    New commit created and added to history
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Staging Area" type="staging">
              <div className="text-slate-500 italic text-center">Staging area cleared</div>
              
              <Tooltip content="After commit, staging area is emptied">
                <div className="mt-4 text-xs text-slate-400">
                  The staging area is now empty and ready for new changes
                </div>
              </Tooltip>
            </GitArea>
            
            <div className="hidden md:block">
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
            
            <GitArea title="Repository" type="repository">
              <div className="flex flex-col items-center">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <GitCommitNode 
                  id="c2" 
                  message="Add styling" 
                  isLatest
                />
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