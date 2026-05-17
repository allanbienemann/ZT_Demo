# TaskFlow — Phrase Localization Demo

A demo web app for showcasing Phrase Strings localization workflows. The app simulates a realistic SaaS product (TaskFlow) and is designed to be used in demos where an untranslated English app gets localized into multiple languages via Phrase.

## Tech stack

- **Vue 3** with `<script setup>` SFCs
- **Vite** — dev server and build tool
- **@syntax-design/syntax-ui** — Phrase's internal Vue 3 component library
- **i18next** + **i18next-vue** — runtime localization, with `i18next-http-backend` loading translation files from `public/locales/`

## Supported languages

| Code | Language   |
|------|------------|
| `en` | English    |
| `de` | Deutsch    |
| `es` | Español    |
| `pt` | Português  |

## Running locally

> **Requires VPN** — the `@syntax-design` packages are served from Phrase's internal Nexus registry.

```bash
npm install
npm run dev
```

The app runs at [http://localhost:5173](http://localhost:5173).

## Demo behavior

- **Translation available** — the UI renders in the selected language.
- **Translation missing** — the UI displays raw localization keys (e.g. `hero.headline`), making it clear what needs to be translated. This is intentional: it shows what the app looks like before Phrase has delivered the translations.

## Resetting translations for a demo

To remove all non-English locale files and return the app to its untranslated state, run:

```bash
bash scripts/reset-translations.sh
```

This deletes every folder under `public/locales/` except `en/`, leaving the English source strings intact. After running the script, selecting any non-English language in the dropdown will show localization keys instead of translated content.
