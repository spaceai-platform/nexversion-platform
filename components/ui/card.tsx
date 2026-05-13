import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva("border text-neutral-950 transition-colors", {
  variants: {
    variant: {
      default:
        "rounded-[2rem] border-neutral-200/80 bg-white/82 shadow-[0_24px_80px_rgba(20,20,22,0.08)] backdrop-blur",
      elevated:
        "rounded-[2rem] border-neutral-200 bg-white shadow-[0_30px_90px_rgba(20,20,22,0.12)]",
      flat: "rounded-3xl border-neutral-200 bg-white shadow-sm",
      glass:
        "rounded-[2rem] border-white/70 bg-white/58 shadow-[0_24px_80px_rgba(20,20,22,0.08)] backdrop-blur-xl",
      dark:
        "rounded-[2rem] border-white/10 bg-neutral-950 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)]",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "none",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

function Card({ className, variant, padding, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2 p-6 sm:p-7", className)}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-lg font-semibold tracking-[-0.035em]", className)}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm leading-6 text-neutral-600", className)}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn("p-6 pt-0 sm:p-7 sm:pt-0", className)}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0 sm:p-7 sm:pt-0", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
};
