import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en';
import esTranslations from './locales/es';

// Función para obtener el idioma guardado o detectado
const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage || navigator.language.split('-')[0];
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      }
    },
    lng: getSavedLanguage(), // Usar idioma guardado primero
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'language',
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;