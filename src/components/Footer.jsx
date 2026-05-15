import { useTranslation } from 'react-i18next'

const COL_PRODUCT = ['linkFeatures', 'linkPricing', 'linkChangelog', 'linkIntegrations']
const COL_COMPANY = ['linkAbout', 'linkBlog', 'linkCareers', 'linkPress']
const COL_SUPPORT = ['linkDocs', 'linkStatus', 'linkContact', 'linkSecurity']

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">{t('nav.brand')}</span>
          <p className="footer-tagline">{t('footer.tagline')}</p>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>{t('footer.colProduct')}</h4>
            <ul>{COL_PRODUCT.map((k) => <li key={k}><a href="#">{t(`footer.${k}`)}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.colCompany')}</h4>
            <ul>{COL_COMPANY.map((k) => <li key={k}><a href="#">{t(`footer.${k}`)}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.colSupport')}</h4>
            <ul>{COL_SUPPORT.map((k) => <li key={k}><a href="#">{t(`footer.${k}`)}</a></li>)}</ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}
