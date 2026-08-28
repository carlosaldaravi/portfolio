# carlosaldaravi.com

Personal portfolio of Carlos Aldaravi — the developer side (experience, projects,
stack), the kitesurfer side (jumps, gear, sponsors, world ranking) and an
editable CV that can be exported to PDF. Built with the Next.js App Router,
bilingual (Spanish / English) and with a light/dark theme.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (also the real typecheck — run it before pushing) |
| `npm start` | Serves the production build |
| `npm test` | Jest in watch mode (`npx jest --ci` for a single run) |
| `npm run lint` | ESLint over `src/` |

### Environment

Copy `.env.example` to `.env.local` and fill in:

- `SURFR_ACCESS_TOKEN` — server-only token for the Surfr. leaderboard proxied by
  `/api/getRanking`. Without it the kitesurf ranking falls back to the snapshot
  in `src/data/leaderboard.ts`.
- `NEXT_PUBLIC_FORMSPARK_ID` — Formspark form the contact page posts to.
- `NEXT_PUBLIC_ANALYTICS_ID` — Google Analytics id, only loaded after consent.

## Structure

```
src/
  app/[locale]/       Routes. Each page.tsx = metadata + data loading; the
                      interactive part lives in its *-content.tsx client component
  app/api/            Route handlers (the Surfr. ranking proxy)
  components/         UI, grouped by area (home, developer, kitesurf, curriculum,
                      layout, UI, svg)
  data/               Content as data: JSON per page + cv.data.ts (the CV's
                      single source of truth)
  hooks/              Cross-cutting hooks (fetch, form, responsive, tracking…)
  lang/               Translations, es.json / en.json
  lib/                Server-side helpers: i18n, metadata, messages, OG images
  store/              React contexts (theme, cookie consent)
  types/              Shared types — the single home for every shared shape
  proxy.ts            Locale routing (Next.js middleware)
```

## Conventions

- **Locales live in one place.** `src/lib/i18n.ts` owns the locale list, the
  default locale and the URL shape. The default locale (`es`) is served at the
  root — `/developer`, not `/es/developer` — and `proxy.ts` rewrites it
  internally; every other locale is prefixed. Nothing else should hardcode
  `"es"` / `"en"` or slice locale prefixes by hand.
- **Page metadata goes through `pageMetadata()`** (`src/lib/metadata.ts`), which
  resolves the locale, loads its messages and builds canonical + `hreflang`
  links. Adding a route means declaring what differs, nothing else.
- **Themed components use `useTheme()`** (`src/store/theme-context.tsx`) and the
  helpers in `src/tools/theme.ts` — never compare against the raw `"dark"`
  string.
- **Shared types live in `src/types/`**, never exported from the component that
  happens to render them.
- **Content is data.** Copy and lists live in `src/data/` and `src/lang/`; the
  CV has its own guide in [`docs/guides/CV_TEMPLATE.md`](docs/guides/CV_TEMPLATE.md).

Pending asset work (image/video compression) is tracked in
[`docs/pending-optimizations.md`](docs/pending-optimizations.md).
