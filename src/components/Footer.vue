<template>
  <footer class="footer">
    <SynContainer :width="SynContainerWidth.page">
      <div class="footer-top">
        <div class="footer-brand">
          <span class="footer-logo">{{ t('nav.brand') }}</span>
          <p class="footer-tagline">{{ t('footer.tagline') }}</p>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h4>{{ t('footer.colProduct') }}</h4>
            <ul>
              <li v-for="k in COL_PRODUCT" :key="k"><a href="#">{{ t(`footer.${k}`) }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>{{ t('footer.colCompany') }}</h4>
            <ul>
              <li v-for="k in COL_COMPANY" :key="k"><a href="#">{{ t(`footer.${k}`) }}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>{{ t('footer.colSupport') }}</h4>
            <ul>
              <li v-for="k in COL_SUPPORT" :key="k"><a href="#">{{ t(`footer.${k}`) }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ t('footer.copyright') }}</p>
      </div>
    </SynContainer>
  </footer>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynContainer, SynContainerWidth } from '@syntax-design/syntax-ui'

const { t } = useTranslation()

const COL_PRODUCT = ['linkFeatures', 'linkPricing', 'linkChangelog', 'linkIntegrations']
const COL_COMPANY = ['linkAbout', 'linkBlog', 'linkCareers', 'linkPress']
const COL_SUPPORT = ['linkDocs', 'linkStatus', 'linkContact', 'linkSecurity']
</script>

<style scoped>
.footer {
  background: var(--sds-color-neutral-90);
}
.footer-top {
  display: flex;
  gap: 64px;
  padding: 56px 0 40px;
  flex-wrap: wrap;
}
.footer-brand { flex: 0 0 200px; }
.footer-logo {
  display: block;
  font-size: var(--sds-font-lg);
  font-weight: 700;
  color: var(--sds-color-click-50);
  letter-spacing: -0.02em;
  margin-bottom: var(--sds-spacing-2);
}
.footer-tagline {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-50);
  line-height: 1.5;
}
.footer-cols {
  display: flex;
  gap: 48px;
  flex: 1;
  flex-wrap: wrap;
}
.footer-col h4 {
  font-size: var(--sds-font-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--sds-color-neutral-50);
  margin-bottom: var(--sds-spacing-3);
}
.footer-col ul { display: flex; flex-direction: column; gap: var(--sds-spacing-2); }
.footer-col a {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-60);
  transition: color 0.15s;
}
.footer-col a:hover { color: var(--sds-color-neutral-10); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 0;
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-50);
}

@media (max-width: 768px) {
  .footer-top { flex-direction: column; gap: 32px; }
  .footer-brand { flex: none; }
}
</style>
