import { CheckCircle2, CircleDot, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  integrationModules,
  workspaceSteps,
} from "@/features/ai-workspace/data/workspace-content";
import { cn } from "@/lib/utils";
import type { WorkspaceStep } from "@/types/platform";

const statusIcons = {
  complete: CheckCircle2,
  active: CircleDot,
  queued: Clock3,
};

const statusStyles = {
  complete: "border-emerald-200 bg-emerald-50 text-emerald-700",
  active: "border-neutral-950 bg-neutral-950 text-white",
  queued: "border-neutral-200 bg-white text-neutral-500",
};

function WorkspaceStepCard({ step }: { step: WorkspaceStep }) {
  const Icon = statusIcons[step.status];

  return (
    <Card
      variant="flat"
      className="grid gap-3 bg-white/80 p-4 sm:grid-cols-[auto_1fr]"
    >
      <div
        className={cn(
          "flex size-10 items-center justify-center rounded-2xl border",
          statusStyles[step.status],
        )}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <div className="flex items-center justify-between gap-3">
          <p className="font-semibold tracking-[-0.03em]">{step.label}</p>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
            {step.status}
          </span>
        </div>
        <p className="mt-1 text-sm leading-6 text-neutral-600">{step.detail}</p>
      </div>
    </Card>
  );
}

export function WorkspacePreview() {
  return (
    <Card className="relative overflow-hidden p-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.22),transparent_30%),radial-gradient(circle_at_100%_20%,rgba(14,165,233,0.15),transparent_28%)]" />
      <div className="relative rounded-[1.6rem] border border-neutral-200 bg-[#fbfaf7]/85 p-4 sm:p-5">
        <div className="flex flex-col gap-4 border-b border-neutral-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[-0.03em]">
              Workspace run
            </p>
            <p className="text-sm text-neutral-500">
              Founder SaaS CRM for boutique agencies
            </p>
          </div>
          <Badge variant="success">Architecture active</Badge>
        </div>

        <div className="mt-5 grid gap-3">
          {workspaceSteps.map((step) => (
            <WorkspaceStepCard key={step.label} step={step} />
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {integrationModules.map((item) => (
            <Card key={item.label} variant="flat" className="bg-white/75 p-4">
              <item.icon className="size-5 text-neutral-600" />
              <p className="mt-3 text-sm font-semibold tracking-[-0.03em]">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-neutral-500">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
