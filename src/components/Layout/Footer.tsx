import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-800 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex space-x-6 mb-2">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://git-scm.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Git
              </a>
            </div>
            <div className="text-slate-400 text-sm">
              {t('footer.credits')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};