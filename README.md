# Handoff: FCBC Homepage — "The Counsel" v3

## Overview
Homepage redesign for forcreatorsbycreators.co (For Creators By Creators PC), a law firm for content creators, influencers and small businesses. Primary goal: book free consults. Direction "The Counsel" with the big-type services list borrowed from the "Poster" direction.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. Recreate the design in the target codebase's environment (e.g. Next.js/React, Astro, Webflow, WordPress theme) using its established patterns. If no environment exists yet, a good default is **Next.js + React + CSS Modules or Tailwind**, deployed as a static marketing site.

- `Counsel v3 - standalone.html` — open directly in a browser (works offline). Use this to view the design.
- `design/Counsel v3.dc.html` — source of the prototype. Markup with inline styles + a small logic class (`class Component`) at the bottom holding all data arrays and interactions. Needs to be served over HTTP (e.g. `npx serve design`) because it loads `support.js`. Treat it as a spec, not a framework to adopt.
- `design/assets/` — real image/logo assets.

## Fidelity
**High-fidelity** for layout, color, type, spacing and interactions. Exceptions (placeholders, need real content):
- Hero video — simulated with a crossfading Ken-Burns pan of two photos. Replace with the firm's actual hero video.
- Client tiles — names, niches, follower counts and photos are placeholders.
- Press logos — rendered as text; swap for SVG logos.
- TEDx block — striped placeholder; replace with YouTube embed (`https://www.youtube.com/watch?v=7CnbEt-R81U`).
- Some "What's going on?" answer bodies are short placeholder lines (Trademarking, Litigation, Defamation).

## Global Rules (apply everywhere)
- **No border-radius anywhere.** Square corners on buttons, tiles, inputs, images.
- **No shadows.** Separation via 1–2px rules and color blocks.
- **No serif fonts, no eyebrow labels / section numbers, no emoji.**
- One font: **Schibsted Grotesk** (Google Fonts), weights 400/500/600/700, italic 400 for pull quotes.
- Content max-width **1240px**, centered. Horizontal page padding `clamp(20px, 4vw, 64px)`.
- Section vertical padding generally `clamp(64px, 8vw, 112px)` (some sections 120/128 max).
- Headlines use tight negative tracking (-0.035em to -0.045em) and `text-wrap: balance`; body uses `text-wrap: pretty`.
- Layouts must reflow: grids use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))`.
- Primary CTA everywhere: "Grab a Free Consult" / "Book my free consult" → consult booking URL.

## Design Tokens
Colors
| Token | Hex | Use |
|---|---|---|
| navy | `#0A1E3F` | primary ink, dark sections, buttons |
| cream | `#F6F3EE` | page background, text on navy |
| sand | `#E9E4DA` | stats band background |
| rule-light | `#D9D3C7` | dividers on cream |
| rule-dark | `#2A4677` | dividers on navy |
| periwinkle | `#9DB5DB` | hover / accent text on navy |
| periwinkle-mid | `#6D8DBB` | arrows, secondary headline color, accent button |
| periwinkle-deep | `#4F6FA0` | link hover on cream, button hover |
| slate | `#4A5873` | secondary text on cream |
| body-ink | `#1E2C47` | long-form body on cream |
| mist | `#C9D4E6` / `#D5DEEC` / `#B9C6DC` | secondary text on navy |
| tile-bg | `#C9D6EA` | client tile placeholder fill |

Type scale (all Schibsted Grotesk)
- H1 hero: `clamp(48px, 5.8vw, 92px)`, 600, lh 0.98, ls -0.04em
- Services words: `clamp(48px, 7.4vw, 124px)`, 700, lh 0.95, ls -0.045em
- H2 section: `clamp(40px, 4.8vw, 72px)`, 600, lh 1, ls -0.035em
- Final CTA H2: `clamp(44px, 5.2vw, 80px)`, 600, lh 0.98
- Stat numbers: `clamp(44px, 4.4vw, 64px)`, 600, ls -0.04em
- Testimonial quotes: `clamp(24px, 2.4vw, 34px)`, 500, lh 1.3
- Accordion rows: `clamp(22px, 2.4vw, 34px)`, 500
- Body large: 20px / 1.55–1.6; body: 18px / 1.6; small: 15–16px; legal footer 12px
- Nav: 15px, 500. Buttons: 17–18px, 600.

## Sections (top to bottom)

1. **Hero** (navy, `min-height: min(880px, 100vh)`)
   - Full-bleed background video (`object-fit: cover`, muted, autoplay, loop, playsinline). Overlay gradient left→right: `rgba(10,30,63,.92) 0% → .7 45% → .15 100%` for text legibility.
   - Header row: white logo (`logo-white.png`, 44px tall) left; nav right: Services, Resources, Testimonials, FAQ, Contact (cream, hover periwinkle).
   - Bottom-left block (max-width 820px): H1 "A law firm built for creators & entrepreneurs"; sub "Our firm represents creators, social media influencers, small businesses, & individuals." (20px, `#D5DEEC`, max 520px); CTAs: cream solid button "Grab a Free Consult" (padding 18×28, hover bg periwinkle) + text link "Not sure what you need? ↓" scrolling to `#router`.
   - Bottom-right: 44×44 square play/pause toggle (1px cream border; hover inverts). Must respect `prefers-reduced-motion` (start paused).

2. **Press bar** (cream, 30px vertical padding, bottom rule). Logos spaced-between, wrapping: The New York Times, Business Insider, TEDx, The American Lawyer, Law360, Mashable, USA Today, Newsweek, CNBC. Use monochrome SVGs tinted `#4A5873`.

