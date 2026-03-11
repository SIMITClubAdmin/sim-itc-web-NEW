# SIM IT Club Website — Project Structure & Documentation

This document describes the project structure, tech stack, and main areas of the codebase for the **SIM IT Club** official website.

---

## 1. Project Overview

**SIM IT Club Website** is the official site for the SIM Information Technology Club. It showcases the club’s initiatives (hackathons, workshops, events, projects), media, partners, membership, and contact information.

- **Project name:** `sim-it-club-website`
- **Version:** 0.1.0
- **Framework:** Next.js 15 (App Router) with React 19 and TypeScript

---

## 2. Tech Stack

| Category      | Technology |
|---------------|------------|
| Framework     | Next.js 15.3.1 |
| UI Library    | React 19 |
| Language      | TypeScript 5.8 |
| CMS           | Sanity (headless); Studio in `studio/` (run with `npm run studio`) |
| Styling       | Tailwind CSS 4, PostCSS |
| Animations    | Framer Motion 12 |
| Icons         | Lucide React, Radix UI Icons |
| UI Primitives | Radix UI (Slot), class-variance-authority, clsx, tailwind-merge |

---

## 3. Directory Structure

```
sim-itc-web-NEW/
├── sanity/                 # Sanity CMS schemas (used by studio/)
│   └── schemas/
│       ├── index.ts        # Schema registry
│       ├── event.ts        # Event (hackathon, workshop, etc.)
│       ├── partner.ts      # Partner (logo, name, URL)
│       └── mediaItem.ts    # Media item (image/video, optional event ref)
├── studio/                 # Sanity Studio (separate app; run with npm run studio)
│   ├── package.json        # sanity@3, react@18
│   ├── sanity.config.ts    # Studio config (uses ../sanity/schemas)
│   └── .env.example
├── .env.local.example      # Env template for Next app (SANITY_PROJECT_ID, DATASET)
│
├── public/                 # Static assets (images, media, SVGs)
│   ├── images/             # Logos, partners, media gallery assets
│   │   ├── itc-logo-dark.svg
│   │   ├── itc-logo-light.svg
│   │   ├── partner/        # Partner logos (e.g. kitchen-copilot-logo.svg)
│   │   └── media/          # Event media (e.g. hackathon videos)
│   ├── vercel.svg
│   ├── file.svg
│   └── window.svg
│
├── src/
│   ├── app/                # Next.js App Router (routes & layouts)
│   │   ├── layout.tsx      # Root layout (Navbar + children + Footer)
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles & Tailwind
│   │   ├── about-us/
│   │   ├── contact-us/
│   │   ├── join-us/
│   │   ├── media-gallery/
│   │   ├── our-partners/    # Partners from Sanity (fallback: static logos)
│   │   └── initiatives/    # Past highlights from Sanity (fallback: static list)
│   │       ├── hackathons/
│   │       ├── workshops/
│   │       ├── events/
│   │       └── projects/
│   │
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx      # Site header & navigation
│   │   ├── footer.tsx      # Site footer
│   │   └── ui/
│   │       └── button.tsx  # Shared button (CVA variants)
│   │
│   ├── lib/                # Shared utilities & Sanity
│   │   ├── utils.ts        # cn() for class names (clsx + tailwind-merge)
│   │   └── sanity/
│   │       ├── client.ts   # createClient (next-sanity); null if env missing
│   │       ├── queries.ts  # GROQ queries (events, partners, media)
│   │       └── image.ts    # urlFor() for Sanity image URLs
│   │
│   └── styles/             # Additional stylesheets
│       └── fullcalendar.css
│
├── docs/                   # Project documentation
│   ├── PROJECT-STRUCTURE.md
│   └── SANITY-SETUP.md     # Sanity CMS setup from scratch
│
├── package.json
├── package-lock.json
├── next.config.js
├── tsconfig.json
├── jsconfig.json
├── postcss.config.mjs
├── .gitignore
└── README.md
```

---

## 4. Routes & Pages

All routes are file-based under `src/app/`. Each route folder contains a `page.tsx` that defines the page UI.

