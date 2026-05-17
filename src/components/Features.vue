<template>
  <section class="features">
    <SynContainer :width="SynContainerWidth.page">
      <div class="features-header">
        <h2 class="features-title">{{ t('features.sectionTitle') }}</h2>
        <p class="features-subtitle">{{ t('features.sectionSubtitle') }}</p>
      </div>
      <div class="features-grid">
        <div v-for="card in CARDS" :key="card.key" class="feature-card">
          <span class="feature-icon">{{ card.icon }}</span>
          <h3 class="feature-card-title">{{ t(`features.${card.key}.title`) }}</h3>
          <p class="feature-card-desc">{{ t(`features.${card.key}.description`) }}</p>
        </div>
      </div>
    </SynContainer>
  </section>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynContainer, SynContainerWidth } from '@syntax-design/syntax-ui'

const { t } = useTranslation()
const CARDS = [
  { key: 'card1', icon: '⚡' },
  { key: 'card2', icon: '🎯' },
  { key: 'card3', icon: '🔌' },
]
</script>

<style scoped>
.features {
  padding: 72px var(--sds-spacing-6);
  background: var(--sds-color-neutral-10);
}
.features-header {
  text-align: center;
  margin-bottom: 48px;
}
.features-title {
  font-size: var(--sds-font-2xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--sds-color-neutral-90);
  margin-bottom: var(--sds-spacing-2);
}
.features-subtitle {
  font-size: var(--sds-font-base);
  color: var(--sds-color-neutral-60);
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--sds-spacing-5);
}
.feature-card {
  background: var(--sds-color-neutral-15);
  border: 1px solid var(--sds-color-neutral-30);
  border-radius: 8px;
  padding: var(--sds-spacing-5);
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.feature-icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: var(--sds-spacing-3);
}
.feature-card-title {
  font-size: var(--sds-font-base);
  font-weight: 600;
  color: var(--sds-color-neutral-90);
  margin-bottom: var(--sds-spacing-2);
}
.feature-card-desc {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-60);
  line-height: 1.65;
}
</style>
