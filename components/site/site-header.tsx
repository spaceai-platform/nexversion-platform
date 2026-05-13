import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Workspace", href: "#workspace" },
  { label: "Architecture", href: "#architecture" },
  { label: "Generation", href: "#generation" },
  { label: "Refinement", href: "#refinement" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-[#fbfaf7]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="#architecture">View system</Link>
          </Button>
          <Button asChild>
            <Link href="#workspace">
              Start building
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
