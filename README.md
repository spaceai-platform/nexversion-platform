# Nexversion Platform

Nexversion is an AI software creation platform foundation for generating,
refining, authenticating, deploying, and scaling modern SaaS applications.

This implementation establishes a scalable Next.js architecture, a premium
light design system, shadcn-style component primitives, feature-owned data/state,
and integration seams for OpenAI, Supabase, and Vercel.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- shadcn/ui-style local primitives
- Supabase
- OpenAI
- Vercel

## Architecture

```txt
app/                         Route tree, layouts, API endpoints
components/layout/           Container, section, heading, and page shell wrappers
components/site/             Global navigation and shell-level components
components/ui/               Buttons, badges, cards, forms, modals, stats
config/                      Navigation and app-level constants
features/ai-workspace/       Workspace UI, content data, and reducer state
features/landing/            Route composition for the marketing landing page
features/platform/           Architecture sections and platform content
features/refinement/         Make It Beautiful content and UI
lib/ai/                      OpenAI client factory and prompt contracts
lib/supabase/                Supabase browser/admin client factories
types/                       Shared product/platform contracts
```

## UI system

- Layout rhythm flows through `Container`, `Section`, `SectionHeading`, and
  `SiteShell`.
- Core variants live in reusable primitives: `Button`, `Badge`, `Card`,
  `Input`, `Textarea`, `Field`, `Modal`, and `StatCard`.
- Feature components consume domain data from colocated `data/` folders instead
  of embedding repeated content arrays in JSX.
- Workspace state is prepared in `features/ai-workspace/state/workspace-store.ts`
  as a reducer contract that can back future client interactions without
  coupling UI to API implementation details.

## Platform direction

The product is structured around six scalable systems:

1. UI structure and premium responsive layouts
2. Modular component architecture
3. AI-powered app blueprint generation
4. Supabase database and authentication generation
5. Vercel deployment infrastructure
6. "Make It Beautiful" refinement engine

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and provide keys when enabling live AI or
Supabase flows.

```bash
OPENAI_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```
