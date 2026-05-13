import type { LucideIcon } from "lucide-react";

export type PlatformPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
};

export type FoundationPrinciple = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ArchitectureFolderGroup = {
  path: string;
  role: string;
};

export type WorkspaceStep = {
  label: string;
  status: "complete" | "active" | "queued";
  detail: string;
};

export type WorkspaceMetric = {
  value: string;
  label: string;
};

export type IntegrationModule = {
  label: string;
  description: string;
  icon: LucideIcon;
};

export type GenerationModule = {
  name: string;
  description: string;
  accent: string;
  items: string[];
};

export type BlueprintRequest = {
  prompt: string;
  audience?: string;
  stack?: string[];
};
