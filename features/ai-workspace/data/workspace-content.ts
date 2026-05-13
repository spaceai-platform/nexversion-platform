import { Database, KeyRound, Rocket } from "lucide-react";

import type {
  GenerationModule,
  IntegrationModule,
  WorkspaceMetric,
  WorkspaceStep,
} from "@/types/platform";

export const workspaceMetrics: WorkspaceMetric[] = [
  { value: "6", label: "core systems" },
  { value: "<60s", label: "brief to plan" },
  { value: "100%", label: "typed stack" },
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

export const integrationModules: IntegrationModule[] = [
  {
    label: "Supabase",
    icon: Database,
    description: "Generated schema, policies, seed data, and typed clients.",
  },
  {
    label: "Auth",
    icon: KeyRound,
    description: "Tenant-aware onboarding, invitations, sessions, and roles.",
  },
  {
    label: "Vercel",
    icon: Rocket,
    description: "Preview environments, release checks, and deployment notes.",
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
    description:
      "Route groups, feature modules, services, data access, and API contracts.",
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
    description:
      "Refinement engine for premium SaaS polish, responsive states, and copy.",
    accent: "bg-amber-500",
    items: ["Visual rhythm", "Empty states", "Investor-grade polish"],
  },
];
