import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-[-0.01em] transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-950 text-white shadow-[0_18px_45px_rgba(12,12,13,0.18)] hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_22px_55px_rgba(12,12,13,0.22)]",
        secondary:
          "border border-neutral-200 bg-white text-neutral-950 shadow-sm hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50",
        outline:
          "border border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-100/70",
        ghost: "text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-950",
        link: "h-auto rounded-none px-0 text-neutral-950 underline-offset-4 hover:underline",
        premium:
          "border border-amber-200/80 bg-gradient-to-r from-amber-50 via-white to-rose-50 text-neutral-950 shadow-[0_16px_40px_rgba(181,118,54,0.12)] hover:-translate-y-0.5 hover:border-amber-300",
        quiet:
          "bg-neutral-100 text-neutral-800 hover:bg-neutral-200/80 hover:text-neutral-950",
      },
      size: {
        default: "h-11 px-5 text-sm [&_svg]:size-4",
        sm: "h-9 px-4 text-xs [&_svg]:size-3.5",
        lg: "h-13 px-7 text-base [&_svg]:size-4",
        xl: "h-14 px-8 text-base [&_svg]:size-5",
        icon: "size-10 text-sm [&_svg]:size-4",
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
