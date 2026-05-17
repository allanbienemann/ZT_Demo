# TaskFlow — Phrase Localization Demo

A demo web app for showcasing Phrase Strings localization workflows. The app simulates a realistic SaaS product (TaskFlow) and is designed to be used in demos where an app with no translations gets localized into multiple languages via Phrase.

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

- **Translation file empty** — the UI displays raw localization keys (e.g. `hero.headline`) for every language, including English. This is the starting state of the demo.
- **Translation file populated** — the UI renders in the language whose translation file is present and non-empty.
- **Translation file missing** — selecting a language with no file also shows localization keys, making it clear what is waiting to be translated.

## Demo scripts

Three scripts in `scripts/` control the demo lifecycle:

### 1. Reset (before each demo)

```bash
bash scripts/reset-translations.sh
```

Removes all translated locale folders (de, es, pt, etc.) and empties `public/locales/en/translation.json` to `{}`. Run this before every demo to return to the blank starting state.

### 2. Populate English (during the demo)

```bash
bash scripts/populate-translations.sh
```

Fills `public/locales/en/translation.json` with the full set of English source strings from `scripts/en.source.json`. Run this during the demo to simulate the English content being added.

### 3. Source of truth

`scripts/en.source.json` holds the canonical English strings. **Do not modify this file** — it is the stable reference that `populate-translations.sh` copies from.
