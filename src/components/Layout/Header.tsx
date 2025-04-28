import React from 'react';
import { GitBranch } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <header className="bg-slate-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <GitBranch size={28} className="text-blue-500 mr-3" />
          <h1 className="text-2xl font-bold text-white">{t('header.title')}</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a 
                href="https://git-scm.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                {t('header.docs')}
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
};