3. **Clients carousel — "Hire the legal team behind some of your favorite creators"**
   - Header row: H2 left (max 820px), prev/next buttons right (52×52, 1px navy border, hover fills navy).
   - Track bleeds off the right edge; left edge aligns with the 1240px content column.
   - Tile: 300px wide; image 300×375 (4:5); follower badge top-left (navy bg, cream 13px/600, padding 6×10); below a 2px navy top-rule, name (20px/600) left and niche (14px slate) right. Whole tile is a link (case study / client page).
   - Gap 20px → step = 320px.

4. **Services — big-type list** (navy, from "Poster" direction)
   - Lead line: "As a transactional law expert my practice areas include" (20px/600 periwinkle).
   - Each practice area is a full-width row link with 1px `#2A4677` bottom rule: Entertainment law, Trademarking, Contracts, Corporate, Employment, Venture capital. Word left, "→" right (`#6D8DBB`).
   - Hover: text turns periwinkle and indents 24px (animate padding-left ~.25s).
   - Each links to its service page.

5. **Founder intro** — two columns (auto-fit, min 360px). Left: H2 "You're a creator. / I'm a lawyer." (second line `#6D8DBB`) + photo `julian.jpg` (max 440px, 4:5, cover, position center 15%). Right (bottom-aligned): three paragraphs, verbatim from prototype.

6. **Stats band** (sand). Lead "Our Firm services…". 4 columns, 2px navy top rule: 250M+ followers · $5M+ annual brand deal volume · 75+ creators · Hundreds of brand deals per year.

7. **"What's going on?" router** (`id="router"`, navy). Accordion, one open at a time; clicking open row closes it. Rows: 
   - A brand sent me a contract → Brand deals
   - I want to protect my name or brand → Trademarking
   - I'm starting or growing a business → Contracts, corporate, employment & venture capital
   - Someone stole or misused my content → Litigation
   - I'm facing an accusation or threat → Defamation defense
   - Open panel: two columns — area name (22px periwinkle), body copy, CTA button (bg `#6D8DBB`, navy text, hover cream) | pull quote with 3px `#6D8DBB` left border, italic 22px, attribution 15px periwinkle. Copy in the logic class `opts` array.
   - Row text color: periwinkle when closed, cream when open. "+" icon rotates 45° when open.

8. **Testimonials** (cream). Stacked rows, 1px bottom rule, grid `1fr / 260px`: quote left, attribution right. Three quotes (Cori; Dr. Kojo Sarfo; Zach) — verbatim in prototype.

9. **TEDx band** (navy, 2 columns min 460px): YouTube embed left (min-height 420px; use 16:9 responsive embed), headline right "I gave a TedX talk on why content creators need legal representation".

10. **Final CTA + newsletter** (cream, 2 columns). H2 "I handle legal so you can build your business". Right: navy button "Book my free consult" (padding 20×30, hover `#4F6FA0`); newsletter blurb; email input with only a 2px navy bottom border + "Subscribe →" text button.

11. **Footer** (navy). Logo (`logo-transparent.png`, 48px) + links (Practice Areas, Testimonials, FAQS, Free Resources, TikTok, Instagram); legal disclaimer 12px, max 900px.

## Interactions & Behavior
- **Hero video**: autoplay muted loop; play/pause toggle swaps icon ❚❚ / ▶ (use an accessible SVG icon in production; `aria-label` + `aria-pressed`).
- **Client carousel**: auto-advances one tile every **3000ms**; transition `transform .6s cubic-bezier(.4,0,.2,1)`. Pauses on hover (and should pause on focus-within and when tab hidden). Infinite loop: track renders the client list + first 5 clones; on reaching index N, after the transition (650ms) snap without animation to 0. Prev at 0 snaps to N then animates to N-1. A library like Embla Carousel (loop mode, autoplay plugin) is a fine production substitute. Disable autoplay under `prefers-reduced-motion`.
- **Accordion**: height animates via `grid-template-rows: 0fr → 1fr`, `.4s ease`. Use `<button aria-expanded>` with `aria-controls`.
- **Services rows**: hover color + indent; whole row is the link.
- **Anchors**: "Services" nav → `#services`; "Not sure what you need?" → `#router`. Smooth scroll.
- **Newsletter**: validate email format; show inline success / error text under the field (not designed — match 15px slate / navy styles). Wire to the firm's email provider.

## State
- `videoPlaying: boolean`
- `carouselIndex: number`, `carouselAnimating: boolean`, `carouselHover: boolean`
- `openRouterIndex: number | -1`
- `newsletterEmail`, `newsletterStatus: idle | submitting | success | error`

## Content / CMS suggestions
Make these editable data: clients (name, niche, followers, photo, link), practice areas (label, slug), router entries (question, area, body, quote, attribution), stats, testimonials, press logos.

## Assets
- `design/assets/logo-white.png` — header logo on navy
- `design/assets/logo-transparent.png` — footer logo
- `design/assets/logo-navy.png`, `mark.png` — alternates (not used on this page)
- `design/assets/julian.jpg`, `julian-2.jpg` — founder photos (also stand-ins for the hero video)
- Needed from client: hero video file (MP4 H.264 + WebM, ~1920×1080, <8MB, plus poster frame), client photos (4:5, ≥600×750), press logo SVGs.

## Files
- `Counsel v3 - standalone.html` — self-contained viewable prototype
- `design/Counsel v3.dc.html` — prototype source (markup + logic class)
- `design/support.js`, `design/image-slot.js` — prototype runtime only; do not port
- `design/assets/*` — images
