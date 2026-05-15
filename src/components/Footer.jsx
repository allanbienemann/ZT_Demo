import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p className="footer-tagline">{t('footer.tagline')}</p>
      <p className="footer-copy">{t('footer.copyright')}</p>
    </footer>
  )
}
