import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translations
import enTranslations from '../src/locales/en/translation.json';
import frTranslations from '../src/locales/rw/translation.json';
import rwTranslations from '../src/locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
      rw: { translation: rwTranslations },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'rw'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;