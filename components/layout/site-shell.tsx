import * as React from "react";

import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <main
      className={cn(
        "min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(245,205,135,0.25),transparent_34rem),radial-gradient(circle_at_top_right,rgba(205,222,255,0.32),transparent_32rem)]",
        className,
      )}
    >
      {children}
    </main>
  );
}
