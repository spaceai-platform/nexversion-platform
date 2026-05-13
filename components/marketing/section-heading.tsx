import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" && "text-center",
        align === "left" && "mx-0",
      )}
    >
      <Badge variant="premium" className={align === "center" ? "mx-auto" : ""}>
        {eyebrow}
      </Badge>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-neutral-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
