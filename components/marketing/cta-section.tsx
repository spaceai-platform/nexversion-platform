import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 p-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-100">
              Nexversion platform foundation
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Ready for generated apps, Supabase-backed data, and Vercel
              release loops.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-300">
              This foundation creates the first scalable surface for iterating
              toward Base44/Lovable-style AI software creation while keeping the
              codebase modular and production-minded.
            </p>
          </div>
          <Button asChild size="lg" variant="premium">
            <a href="#workspace">
              Open workspace
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
