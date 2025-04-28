import React from 'react';
import { GitArea } from '../shared/GitArea';
import { GitCommand } from '../shared/GitCommand';
import { GitCommitNode } from '../shared/GitCommitNode';
import { GitBranchLabel } from '../shared/GitBranchLabel';
import { GitFile } from '../shared/GitFile';
import { GitConflictFile } from '../shared/GitConflictFile';
import { Tooltip } from '../../UI/Tooltip';

interface ConflictVisualizerProps {
  step: number;
}

export const ConflictVisualizer: React.FC<ConflictVisualizerProps> = ({ step }) => {
  // Step 0: Two branches with conflicting changes
  // Step 1: Attempting to merge branches
  // Step 2: Conflict detected
  // Step 3: Editing files to resolve
  // Step 4: Marking as resolved
  // Step 5: Completing the merge
  
  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Repository - Branches with Conflicting Changes" type="repository" className="w-full max-w-xl">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c2" message="Update header style (blue)" color="blue" isLatest />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c3" message="Change header color (green)" color="green" isLatest />
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
                
                <Tooltip content="Both branches modified the same file in the same location">
                  <div className="mt-4 text-xs text-slate-400">
                    Both branches have modified the same part of header.css
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 1:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git merge feature" />
            
            <GitArea title="Repository - Attempting Merge" type="repository" className="w-full max-w-xl mt-4">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c2" message="Update header style (blue)" color="blue" />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c3" message="Change header color (green)" color="green" />
                  </div>
                </div>
                
                <div className="w-full flex justify-center mt-4">
                  <div className="animate-spin h-8 w-8 border-t-2 border-b-2 border-yellow-400 rounded-full"></div>
                </div>
                
                <div className="mt-4 text-yellow-400 font-medium">
                  Attempting to merge feature into main...
                </div>
              </div>
            </GitArea>
          </div>
        );
        
      case 2:
        return (
          <div className="flex flex-col w-full items-center">
            <div className="text-red-500 font-mono text-sm p-3 rounded bg-red-900 bg-opacity-20 mb-4 w-full">
              CONFLICT (content): Merge conflict in header.css<br />
              Automatic merge failed; fix conflicts and then commit the result.
            </div>
            
            <GitArea title="Working Directory - Conflict Detected" type="working" className="w-full">
              <div className="flex flex-col items-center">
                <GitFile name="index.html" status="unchanged" />
                <GitFile name="app.js" status="unchanged" />
                <GitConflictFile 
                  name="header.css" 
                  status="conflict"
                  className="animate-pulse" 
                />
                
                <Tooltip content="Git marks conflicts in files using special syntax">
                  <div className="mt-4 text-xs text-slate-400">
                    Git has marked the conflict in header.css
                  </div>
                </Tooltip>
              </div>
            </GitArea>
          </div>
        );
        
      case 3:
        return (
          <div className="flex flex-col w-full items-center">
            <GitArea title="Resolving Conflicts" type="editor" className="w-full">
              <div className="bg-slate-900 rounded-md p-4 font-mono text-sm leading-relaxed w-full">
                <div className="text-slate-400">/* header.css */</div>
                <div className="text-slate-300">header {`{`}</div>
                <div className="pl-4 text-slate-300">padding: 20px;</div>
                <div className="pl-4 text-slate-300">font-family: Arial, sans-serif;</div>
                <div className="bg-red-500 bg-opacity-20 -mx-4 px-4">
                  <div className="text-red-400">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</div>
                  <div className="pl-4 text-blue-400">background-color: #3b82f6;</div>
                  <div className="pl-4 text-blue-400">border-bottom: 2px solid #1e40af;</div>
                  <div className="text-gray-500">=======</div>
                  <div className="pl-4 text-green-400">background-color: #10b981;</div>
                  <div className="pl-4 text-green-400">border-bottom: 3px solid #065f46;</div>
                  <div className="text-red-400">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature</div>
                </div>
                <div className="pl-4 text-slate-300">position: fixed;</div>
                <div className="pl-4 text-slate-300">width: 100%;</div>
                <div className="text-slate-300">{`}`}</div>
              </div>
              
              <div className="flex mt-6 justify-center">
                <div className="bg-slate-900 rounded-md p-4 font-mono text-sm leading-relaxed max-w-lg w-full">
                  <div className="text-slate-400">/* Resolving conflict by choosing and editing */</div>
                  <div className="text-slate-300">header {`{`}</div>
                  <div className="pl-4 text-slate-300">padding: 20px;</div>
                  <div className="pl-4 text-slate-300">font-family: Arial, sans-serif;</div>
                  <div className="bg-green-500 bg-opacity-10 -mx-4 px-4">
                    <div className="pl-4 text-purple-400">background-color: #a855f7;</div>
                    <div className="pl-4 text-purple-400">border-bottom: 2px solid #7e22ce;</div>
                  </div>
                  <div className="pl-4 text-slate-300">position: fixed;</div>
                  <div className="pl-4 text-slate-300">width: 100%;</div>
                  <div className="text-slate-300">{`}`}</div>
                </div>
              </div>
              
              <Tooltip content="Manually edit the file to resolve the conflict">
                <div className="mt-4 text-xs text-slate-400 text-center">
                  Edit the file to resolve conflicts by removing the marker lines and choosing or combining changes
                </div>
              </Tooltip>
            </GitArea>
          </div>
        );
        
      case 4:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command="git add header.css" />
            
            <GitArea title="Working Directory - Conflict Resolved" type="working" className="w-full mt-4">
              <div className="flex flex-col items-center">
                <GitFile name="index.html" status="unchanged" />
                <GitFile name="app.js" status="unchanged" />
                <GitFile 
                  name="header.css" 
                  status="staged"
                />
                
                <Tooltip content="Git add marks the file as resolved">
                  <div className="mt-4 text-xs text-slate-400">
                    After resolving the conflict, git add marks the file as resolved
                  </div>
                </Tooltip>
              </div>
            </GitArea>
            
            <div className="mt-6 p-4 bg-slate-700 rounded-lg text-sm">
              <div className="text-blue-300 mb-2">Terminal Output:</div>
              <div className="text-slate-300 font-mono">
                $ git status<br />
                On branch main<br />
                All conflicts fixed but you are still merging.<br />
                (use "git commit" to conclude merge)
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="flex flex-col w-full items-center">
            <GitCommand command='git commit -m "Resolve merge conflicts in header"' />
            
            <GitArea title="Repository - Merge Completed" type="repository" className="w-full max-w-xl mt-4">
              <div className="flex flex-col items-center pb-4">
                <GitCommitNode id="c1" message="Initial commit" />
                
                <div className="h-8 border-l-2 border-slate-600"></div>
                
                <div className="flex w-full">
                  <div className="flex-1 border-r-2 border-blue-500 h-8"></div>
                  <div className="flex-1 border-r-2 border-green-500 h-8"></div>
                </div>
                
                <div className="flex w-full">
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c2" message="Update header style (blue)" color="blue" />
                  </div>
                  <div className="flex-1 flex justify-end -mr-3">
                    <GitCommitNode id="c3" message="Change header color (green)" color="green" />
                  </div>
                </div>
                
                <div className="w-full flex justify-center mt-2">
                  <div className="border-l-2 border-r-2 border-t-2 border-purple-500 w-32 h-8 rounded-t-lg"></div>
                </div>
                
                <GitCommitNode id="c4" message="Resolve merge conflicts in header" color="purple" isLatest />
                
                <div className="mt-2">
                  <GitBranchLabel name="main" color="purple" active />
                </div>
                
                <Tooltip content="The merge is now complete with conflicts resolved">
                  <div className="mt-4 text-xs text-slate-400">
                    Merge completed successfully after resolving conflicts
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