import i18next from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

// i18nReady is a Promise that resolves once the first locale file has loaded.
// main.js waits on it before mounting the Vue app, so components never render
// with missing translation keys.
export const i18nReady = i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: false,
    supportedLngs: ['en', 'de', 'es', 'pt'],
    debug: false,
    interpolation: { escapeValue: false },
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    detection: {
      order: ['localStorage', 'navigator'],
      cacheUserLanguage: true,
    },
  })

export default i18next
