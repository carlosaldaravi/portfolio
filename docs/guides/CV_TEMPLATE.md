# CV template — "make it yours"

The `/curriculum` page is a reusable CV template. All the content lives in a
**single file** so you can fork this repo and turn the CV into your own without
touching any component.

## The only file you normally edit

**`src/data/cv.data.ts`** is the single source of truth. It holds your name,
profession, contact, languages, skills, experience, education, certifications,
awards and the "other info" blurb.

Bilingual fields are written as `{ es, en }` pairs so the CV reads correctly in
both languages:

```ts
profession: { es: "Desarrollador Web & Apps", en: "Web & Apps Developer" }
```

Language-invariant data (emails, dates, star levels, bubble colours/positions,
certification titles) is a plain value.

### Step-by-step

1. **Identity** — edit `IDENTITY` (name, surname, profession).
2. **Contact** — edit `CONTACT`. Each entry has a generic `labelId` (an i18n
   label such as Website/Email/GitHub/LinkedIn — see below to add a new label)
   and your `value`. Add or remove entries freely.
3. **Languages** — edit `LANGUAGES` (`languageId` is a generic i18n label,
   `starsFilled` is 1–5).
4. **Skills** — edit `SKILLS`. `head: true` is the big central bubble;
   `color` / `size` / `top` / `left` lay out the cloud (tweak visually).
   Personal-skill labels are bilingual; programming labels are brand names.
5. **Experience / Education / Awards** — edit `EXPERIENCE`, `EDUCATION`,
   `AWARDS`. A `date` ending in `"- "` renders as "… - present".
6. **Certifications** — edit `CERTIFICATIONS` (`hours` is just the number; the
   "hours"/"horas" suffix is added automatically).
7. **Other info** — edit `OTHER_INFO`.

That's it. The page and the downloadable PDF update from this file.

## Generic UI labels (only if you add fields)

Section titles ("Experience", "Education"), contact field labels
("Website", "Email", "LinkedIn"), and words like "present" / "hours" / the
star captions live in `src/lang/es.json` and `src/lang/en.json` under
`page.curriculum.*`. You only touch these if you **add a new kind of field**
and need a new label — for example a `labelId: "page.curriculum.sidebar.x"`
must exist in both language files.

## Edit-on-page ("¡Hazlo tuyo!") and PDF

- The page has an inline editor (the pencil button): visitors can tweak every
  field, add/remove entries and languages, and edit skill levels, then
  **Download** the result as a PDF. Those edits are in-memory (they reset on
  reload) — the intended flow is *edit → download*.
- The PDF is generated client-side from the live DOM, so it reflects whatever
  is on screen (including edits). It is captured at full A4 size; the on-screen
  mobile scaling does not affect it.

## What is NOT in the template file

- Site-wide identity (`MY_NAME`, base URL, page `<title>`) lives in
  `src/constants/constants.ts` and `src/lib/metadata.ts`.
- The Person structured data (JSON-LD) is in `src/app/[locale]/layout.tsx`.
