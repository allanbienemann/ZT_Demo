import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <h1 className="hero-headline">{t('hero.headline')}</h1>
      <p className="hero-sub">{t('hero.subheadline')}</p>
      <div className="hero-ctas">
        <a href="#" className="btn btn-primary btn-lg">{t('hero.ctaPrimary')}</a>
        <a href="#" className="btn btn-ghost btn-lg">{t('hero.ctaSecondary')}</a>
      </div>
      <p className="hero-social-proof">{t('hero.trustedBy')}</p>
    </section>
  )
}
