import { createApp } from 'vue'
import { SynPlugin } from '@syntax-design/syntax-ui'
import '@syntax-design/syntax-ui/dist/style.css'
import '@syntax-design/syntax-tokens/dist/themes/light.css'
import I18NextVue from 'i18next-vue'
import i18next, { i18nReady } from './i18n.js'
import App from './App.vue'
import './style.css'

// Wait for the first locale file to load before mounting so components never
// render with untranslated keys. Equivalent to React's <Suspense> wrapper.
i18nReady.then(() => {
  const app = createApp(App)
  app.use(SynPlugin, { locale: 'en-US' })
  app.use(I18NextVue, { i18next })
  app.mount('#app')
})
