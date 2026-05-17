<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="hero-badge">{{ t('hero.trustedBy') }}</div>
      <h1 class="hero-headline">{{ t('hero.headline') }}</h1>
      <p class="hero-sub">{{ t('hero.subheadline') }}</p>
      <div class="hero-ctas">
        <SynButton :variant="SynButtonVariant.primary" size="medium" class="hero-btn-primary">
          {{ t('hero.ctaPrimary') }}
        </SynButton>
        <SynButton :variant="SynButtonVariant.outline" size="medium" class="hero-btn-secondary">
          {{ t('hero.ctaSecondary') }}
        </SynButton>
      </div>
    </div>
  </section>

  <div class="stats-bar">
    <div v-for="item in STATS" :key="item" class="stat-item">
      <span class="stat-value">{{ t(`stats.${item}.value`) }}</span>
      <span class="stat-label">{{ t(`stats.${item}.label`) }}</span>
    </div>
  </div>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynButton, SynButtonVariant } from '@syntax-design/syntax-ui'

const { t } = useTranslation()
const STATS = ['item1', 'item2', 'item3', 'item4']
</script>

<style scoped>
.hero {
  background: var(--sds-color-neutral-90);
  padding: 80px var(--sds-spacing-6) 64px;
  text-align: center;
}
.hero-inner {
  max-width: 720px;
  margin: 0 auto;
}
.hero-badge {
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.75);
  font-size: var(--sds-font-sm);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 28px;
}
.hero-headline {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--sds-color-neutral-10);
  margin-bottom: var(--sds-spacing-5);
}
.hero-sub {
  font-size: var(--sds-font-lg);
  color: rgba(255,255,255,0.65);
  line-height: 1.65;
  margin-bottom: var(--sds-spacing-6);
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.hero-ctas {
  display: flex;
  gap: var(--sds-spacing-3);
  justify-content: center;
  flex-wrap: wrap;
}

/* Override Syntax button colours for the dark hero background */
.hero-btn-secondary {
  --syn-button-outline-color: rgba(255,255,255,0.75);
  --syn-button-outline-border-color: rgba(255,255,255,0.4);
}

/* Stats bar */
.stats-bar {
  display: flex;
  justify-content: center;
  background: var(--sds-color-neutral-20);
  border-bottom: 1px solid var(--sds-color-neutral-30);
}
.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 24px 48px;
  border-right: 1px solid var(--sds-color-neutral-30);
}
.stat-item:last-child { border-right: none; }
.stat-value {
  font-size: var(--sds-font-2xl);
  font-weight: 700;
  color: var(--sds-color-click-50);
  letter-spacing: -0.03em;
  line-height: 1;
}
.stat-label {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-60);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .stats-bar { flex-wrap: wrap; }
  .stat-item { flex: 1 1 50%; border-right: none; border-bottom: 1px solid var(--sds-color-neutral-30); }
}
</style>
