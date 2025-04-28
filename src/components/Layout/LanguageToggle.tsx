import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center px-3 py-2 rounded bg-slate-700 hover:bg-slate-600 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={20} className="mr-2" />
      <span className="font-medium">{i18n.language.toUpperCase()}</span>
    </button>
  );
};