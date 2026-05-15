import { useTranslation } from 'react-i18next'

export default function Testimonial() {
  const { t } = useTranslation()

  return (
    <section className="testimonial">
      <blockquote className="testimonial-quote">
        &ldquo;{t('testimonial.quote')}&rdquo;
      </blockquote>
      <div className="testimonial-author">
        <span className="testimonial-name">{t('testimonial.author')}</span>
        <span className="testimonial-role">{t('testimonial.role')}</span>
      </div>
    </section>
  )
}
