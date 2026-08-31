# Project images

Put project stills and screenshots here, then wire them up in
`src/data/projects.js` with an **import**:

```js
// top of projects.js
import vadehavscentret from '../assets/work/vadehavscentret.webp';

// in the project object
{ slug: 'vadehavscentret', image: vadehavscentret, ... }
```

Only imported files are built. Anything else here is ignored — fine to keep
unsorted originals.

Astro processes imported images on build: AVIF + WebP + fallback, responsive
widths, content-hashed filenames. No need to pre-compress.

- **Cards** crop to 4:3, **case heroes** to 16:9 (`object-fit: cover`).
- Source: long edge >= 1600 px for installation stills. The current web client
  thumbnails are only ~395 px and will look soft — re-export larger when you can.
- Formats: `.jpg` `.jpeg` `.png` `.webp` `.avif`. Names: kebab-case.

Files that aren't imported (favicon, og-image, PDFs, video) go in `/public`.
