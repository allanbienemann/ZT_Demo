import { useTranslation } from 'react-i18next'

// Language display names — shown in the switcher UI, not translated themselves.
// The label is intentionally in the target language (e.g. "Deutsch" not "German")
// so users recognise their own language in the list.
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'ja', label: '日本語' },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()

  function handleChange(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="lang-switcher">
      <label htmlFor="lang-select">{t('languageSwitcher.label')}</label>
      <select id="lang-select" value={i18n.resolvedLanguage} onChange={handleChange}>
        {LANGUAGES.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
