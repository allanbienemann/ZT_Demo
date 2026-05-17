<template>
  <nav class="nav">
    <span class="nav-brand">{{ t('nav.brand') }}</span>
    <ul class="nav-links">
      <li><a href="#">{{ t('nav.features') }}</a></li>
      <li><a href="#">{{ t('nav.pricing') }}</a></li>
      <li>
        <SynButton :variant="SynButtonVariant.invisible" size="small">
          {{ t('nav.signin') }}
        </SynButton>
      </li>
      <li>
        <SynButton :variant="SynButtonVariant.primary" size="small">
          {{ t('nav.getStarted') }}
        </SynButton>
      </li>
    </ul>
    <LanguageSwitcher />
  </nav>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynButton, SynButtonVariant } from '@syntax-design/syntax-ui'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t } = useTranslation()
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: var(--sds-spacing-6);
  padding: 0 var(--sds-spacing-6);
  height: 60px;
  border-bottom: 1px solid var(--sds-color-neutral-30);
  background: var(--sds-color-neutral-10);
  position: sticky;
  top: 0;
  z-index: 100;
  flex-wrap: wrap;
}
.nav-brand {
  font-size: var(--sds-font-lg);
  font-weight: 700;
  color: var(--sds-color-click-50);
  margin-right: auto;
  letter-spacing: -0.02em;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: var(--sds-spacing-3);
}
.nav-links a {
  font-size: var(--sds-font-sm);
  font-weight: 500;
  color: var(--sds-color-neutral-70);
  transition: color 0.15s;
}
.nav-links a:hover { color: var(--sds-color-neutral-90); }
</style>
