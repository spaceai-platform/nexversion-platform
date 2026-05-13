import type { LucideIcon } from "lucide-react";

export type PlatformPillar = {
  title: string;
  description: string;
  icon: LucideIcon;
  metric: string;
};

export type WorkspaceStep = {
  label: string;
  status: "complete" | "active" | "queued";
  detail: string;
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
