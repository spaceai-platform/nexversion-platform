import { SiteShell } from "@/components/layout/site-shell";
import { SiteHeader } from "@/components/site/site-header";
import { WorkspaceSection } from "@/features/ai-workspace/components/workspace-section";
import { FinalCtaSection } from "@/features/landing/components/final-cta-section";
import { ArchitectureSection } from "@/features/platform/components/architecture-section";
import { RefinementSection } from "@/features/refinement/components/refinement-section";

export function LandingPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <WorkspaceSection />
      <ArchitectureSection />
      <RefinementSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
