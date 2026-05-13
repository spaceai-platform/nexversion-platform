import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";
import { workspaceMetrics } from "@/features/ai-workspace/data/workspace-content";

export function WorkspaceHero() {
  return (
    <div className="flex flex-col justify-center">
      <Badge variant="blue">
        <Sparkles className="size-3.5" />
        AI workspace refinement
      </Badge>
      <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.075em] text-neutral-950 sm:text-6xl lg:text-7xl">
        Create premium SaaS products from one calm workspace.
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-neutral-600">
        Nexversion turns a founder brief into architecture, database,
        authentication, shadcn components, Vercel deployment steps, and a Make It
        Beautiful pass designed for investor-grade polish.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button size="xl">
          Generate app blueprint
          <ArrowRight className="size-4" />
        </Button>
        <Button size="xl" variant="secondary">
          Explore architecture
        </Button>
      </div>
      <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
        {workspaceMetrics.map((metric) => (
          <StatCard
            key={metric.label}
            value={metric.value}
            label={metric.label}
          />
        ))}
      </div>
    </div>
  );
}
