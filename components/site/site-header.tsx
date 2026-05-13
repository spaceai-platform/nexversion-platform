import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { primaryNavigation } from "@/config/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#fbfaf7]/80 backdrop-blur-xl">
      <Container className="flex h-18 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-neutral-950 text-white shadow-lg shadow-neutral-950/10">
            <Sparkles className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[-0.03em] text-neutral-950">
              Nexversion
            </p>
            <p className="text-xs text-neutral-500">AI software studio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <a href="#architecture">View system</a>
          </Button>
          <Button asChild>
            <a href="#workspace">
              Start building
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </Container>
    </header>
  );
}
