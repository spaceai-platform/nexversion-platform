import {
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Clock3,
  Database,
  KeyRound,
  Rocket,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generationModules, workspaceSteps } from "@/features/platform/data";
import { cn } from "@/lib/utils";

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

export function WorkspaceShell() {
  return (
    <section id="workspace" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-amber-200/30 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <Badge variant="blue">
            <Sparkles className="size-3.5" />
            AI workspace refinement
          </Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.07em] text-neutral-950 sm:text-6xl lg:text-7xl">
            Create premium SaaS products from one calm workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Nexversion turns a founder brief into architecture, database,
            authentication, shadcn components, Vercel deployment steps, and a
            Make It Beautiful pass designed for investor-grade polish.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              Generate app blueprint
              <ArrowRight className="size-4" />
            </Button>
            <Button size="lg" variant="secondary">
              Explore architecture
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["6", "core systems"],
              ["<60s", "brief to plan"],
              ["100%", "typed stack"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-neutral-200 bg-white/70 p-4 shadow-sm"
              >
                <p className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
                  {value}
                </p>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

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
              {workspaceSteps.map((step) => {
                const Icon = statusIcons[step.status];

                return (
                  <div
                    key={step.label}
                    className="grid gap-3 rounded-3xl border border-neutral-200 bg-white/80 p-4 shadow-sm sm:grid-cols-[auto_1fr]"
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
                        <p className="font-semibold tracking-[-0.03em]">
                          {step.label}
                        </p>
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                          {step.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-neutral-600">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Supabase", icon: Database },
                { label: "Auth", icon: KeyRound },
                { label: "Vercel", icon: Rocket },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-neutral-200 bg-white/75 p-4"
                >
                  <item.icon className="size-5 text-neutral-600" />
                  <p className="mt-3 text-sm font-semibold tracking-[-0.03em]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    Ready for generated config and guarded runtime checks.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div
        id="generation"
        className="mx-auto mt-12 grid w-full max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8"
      >
        {generationModules.map((module) => (
          <Card key={module.name} className="p-1 shadow-sm">
            <CardHeader>
              <div className={cn("mb-2 h-1.5 w-12 rounded-full", module.accent)} />
              <CardTitle>{module.name}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {module.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
