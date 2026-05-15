import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'        // initialises i18next before the app renders
import './index.css'
import App from './App.jsx'

// Suspense is required here because i18next-http-backend fetches translation
// files asynchronously over HTTP. While the first file is loading, React would
// otherwise try to render components that call t() before any strings exist.
// Suspense shows the fallback ("…") until translations are ready.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback="…">
      <App />
    </Suspense>
  </StrictMode>,
)
