import { useTranslation } from 'react-i18next'

const CARDS = [
  { key: 'card1', icon: '⚡' },
  { key: 'card2', icon: '🎯' },
  { key: 'card3', icon: '🔌' },
]

export default function Features() {
  const { t } = useTranslation()

  return (
    <section className="features">
      <div className="features-header">
        <h2>{t('features.sectionTitle')}</h2>
        <p>{t('features.sectionSubtitle')}</p>
      </div>
      <div className="features-grid">
        {CARDS.map(({ key, icon }) => (
          <div key={key} className="feature-card">
            <span className="feature-icon">{icon}</span>
            <h3>{t(`features.${key}.title`)}</h3>
            <p>{t(`features.${key}.description`)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
