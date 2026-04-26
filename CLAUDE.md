# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Skills to invoke

**Any frontend/UI work** (new component, page, visual change) → invoke `frontend-design` skill first.

## Commands

```bash
pnpm dev        # dev server (localhost:4321)
pnpm build      # production build
pnpm preview    # preview build
```

No test runner. No lint script. Prettier via `.prettierrc`.

## Architecture

Astro SSG + React islands. Astro owns routing and static generation; React handles interactivity via `client:load`.

**Pages**
- `src/pages/index.astro` — single entry, renders `<TabsToggle client:load />`
- `src/pages/project-details/[id].astro` — static detail pages, IDs from `src/data/projects.json`

**Data flow** — `src/data/projects.json` is the single source of truth. `ProjectContainer` splits `status: "done"` vs `status: "wip"`. Project images are mapped by ID in both `ProjectContainer.tsx` and `[id].astro`; adding a project requires updating both.

**MotionComponents** (`src/components/MotionComponents/`) — thin `motion/react` wrappers with fade-in. Use these instead of raw `motion.*` elements.

**Contact form** — EmailJS; requires env vars `PUBLIC_SERVICE_ID`, `PUBLIC_TEMPLATE_ID`, `PUBLIC_PUBLIC_KEY` (Astro `PUBLIC_` prefix for client exposure), re-exported from `src/config/env.ts`.

**Theme** — system preference only, no toggle. Applied via inline script in `Layout.astro` using `data-theme` attribute.

**Tailwind v4** — configured via `@tailwindcss/vite` plugin; no `tailwind.config.*` file.

**UI components** in `src/components/ui/` are shadcn/ui (Radix-based). Path alias `@/` → `src/`.
