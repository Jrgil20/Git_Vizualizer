import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitFile } from '../shared/GitFile';
import { GitCommand } from '../shared/GitCommand';
import { Tooltip } from '../../UI/Tooltip';

interface AddVisualizerProps {
  step: number;
}

export const AddVisualizer: React.FC<AddVisualizerProps> = ({ step }) => {
  // Define files for the visualization
  const files = [
    { id: 'file1', name: 'index.html', status: 'modified' },
    { id: 'file2', name: 'style.css', status: 'modified' },
    { id: 'file3', name: 'app.js', status: 'untracked' }
  ];
  
  // Step 0: Initial state - files in working directory
  // Step 1: Running git add - files moving to staging
  // Step 2: Final state - files in staging area
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Working Directory" type="working">
              {files.map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status={file.status}
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
            
            <GitArea title="Staging Area" type="staging">
              <div className="text-slate-500 italic text-center">No files staged</div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Working Directory" type="working">
              {files.map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status={file.status}
                  className={`transition-all duration-700 ${file.id !== 'file3' ? 'opacity-50 translate-x-16' : ''}`}
                />
              ))}
            </GitArea>
            
            <div className="md:block">
              <GitCommand command="git add index.html style.css" />
              
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
            
            <GitArea title="Staging Area" type="staging">
              <div className="text-slate-500 italic text-center mb-4">Moving files to staging...</div>
              {files.slice(0, 2).map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status="staged"
                  className="opacity-50 transition-all duration-700"
                />
              ))}
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col md:flex-row w-full justify-around items-center gap-8">
            <GitArea title="Working Directory" type="working">
              <GitFile 
                name="app.js" 
                status="untracked"
              />
              <Tooltip content="Modified files remain in working directory but are also copied to staging area">
                <div className="mt-4 text-xs text-slate-400">
                  Modified files are still in the working directory
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
            
            <GitArea title="Staging Area" type="staging">
              {files.slice(0, 2).map(file => (
                <GitFile 
                  key={file.id}
                  name={file.name} 
                  status="staged"
                />
              ))}
              <Tooltip content="Staged files are ready to be committed">
                <div className="mt-4 text-xs text-slate-400">
                  Files in staging are ready to be committed
                </div>
              </Tooltip>
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