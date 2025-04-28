import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GitCommandSelector } from './GitCommandSelector';
import { GitCommandVisualizer } from './GitCommandVisualizer';
import { CommandSteps } from './CommandSteps';
import { GitTutorial } from './GitTutorial';
import { Header } from '../Layout/Header';
import { Footer } from '../Layout/Footer';
import { CommandType } from '../../types/gitCommands';

const GitVisualizerContainer: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCommand, setSelectedCommand] = useState<CommandType>('add');
  const [currentStep, setCurrentStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  
  // Handle command selection
  const handleCommandSelect = (command: CommandType) => {
    setSelectedCommand(command);
    setCurrentStep(0);
  };
  
  // Navigate between steps
  const nextStep = () => {
    const commandStepCount = getStepCountForCommand(selectedCommand);
    if (currentStep < commandStepCount - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  // Get total steps for the selected command
  const getStepCountForCommand = (command: CommandType): number => {
    switch (command) {
      case 'add': return 3;
      case 'commit': return 4;
      case 'branch': return 3;
      case 'merge': return 5;
      case 'push': return 4;
      case 'pull': return 4;
      case 'conflict': return 6;
      default: return 3;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('header.title')}</h1>
          <p className="text-slate-300">
            {t('header.subtitle')}
          </p>
          <button
            onClick={() => setShowTutorial(!showTutorial)}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            {showTutorial ? t('header.visualizer') : t('header.tutorial')}
          </button>
        </div>
        
        {showTutorial ? (
          <GitTutorial />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <GitCommandSelector 
                selectedCommand={selectedCommand} 
                onSelectCommand={handleCommandSelect} 
              />
            </div>
            
            <div className="lg:col-span-3 bg-slate-800 rounded-lg p-4 shadow-lg">
              <GitCommandVisualizer 
                command={selectedCommand} 
                step={currentStep} 
              />
              
              <CommandSteps 
                command={selectedCommand}
                currentStep={currentStep}
                totalSteps={getStepCountForCommand(selectedCommand)}
                onNext={nextStep}
                onPrev={prevStep}
              />
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default GitVisualizerContainer;