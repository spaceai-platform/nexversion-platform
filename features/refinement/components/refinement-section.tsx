import { Check, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  refinementPreviewCards,
  refinementSignals,
} from "@/features/refinement/data/refinement-content";

export function RefinementSection() {
  return (
    <Section id="refinement">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Make It Beautiful"
          title="Refinement is a first-class generation step."
          description="The platform should not stop at working code. Nexversion adds a structured polish pass for visual hierarchy, product clarity, responsive behavior, and founder-friendly confidence."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Card className="overflow-hidden p-2">
            <div className="premium-grid rounded-[1.5rem] bg-white p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Badge variant="premium">
                    <Sparkles className="size-3.5" />
                    Refinement run
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                    Investor-grade UI pass
                  </h3>
                </div>
                <div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 shadow-sm">
                  92% polish score
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {refinementPreviewCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.35rem] border border-neutral-200 bg-[#fbfaf7]/90 p-5"
                  >
                    <p className="text-sm font-semibold tracking-[-0.03em]">
                      {card.title}
                    </p>
                    <p className="mt-1 text-sm text-neutral-500">{card.tone}</p>
                    <div className="mt-5 space-y-3">
                      {card.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm text-neutral-700 shadow-sm"
                        >
                          <Check className="size-4 text-emerald-600" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What the engine reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {refinementSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex gap-3 rounded-3xl border border-neutral-200 bg-white p-4"
                >
                  <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-sm leading-6 text-neutral-600">{signal}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
