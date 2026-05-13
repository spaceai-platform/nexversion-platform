import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FinalCtaSection() {
  return (
    <Section spacing="sm" className="pb-16">
      <Container>
        <Card
          variant="dark"
          className="overflow-hidden p-8 sm:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-100">
                Nexversion platform foundation
              </p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">
                Ready for generated apps, Supabase-backed data, and Vercel
                release loops.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
                This foundation creates the first scalable surface for iterating
                toward Base44/Lovable-style AI software creation while keeping
                the codebase modular and production-minded.
              </p>
            </div>
            <Button asChild size="lg" variant="premium">
              <a href="#workspace">
                Open workspace
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
