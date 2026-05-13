import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    spacing: {
      none: "",
      sm: "py-14 sm:py-16",
      default: "py-20 sm:py-28",
      lg: "py-24 sm:py-32",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "main";
}

export function Section({
  as: Comp = "section",
  className,
  spacing,
  ...props
}: SectionProps) {
  return (
    <Comp
      data-slot="section"
      className={cn(sectionVariants({ spacing, className }))}
      {...props}
    />
  );
}

export { sectionVariants };
