import { useTranslation } from 'react-i18next'

const STEPS = ['step1', 'step2', 'step3']

export default function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section className="how-it-works">
      <div className="hiw-header">
        <h2>{t('howItWorks.sectionTitle')}</h2>
        <p>{t('howItWorks.sectionSubtitle')}</p>
      </div>
      <div className="hiw-steps">
        {STEPS.map((step, i) => (
          <div key={step} className="hiw-step">
            <div className="hiw-step-number">{i + 1}</div>
            <div className="hiw-step-body">
              <span className="hiw-eyebrow">{t(`howItWorks.${step}.eyebrow`)}</span>
              <h3>{t(`howItWorks.${step}.title`)}</h3>
              <p>{t(`howItWorks.${step}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
