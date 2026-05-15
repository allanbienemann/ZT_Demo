import { useTranslation } from 'react-i18next'

const STATS = ['item1', 'item2', 'item3', 'item4']

export default function Hero() {
  const { t } = useTranslation()

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">{t('hero.trustedBy')}</div>
          <h1 className="hero-headline">{t('hero.headline')}</h1>
          <p className="hero-sub">{t('hero.subheadline')}</p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-white btn-lg">{t('hero.ctaPrimary')}</a>
            <a href="#" className="btn btn-outline-white btn-lg">{t('hero.ctaSecondary')}</a>
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {STATS.map((item) => (
          <div key={item} className="stat-item">
            <span className="stat-value">{t(`stats.${item}.value`)}</span>
            <span className="stat-label">{t(`stats.${item}.label`)}</span>
          </div>
        ))}
      </div>
    </>
  )
}
