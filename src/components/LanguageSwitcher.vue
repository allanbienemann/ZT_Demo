<template>
  <div class="lang-switcher">
    <label for="lang-select">{{ t('languageSwitcher.label') }}</label>
    <select id="lang-select" :value="i18next.language" @change="onChange">
      <option v-for="lang in LANGUAGES" :key="lang.code" :value="lang.code">
        {{ lang.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import i18next from '../i18n.js'

const { t } = useTranslation()

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
]

function onChange(e) {
  i18next.changeLanguage(e.target.value)
}
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: var(--sds-spacing-2);
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-70);
}
.lang-switcher label { white-space: nowrap; font-weight: 500; }
.lang-switcher select {
  padding: 4px 8px;
  border: 1px solid var(--sds-color-neutral-30);
  border-radius: 4px;
  font-size: var(--sds-font-sm);
  font-family: inherit;
  background: var(--sds-color-neutral-10);
  color: var(--sds-color-neutral-90);
  cursor: pointer;
}
.lang-switcher select:focus {
  outline: 2px solid var(--sds-color-click-50);
  outline-offset: 1px;
}
</style>
