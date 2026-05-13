import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[-0.01em] transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-950 text-white shadow-[0_18px_45px_rgba(12,12,13,0.18)] hover:bg-neutral-800",
        secondary:
          "border border-neutral-200 bg-white text-neutral-950 shadow-sm hover:bg-neutral-50",
        ghost: "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950",
        premium:
          "border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-rose-50 text-neutral-950 shadow-[0_16px_40px_rgba(181,118,54,0.12)] hover:border-amber-300",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
