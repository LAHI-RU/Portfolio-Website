# Kanchana Karunanayaka: Portfolio

Multi-page editorial portfolio for Kanchana Karunanayaka (communication, media production, visual storytelling, research).

**Status:** source is complete, but it was written in an offline environment. `npm install`, `npm run build` and visual testing have NOT been run yet. Run them first (steps below) and fix anything they report.

## Stack
React 19 + TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` tokens in `src/styles/index.css`), Motion for React (`motion/react`), React Router 7, Lucide icons, DM Sans and Instrument Serif via `@fontsource` (bundled, no external requests). shadcn/ui is not used; all components are custom.

## Requirements
Node.js 22.12 or newer. On Windows, install Node from nodejs.org, then open the extracted folder in VS Code and use its terminal.

## Commands
```bash
npm install
npm run dev        # http://localhost:5173/
npm run typecheck
npm run build
npm run preview
```

## Animations (Motion for React)
- **Hero:** staggered entrance, headline lines rising from a mask, portrait arch revealing upward, and a small scroll cue (shown only on tall desktop screens).
- **Navigation:** sliding active-link underline, scroll-progress line under the header, mobile menu that wipes in with staggered links.
- **Content:** scroll reveals, project-image wipe and hover zoom, drawn lines on the focus blocks, an animated timeline, animated filter on `/work`, masked page headlines, staggered contact fields, animated copy-email icon, and hover/tap feedback on buttons and icon links.
- **Images** fade and settle in once loaded.
- **Reduced motion:** `MotionConfig reducedMotion="user"` in `src/App.tsx` turns off movement for visitors who ask for it; the progress line and wipe reveals are also swapped for simple fades.
- Shared easing and helpers (`Reveal`, `Mask`, `MLink`, `ease`) live in `src/components/shared.tsx`.

## Routes
`/`, `/work`, `/work/the-broken-voice`, `/work/no-more-silence`, `/work/shadowed-truth`, `/research`, `/research/tv-advertising-ethics`, `/about`, `/resume`, `/contact`, and a 404 page.

## Updating content
All content lives in `src/data/`:
- `site.ts`: email, LinkedIn, approved CV path, `showStatusMarkers` (set `false` to hide the "To be added" tags at launch)
- `profile.ts`: experience, education, qualifications, skills, languages, activities, recognition
- `projects.ts`: projects, detail rows, `videoUrl`
- `assets.ts`: every image, with alt text and `isSample` flag

**Change an image:** put the file in `public/images/...`, then edit its entry in `assets.ts` (set `isSample: false`).
**Add a real video:** set `videoUrl` in `projects.ts` to an embed URL (e.g. `https://www.youtube.com/embed/ID`).
**Fill a pending detail:** add `text: "..."` and `status: "confirmed"` to the row in `projects.ts`.
**Add a project:** add an object to `projects`, add its image to `assets.ts`, and add `/work/<slug>` to `public/sitemap.xml`. Routes are generated from the data.
**Public CV:** place the approved PDF at `public/files/Kanchana-Karunanayaka-Public-CV.pdf` and set `approvedCvUrl` in `site.ts`. Do not publish the original CV (home address, referee contacts).

## Deployment
Build with `npm run build` and deploy `dist/`. Both fallbacks for client-side routing are included: `vercel.json` (Vercel) and `public/_redirects` (Netlify). Replace `YOUR-DOMAIN` in `public/robots.txt` and `public/sitemap.xml`.

## Known limitations
- Page titles are set client-side; for richer link previews consider prerendering. The social preview image is an SVG, which some platforms ignore; export a 1200x630 PNG and update `index.html`.
- The contact form uses `mailto:`; it opens the visitor's email app and does not send anything itself.
- Category filtering exists on `/work`. No lint config is included.
- Not yet tested: build, type-check, browser rendering, keyboard/screen-reader behaviour, Lighthouse.

## Asset licences
See `ASSET_CREDITS.md`.
