# Nexversion Platform

Nexversion is an AI software creation platform foundation for generating,
refining, authenticating, deploying, and scaling modern SaaS applications.

This first implementation establishes a clean Next.js architecture, a premium
light UI direction, shadcn-style component primitives, and integration seams for
OpenAI, Supabase, and Vercel.

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
components/ui/               Reusable shadcn-style primitives
components/marketing/        Shared marketing/presentation components
components/site/             Global shell components
features/ai-workspace/       AI generation and refinement workspace UI
features/platform/           Platform architecture data and sections
lib/ai/                      OpenAI client factory and prompt contracts
lib/supabase/                Supabase browser/admin client factories
types/                       Shared product/platform contracts
```

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
