import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "left" && "mx-0",
        className,
      )}
    >
      {eyebrow ? (
        <Badge
          variant="premium"
          className={align === "center" ? "mx-auto" : undefined}
        >
          {eyebrow}
        </Badge>
      ) : null}
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.055em] text-neutral-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-neutral-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
