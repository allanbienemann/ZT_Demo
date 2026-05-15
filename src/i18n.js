import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(HttpBackend)           // loads translation files from public/locales/
  .use(LanguageDetector)      // detects language from browser / localStorage
  .use(initReactI18next)      // wires i18next into React
  .init({
    fallbackLng: 'en',        // always fall back to English if a key is missing
    supportedLngs: ['en', 'de', 'es', 'pt'],
    debug: false,

    interpolation: {
      escapeValue: false,     // React already escapes output, so this is safe to disable
    },

    backend: {
      // Path to translation files. {{lng}} = language code, {{ns}} = namespace
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      // Where to store the user's language preference
      order: ['localStorage', 'navigator'],
      cacheUserLanguage: true,
    },
  })

export default i18n
