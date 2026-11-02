# Kanchana Karunanayaka: Portfolio

Multi-page editorial portfolio for Kanchana Karunanayaka (communication, media production, visual storytelling, research).

**Status:** TypeScript checking and the production build pass. Browser visual verification remains outstanding because browser and desktop automation were unavailable during this update. See `CONTENT_TO_UPDATE.md` for missing original media and content.

## Stack
React 19 + TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`, `@theme` tokens in `src/styles/index.css`), Motion for React (`motion/react`), React Router 7, Lucide icons, DM Sans and Instrument Serif via `@fontsource` (bundled, no external requests). shadcn/ui is not used; all components are custom.

The colour theme uses pure white page backgrounds (`paper`), pale neutral card surfaces (`surface`), charcoal headings (`ink`), muted body text (`slate`) and deep teal accents (`teal`). `line` is for subtle dividers; `control` provides stronger borders for form fields and outlined controls. Navigation, mobile menus and contact sections share the white theme. Primary text/button combinations were checked for at least 4.5:1 contrast; control borders against white exceed 3:1.

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
`/`, `/work`, `/work/the-broken-voice`, `/work/no-more-silence`, `/work/shadowed-truth`, `/research`, `/research/tv-advertising-ethics`, `/about`, `/contact`, and a 404 page. Legacy `/resume` links redirect to `/about`.

The standalone résumé page has been removed. About integrates experience, education, toolkit and languages; earlier qualifications sit in an expandable disclosure. Contact provides a discreet CV link.

## Updating content
All content lives in `src/data/`:
- `site.ts`: email, LinkedIn, location, availability, approved CV path, optional internal review badges (off by default)
- `profile.ts`: experience, education, qualifications, tool groups, working style, languages, activities, recognition
- `projects.ts`: projects, detail rows, `videoUrl`
- `writing.ts`: approved writing samples and their public file/URL; drafts remain hidden
- `assets.ts`: every image, with alt text and `isSample` flag

**Change an image:** put the file in `public/images/...`, then edit its entry in `assets.ts` (set `isSample: false`).
**Add a real video:** set `videoUrl` in `projects.ts` to an embed URL (e.g. `https://www.youtube.com/embed/ID`).
**Fill a pending detail:** add `text: "..."` and `status: "confirmed"` to the row in `projects.ts`. Only confirmed, non-empty rows render publicly.
**Add writing:** add a confirmed entry to `writing.ts` and place its real file in `public/files/`. With no samples, a short forthcoming note appears; there are no inactive download buttons.
**Toolkit icons:** SVG assets are served locally from `public/icons/`, with names available on hover, focus and tap. See `ASSET_CREDITS.md` for sources.
**Add a project:** add an object to `projects`, add its image to `assets.ts`, and add `/work/<slug>` to `public/sitemap.xml`. Routes are generated from the data.
**Public CV:** place the approved PDF at `public/files/Kanchana-Karunanayaka-Public-CV.pdf` and set `approvedCvUrl` in `site.ts`. Do not publish the original CV (home address, referee contacts).

## Deployment
Build with `npm run build` and deploy `dist/`. Both fallbacks for client-side routing are included: `vercel.json` (Vercel) and `public/_redirects` (Netlify). Replace `YOUR-DOMAIN` in `public/robots.txt` and `public/sitemap.xml`.

## Known limitations
- Page titles are set client-side; for richer link previews consider prerendering. The social preview image is an SVG, which some platforms ignore; export a 1200x630 PNG and update `index.html`.
- The contact form uses `mailto:`; it opens the visitor's email app and does not send anything itself.
- Category filtering exists on `/work`. No lint config is included.
- Not yet tested: browser rendering, keyboard/screen-reader behaviour, Lighthouse. `npm run build` includes the TypeScript check.

## Asset licences
See `ASSET_CREDITS.md`.
