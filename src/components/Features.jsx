import { useTranslation } from 'react-i18next'

const CARDS = ['card1', 'card2', 'card3']

export default function Features() {
  const { t } = useTranslation()

  return (
    <section className="features">
      <div className="features-header">
        <h2>{t('features.sectionTitle')}</h2>
        <p>{t('features.sectionSubtitle')}</p>
      </div>
      <div className="features-grid">
        {CARDS.map((card) => (
          <div key={card} className="feature-card">
            <h3>{t(`features.${card}.title`)}</h3>
            <p>{t(`features.${card}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
