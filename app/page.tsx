import { CtaSection } from "@/components/marketing/cta-section";
import { SiteHeader } from "@/components/site/site-header";
import { RefinementSection } from "@/features/ai-workspace/components/refinement-section";
import { WorkspaceShell } from "@/features/ai-workspace/components/workspace-shell";
import { ArchitectureSection } from "@/features/platform/components/architecture-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <WorkspaceShell />
      <ArchitectureSection />
      <RefinementSection />
      <CtaSection />
    </main>
  );
}
