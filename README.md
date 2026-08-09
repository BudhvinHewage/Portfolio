# Portfolio

Personal portfolio site — built with Next.js (static export), TypeScript, and Tailwind CSS.

## Stack

- **Frontend:** Next.js (SSG via static export), React, TypeScript, Tailwind CSS
- **Deployment:** Docker (nginx), running on a self-hosted Proxmox LXC
- **CI/CD:** Self-hosted GitHub Actions runner — builds and redeploys automatically on every push to `main`

## Features

- Fully static export — no server-rendered pages, no API routes, deployable to any static file host
- Project pages with a modal detail view: image gallery, categorized/color-coded tech tags, breakdown, outcomes, and a link to the project's own repo
- Skills section on the About page grouped and color-coded automatically by category — driven entirely from a single shared tag/category source, no manual duplication between project tags and skill listings
- Dark mode (`next-themes`), Radix UI primitives for accessible interactive components

## Content is config-driven

All real content lives in `src/config/`, not scattered through components:

- `projects.ts` — every project entry (title, tags, gallery, breakdown, outcomes, repo link)
- `about.ts` — bio, experience, education, interests
- `techCategories.ts` — the single source of truth mapping every tag/skill to a category and a color; both project tag pills and the About page's Skills section read from this file, so adding a new tag here makes it appear correctly colored everywhere it's used, automatically

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/BudhvinHewage/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Run the dev server
   ```
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).
4. Build the static export
   ```
   npm run build
   ```
   Output goes to `out/` — this is what actually gets deployed, not `.next/`.

## Deployment

Pushing to `main` triggers a self-hosted GitHub Actions runner, installed directly inside the same Docker LXC the site runs on. The workflow builds the static export, builds a Docker image (multi-stage: Node for the build, `nginx:alpine` for serving), and redeploys locally — no container registry round-trip, since build and deploy happen on the same machine.
