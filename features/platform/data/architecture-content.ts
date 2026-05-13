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
  ArchitectureFolderGroup,
  FoundationPrinciple,
  PlatformPillar,
} from "@/types/platform";

export const architectureFolderGroups: ArchitectureFolderGroup[] = [
  {
    path: "app/",
    role: "Routes, layouts, metadata, API endpoints, and server-first entrypoints.",
  },
  {
    path: "components/layout/",
    role: "Reusable shell, container, section, and heading wrappers.",
  },
  {
    path: "components/ui/",
    role: "Reusable primitives for buttons, cards, badges, forms, and modals.",
  },
  {
    path: "features/",
    role: "Domain-owned product capabilities with local data, state, and UI.",
  },
  {
    path: "lib/",
    role: "Framework adapters, AI clients, Supabase factories, and utilities.",
  },
  {
    path: "types/",
    role: "Shared contracts that keep generated systems typed end to end.",
  },
];

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

export const foundationPrinciples: FoundationPrinciple[] = [
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
