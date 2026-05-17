<template>
  <section class="hiw">
    <SynContainer :width="SynContainerWidth.mainMd">
      <div class="hiw-header">
        <h2 class="hiw-title">{{ t('howItWorks.sectionTitle') }}</h2>
        <p class="hiw-subtitle">{{ t('howItWorks.sectionSubtitle') }}</p>
      </div>
      <div class="hiw-steps">
        <div v-for="(step, index) in STEPS" :key="step" class="hiw-step">
          <div class="hiw-number">{{ index + 1 }}</div>
          <div class="hiw-body">
            <span class="hiw-eyebrow">{{ t(`howItWorks.${step}.eyebrow`) }}</span>
            <h3 class="hiw-step-title">{{ t(`howItWorks.${step}.title`) }}</h3>
            <p class="hiw-step-desc">{{ t(`howItWorks.${step}.description`) }}</p>
          </div>
        </div>
      </div>
    </SynContainer>
  </section>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynContainer, SynContainerWidth } from '@syntax-design/syntax-ui'

const { t } = useTranslation()
const STEPS = ['step1', 'step2', 'step3']
</script>

<style scoped>
.hiw {
  padding: 72px var(--sds-spacing-6);
  background: var(--sds-color-neutral-15);
}
.hiw-header {
  text-align: center;
  margin-bottom: 48px;
}
.hiw-title {
  font-size: var(--sds-font-2xl);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--sds-color-neutral-90);
  margin-bottom: var(--sds-spacing-2);
}
.hiw-subtitle {
  font-size: var(--sds-font-base);
  color: var(--sds-color-neutral-60);
}
.hiw-steps {
  display: flex;
  flex-direction: column;
  gap: var(--sds-spacing-3);
}
.hiw-step {
  display: flex;
  gap: var(--sds-spacing-5);
  align-items: flex-start;
  background: var(--sds-color-neutral-10);
  border: 1px solid var(--sds-color-neutral-30);
  border-radius: 8px;
  padding: var(--sds-spacing-5);
}
.hiw-number {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--sds-color-click-50);
  color: var(--sds-color-neutral-10);
  font-weight: 700;
  font-size: var(--sds-font-base);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hiw-eyebrow {
  display: block;
  font-size: var(--sds-font-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--sds-color-click-50);
  margin-bottom: var(--sds-spacing-1);
}
.hiw-step-title {
  font-size: var(--sds-font-base);
  font-weight: 600;
  color: var(--sds-color-neutral-90);
  margin-bottom: var(--sds-spacing-2);
}
.hiw-step-desc {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-60);
  line-height: 1.6;
}
</style>
