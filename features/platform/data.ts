import {
  Bot,
  Brush,
  Database,
  KeyRound,
  Rocket,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from "lucide-react";

import type {
  GenerationModule,
  PlatformPillar,
  WorkspaceStep,
} from "@/types/platform";

export const platformPillars: PlatformPillar[] = [
  {
    title: "AI app generation",
    description:
      "Convert founder prompts into product specs, page maps, component trees, and implementation-ready tickets.",
    icon: Bot,
    metric: "Prompt to product",
  },
  {
    title: "Database generation",
    description:
      "Create Supabase schemas, RLS policies, seed plans, and growth-safe data boundaries from the app blueprint.",
    icon: Database,
    metric: "Schema-first",
  },
  {
    title: "Auth system",
    description:
      "Design tenant-aware onboarding, user roles, invitation flows, and secure session surfaces by default.",
    icon: KeyRound,
    metric: "Founder-ready",
  },
  {
    title: "Deployment infrastructure",
    description:
      "Prepare Vercel previews, environment checks, release gates, and production readiness signals in one flow.",
    icon: Rocket,
    metric: "Ship loop",
  },
];

export const workspaceSteps: WorkspaceStep[] = [
  {
    label: "Brief",
    status: "complete",
    detail: "Audience, wedge, monetization, and success metric captured.",
  },
  {
    label: "Architecture",
    status: "active",
    detail: "Next.js routes, modules, Supabase schema, and auth policies drafted.",
  },
  {
    label: "Build",
    status: "queued",
    detail: "Generate app shell, shadcn components, and integration seams.",
  },
  {
    label: "Beautify",
    status: "queued",
    detail: "Run premium UI pass across hierarchy, spacing, states, and tone.",
  },
  {
    label: "Deploy",
    status: "queued",
    detail: "Provision Vercel preview, validate env, and prepare launch checklist.",
  },
];

export const generationModules: GenerationModule[] = [
  {
    name: "Product blueprint",
    description: "Founder problem, ICP, activation path, pricing, and core screens.",
    accent: "bg-neutral-950",
    items: ["ICP brief", "Feature map", "Success metrics"],
  },
  {
    name: "System architecture",
    description: "Route groups, feature modules, services, data access, and API contracts.",
    accent: "bg-sky-500",
    items: ["Clean folders", "Typed contracts", "Server actions"],
  },
  {
    name: "Data and auth",
    description: "Supabase schema, RLS policies, onboarding, organizations, and roles.",
    accent: "bg-emerald-500",
    items: ["Tables", "Policies", "Sessions"],
  },
  {
    name: "Make It Beautiful",
    description: "Refinement engine for premium SaaS polish, responsive states, and copy.",
    accent: "bg-amber-500",
    items: ["Visual rhythm", "Empty states", "Investor-grade polish"],
  },
];

export const foundationPrinciples = [
  {
    title: "Feature-first modules",
    description:
      "Every product capability owns its UI, data contracts, actions, and tests under a clear feature boundary.",
    icon: Waypoints,
  },
  {
    title: "Composable primitives",
    description:
      "shadcn-style primitives form a stable design API before larger product components are introduced.",
    icon: Sparkles,
  },
  {
    title: "Secure integration seams",
    description:
      "OpenAI and Supabase clients are isolated behind small factories so runtime secrets never leak into UI code.",
    icon: ShieldCheck,
  },
  {
    title: "Premium refinement loop",
    description:
      "The workspace treats beauty as a system: hierarchy, motion, density, copy, responsiveness, and trust.",
    icon: Brush,
  },
];
