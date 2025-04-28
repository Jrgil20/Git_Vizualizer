import React from 'react';
import { useTranslation } from 'react-i18next';
import { useGitTutorial } from '../../utils/gitTutorial';
import { GitCommand } from './shared/GitCommand';

export const GitTutorial: React.FC = () => {
  const { t } = useTranslation();
  const { currentStep, steps, nextStep, prevStep, resolveConflict } = useGitTutorial();
  const step = steps[currentStep];

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">{t('tutorial.title')}</h2>
      
      <div className="space-y-4">
        <GitCommand command={step.command} />
        
        <div className="bg-slate-900 p-4 rounded font-mono text-sm whitespace-pre-wrap">
          {step.output}
        </div>
        
        {step.requiresInput && !step.resolved && (
          <button
            onClick={resolveConflict}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            {t('tutorial.resolveConflict')}
          </button>
        )}
        
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded ${
              currentStep === 0 
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {t('tutorial.previous')}
          </button>
          
          <div className="text-sm text-slate-400">
            {t('tutorial.step', { current: currentStep + 1, total: steps.length })}
          </div>
          
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1 || (step.requiresInput && !step.resolved)}
            className={`px-4 py-2 rounded ${
              currentStep === steps.length - 1 || (step.requiresInput && !step.resolved)
                ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {t('tutorial.next')}
          </button>
        </div>
      </div>
    </div>
  );
};