| Route | Purpose |
|-------|--------|
| `/` | Home — hero, CTA to Join Us and Initiatives |
| `/about-us` | About the club |
| `/contact-us` | Contact information / form |
| `/join-us` | Membership / join CTA |
| `/media-gallery` | Media (e.g. event photos/videos) |
| `/our-partners` | Partner logos and info (from Sanity; fallback: static) |
| `/initiatives` | Overview + Past Highlights (from Sanity; fallback: static) |
| `/initiatives/hackathons` | Hackathons |
| `/initiatives/workshops` | Workshops |
| `/initiatives/events` | Events |
| `/initiatives/projects` | Projects |

---

## 5. Layout & Shared UI

- **Root layout** (`src/app/layout.tsx`): Wraps all pages with `<Navbar />`, `{children}`, and `<Footer />`. Sets metadata (title: "SIM IT Club", description).
- **Navbar** (`src/components/Navbar.tsx`): Client component with desktop/mobile menu, dropdown for Initiatives (Hackathons, Workshops, Events, Projects), and links to Home, About Us, Media Gallery, Our Partners, Join Us, Contact Us. Uses `usePathname()` to close dropdown on navigation.
- **Footer** (`src/components/footer.tsx`): Client component with logo, social links (GitHub, LinkedIn, Instagram), quick links, and Framer Motion scroll animations.

---

## 6. Components

| Component | Path | Description |
|-----------|------|-------------|
| **Navbar** | `src/components/Navbar.tsx` | Header with logo, nav items, Initiatives dropdown, mobile menu |
| **Footer** | `src/components/footer.tsx` | Footer with logos, socials, quick links |
| **Button** | `src/components/ui/button.tsx` | Reusable button using Radix Slot, CVA (variants: default, outline, ghost, etc.), and `cn()` from `@/lib/utils` |

**Utilities:** `src/lib/utils.ts` exports `cn()` for merging class names (clsx + tailwind-merge), used by the Button and other UI components.

---

## 7. Styling

- **Global:** `src/app/globals.css` — `@import "tailwindcss"`, CSS variables for `--background` / `--foreground` (black/white), and `body` styles.
- **Extra styles:** `src/styles/fullcalendar.css` — used for calendar-related UI (e.g. initiatives calendar placeholder).
- **Tailwind:** Configured via `@tailwindcss/postcss` and `postcss.config.mjs`. Path alias `@/*` points to `src/*` (see `tsconfig.json`).

---

## 8. Configuration

- **Next.js** (`next.config.js`): Image config with `remotePatterns` for `https://via.placeholder.com` (placeholder images).
- **TypeScript** (`tsconfig.json`): `baseUrl: "src"`, path alias `"@/*": ["./*"]` for imports like `@/components/...`, `@/lib/utils`.
- **JS** (`jsconfig.json`): Aligns with TS path setup if using JS elsewhere.

---

## 9. Scripts (from package.json)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (default: http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run Next.js lint |

---

## 10. Public Assets

- **Logos:** `public/images/itc-logo-dark.svg`, `itc-logo-light.svg`, and other branding under `public/images/`.
- **Partners:** `public/images/partner/` (e.g. `kitchen-copilot-logo.svg`).
- **Media:** `public/images/media/` (e.g. hackathon video: `simitc2024-hackathon.mp4`).
- Home hero image referenced in code: `/images/omnitool-img.jpeg` (ensure this file exists under `public/images/` if used).

---

## 11. Conventions

- **App Router:** All pages live under `src/app/` with `page.tsx` per route.
- **Client components:** Use `'use client'` where needed (e.g. Navbar, Footer, Home page for interactivity).
- **Imports:** Prefer `@/` for app and component imports (e.g. `@/components/navbar`, `@/components/ui/button`).
- **Theming:** Dark theme by default (black background, white text) via `globals.css` and Tailwind classes.

---

## 12. Optional Next Steps

- Replace or implement calendar data/UI on `/initiatives` if the placeholder is temporary.
- Add environment variables (e.g. for analytics or forms) and document them in README or `.env.example`.
- Consider adding a `docs/` README that links to this file for new contributors.

For getting started and deployment, see the root **README.md**.
