import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Nav() {
  const { t } = useTranslation()

  return (
    <nav className="nav">
      <span className="nav-brand">{t('nav.brand')}</span>
      <ul className="nav-links">
        <li><a href="#">{t('nav.features')}</a></li>
        <li><a href="#">{t('nav.pricing')}</a></li>
        <li><a href="#" className="btn btn-ghost">{t('nav.signin')}</a></li>
        <li><a href="#" className="btn btn-primary">{t('nav.getStarted')}</a></li>
      </ul>
      <LanguageSwitcher />
    </nav>
  )
}
