import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  architectureFolderGroups,
  foundationPrinciples,
  platformPillars,
} from "@/features/platform/data/architecture-content";

export function ArchitectureSection() {
  return (
    <Section id="architecture">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <SectionHeading
            eyebrow="Clean architecture"
            title="A scalable foundation for generated software."
            description="The platform starts with clear seams between product UI, AI orchestration, generated artifacts, Supabase access, and deployment workflows."
          />
          <Card variant="dark" className="p-2">
            <div className="rounded-[1.5rem] bg-neutral-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-neutral-300">
                  scalable folder map
                </p>
                <ArrowUpRight className="size-4 text-neutral-400" />
              </div>
              <div className="mt-5 space-y-3">
                {architectureFolderGroups.map((group) => (
                  <div
                    key={group.path}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-mono text-sm text-amber-100">
                      {group.path}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-300">
                      {group.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {foundationPrinciples.map((principle) => (
            <Card key={principle.title} className="shadow-sm">
              <CardHeader>
                <div className="flex size-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-700">
                  <principle.icon className="size-5" />
                </div>
                <CardTitle>{principle.title}</CardTitle>
                <CardDescription>{principle.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platformPillars.map((pillar) => (
            <Card key={pillar.title} className="group overflow-hidden shadow-sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f8efe1] text-neutral-800 transition group-hover:scale-105">
                    <pillar.icon className="size-5" />
                  </div>
                  <Badge>{pillar.metric}</Badge>
                </div>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-1.5 rounded-full bg-neutral-100">
                  <div className="h-full w-2/3 rounded-full bg-neutral-950" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
