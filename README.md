# simonmelbye.dk

Personal portfolio — multimedia design and film work. Astro, static output, no
client framework. View transitions between pages (`astro:transitions`).

Visual direction: a broadcast / editing-suite language — ink on warm paper, one
signal-blue, a six-hue colour-bar set, registration-mark detailing. Oversized
**Bricolage Grotesque** display, **Hanken Grotesk** body, **Martian Mono** labels.
The two disciplines are framed as two channels: **Rum** (installations) and
**Web** (client sites).

## Commands

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> ./dist  (deploy this)
npm run preview
```

## Pages

```
/                     home — hero, featured work, the two channels
/arbejde              work index, filterable Alle / Rum / Web
/arbejde/<slug>       one case study per project (generated from data)
/om                   about, background, skills
```

## Where things live

```
src/
  pages/               one file per route; [slug].astro generates the case pages
  layouts/Base.astro   <head>, fonts, ClientRouter, header + footer, scripts
  components/
    SiteHeader / SiteFooter
    ColorBar             the six-band strip (rail, footer, case divider)
    Reg                  registration crosshair mark (decorative)
    Hero                 home hero
    WorkCard             one project card (tilts, straightens on hover)
    CaseNav              prev / next on case pages
  data/
    projects.js          every project — the single source of truth
    site.js              nav, contact, About copy
  styles/global.css      tokens (colour, type, motion), base, reveal utilities
  scripts/ui.js          theme toggle, scroll reveal, channel filter
  assets/work/           project images (imported + optimised; see its README)
```

## Editing content

- **Projects:** `src/data/projects.js`. Each entry drives its card *and* its
  `/arbejde/<slug>` page. `channel` is `'rum'` or `'web'`; `bar` picks the
  colour-bar hue; `body` is the case-study paragraphs; `year` is `null` until set.
- **A real image:** put the file in `src/assets/work/`, `import` it at the top of
  `projects.js`, set it as the project's `image`.
- **About / contact / nav:** `src/data/site.js`.

## Still placeholder (search for TODO / empty fields in projects.js)

- All `year` values are `null`.
- Web projects: titles/branches are guesses from the image filenames; every
  `summary` and `body` is empty.
- `lejre` project: description is a stub.
- Case-study `body` text for the Rum projects is drafted from the old site —
  verify it.
