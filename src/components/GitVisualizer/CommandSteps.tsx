import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CommandType } from '../../types/gitCommands';

interface CommandStepsProps {
  command: CommandType;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

export const CommandSteps: React.FC<CommandStepsProps> = ({
  command,
  currentStep,
  totalSteps,
  onNext,
  onPrev
}) => {
  // Get description for the current step
  const getStepDescription = (command: CommandType, step: number): string => {
    const steps: Record<CommandType, string[]> = {
      add: [
        'Files in working directory with changes',
        'Running git add to stage changes',
        'Files moved to staging area'
      ],
      commit: [
        'Files in staging area ready to commit',
        'Running git commit to create a snapshot',
        'New commit created in repository',
        'Staging area is cleared'
      ],
      branch: [
        'Current branch with commits',
        'Creating a new branch with git branch',
        'Switching to the new branch with git checkout'
      ],
      merge: [
        'Feature branch with unique commits',
        'Main branch with its own commits',
        'Checking out main branch',
        'Running git merge to combine changes',
        'Successful merge with combined history'
      ],
      push: [
        'Local repository with commits',
        'Remote repository before push',
        'Running git push to upload commits',
        'Remote repository updated with local commits'
      ],
      pull: [
        'Local and remote repositories',
        'Remote has new commits not in local',
        'Running git pull to download changes',
        'Local repository updated with remote commits'
      ],
      conflict: [
        'Two branches with conflicting changes',
        'Attempting to merge branches',
        'Conflict detected in files',
        'Editing files to resolve conflicts',
        'Marking conflicts as resolved with git add',
        'Completing the merge with git commit'
      ]
    };
    
    return steps[command][step] || 'Step description';
  };

  return (
    <div className="mt-6 border-t border-slate-700 pt-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={onPrev}
          disabled={currentStep === 0}
          className={`flex items-center px-4 py-2 rounded ${
            currentStep === 0 
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <ArrowLeft size={16} className="mr-2" />
          Previous
        </button>
        
        <div className="text-center">
          <div className="text-sm text-slate-400">
            Step {currentStep + 1} of {totalSteps}
          </div>
          <div className="font-medium mt-1">
            {getStepDescription(command, currentStep)}
          </div>
        </div>
        
        <button 
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className={`flex items-center px-4 py-2 rounded ${
            currentStep === totalSteps - 1 
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          Next
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
      
      <div className="w-full bg-slate-700 rounded-full h-2">
        <div 
          className="bg-blue-500 h-full rounded-full transition-all duration-300"
          style={{width: `${((currentStep + 1) / totalSteps) * 100}%`}}
        ></div>
      </div>
    </div>
  );
};