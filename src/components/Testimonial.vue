<template>
  <section class="testimonial">
    <SynContainer :width="SynContainerWidth.mainMd">
      <blockquote class="quote">
        &ldquo;{{ t('testimonial.quote') }}&rdquo;
      </blockquote>
      <div class="author">
        <span class="author-name">{{ t('testimonial.author') }}</span>
        <span class="author-role">{{ t('testimonial.role') }}</span>
      </div>
    </SynContainer>
  </section>
</template>

<script setup>
import { useTranslation } from 'i18next-vue'
import { SynContainer, SynContainerWidth } from '@syntax-design/syntax-ui'

const { t } = useTranslation()
</script>

<style scoped>
.testimonial {
  padding: 72px var(--sds-spacing-6);
  background: var(--sds-color-neutral-90);
  text-align: center;
}
.quote {
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
  font-weight: 500;
  color: var(--sds-color-neutral-10);
  line-height: 1.55;
  letter-spacing: -0.01em;
  font-style: normal;
  margin: 0 0 var(--sds-spacing-5);
}
.author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.author-name {
  font-weight: 600;
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-10);
}
.author-role {
  font-size: var(--sds-font-sm);
  color: var(--sds-color-neutral-50);
}
</style>
