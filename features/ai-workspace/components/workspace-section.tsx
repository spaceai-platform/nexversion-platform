import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GenerationModulesGrid } from "@/features/ai-workspace/components/generation-modules-grid";
import { WorkspaceHero } from "@/features/ai-workspace/components/workspace-hero";
import { WorkspacePreview } from "@/features/ai-workspace/components/workspace-preview";

export function WorkspaceSection() {
  return (
    <Section id="workspace" className="overflow-hidden">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-amber-200/30 blur-3xl" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <WorkspaceHero />
          <WorkspacePreview />
        </div>
        <GenerationModulesGrid />
      </Container>
    </Section>
  );
}
