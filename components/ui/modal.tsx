import * as React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
};

function Modal({ open = true, className, ...props }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      data-slot="modal"
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-neutral-950/35 p-4 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}

function ModalContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="modal-content"
      className={cn(
        "w-full max-w-lg rounded-[2rem] border border-neutral-200 bg-white p-6 text-neutral-950 shadow-[0_30px_90px_rgba(0,0,0,0.24)]",
        className,
      )}
      {...props}
    />
  );
}

function ModalHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="modal-header"
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function ModalTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      data-slot="modal-title"
      className={cn("text-xl font-semibold tracking-[-0.04em]", className)}
      {...props}
    />
  );
}

function ModalDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="modal-description"
      className={cn("text-sm leading-6 text-neutral-600", className)}
      {...props}
    />
  );
}

function ModalFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="modal-footer"
      className={cn(
        "mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function ModalCloseAction({
  children = "Close",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button type="button" variant="secondary" {...props}>
      {children}
    </Button>
  );
}

export {
  Modal,
  ModalCloseAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
};
