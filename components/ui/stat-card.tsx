import * as React from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
  label: string;
};

export function StatCard({ value, label, className, ...props }: StatCardProps) {
  return (
    <Card
      variant="flat"
      className={cn("bg-white/70 p-4", className)}
      {...props}
    >
      <p className="text-2xl font-semibold tracking-[-0.04em] text-neutral-950">
        {value}
      </p>
      <p className="mt-1 text-xs font-medium text-neutral-500">{label}</p>
    </Card>
  );
}
