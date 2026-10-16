# For Creators By Creators — website

The website for forcreatorsbycreators.co, built with [Astro](https://astro.build).

## Editing content

Almost all homepage text lives in one file: **`src/data/site.ts`**. Edit the words there and the page updates. That includes:

- `CONSULT_URL`: where every "free consult" button goes
- `NEWSLETTER_URL`: the newsletter signup endpoint (blank = signup shows "coming soon")
- `HERO_VIDEO`: the hero background video (blank = photo slideshow)
- clients, practice areas, stats, the "What's going on?" answers, testimonials, nav and footer links

Photos used by the page are in `src/assets/`. Client photos go in `public/clients/`.

## Running it on your computer

```
npm install      # first time only
npm run dev      # then open http://localhost:4321
```

`npm run build` creates the finished site in `dist/`.

## Layout

- `src/pages/index.astro`: the homepage (lists the sections in order)
- `src/components/`: one file per section
- `src/styles/global.css`: colors, fonts, and shared styles
- `design/`: the original design handoff (`HANDOFF.md` is the full spec)
