import * as React from "react";

import { cn } from "@/lib/utils";

function Field({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-slot="field" className={cn("grid gap-2", className)} {...props} />
  );
}

function Label({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-sm font-medium tracking-[-0.01em] text-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

function FieldHint({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="field-hint"
      className={cn("text-xs leading-5 text-neutral-500", className)}
      {...props}
    />
  );
}

function FieldError({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="field-error"
      className={cn("text-xs leading-5 text-rose-600", className)}
      {...props}
    />
  );
}

export { Field, FieldError, FieldHint, Label };
