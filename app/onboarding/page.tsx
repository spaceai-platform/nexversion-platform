import { redirect } from "next/navigation";

import { completeOnboarding } from "@/app/onboarding/actions";
import { createClient, getCurrentUser } from "@/lib/supabase/server";

type OnboardingPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function OnboardingPage({ searchParams }: OnboardingPageProps) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?next=/onboarding");
  }

  const params = await searchParams;
  const supabase = await createClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.onboarding_completed) {
    redirect("/dashboard");
  }

  return (
    <main className="page-shell">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark" />
          Nexversion
        </div>
      </nav>

      <section className="hero">
        <div>
          <h1>Tell us about your workspace.</h1>
          <p className="lead">
            This onboarding profile is stored in Supabase and used to gate access to the protected
            dashboard.
          </p>
        </div>

        <form action={completeOnboarding} className="panel stack">
          <div>
            <h2>Complete onboarding</h2>
            <p className="muted">Signed in as {user.email}</p>
          </div>
          {params.error ? <div className="message error">{params.error}</div> : null}
          <div className="field">
            <label htmlFor="fullName">Full name</label>
            <input
              defaultValue={profile?.full_name || user.user_metadata.full_name || ""}
              id="fullName"
              name="fullName"
              required
              type="text"
            />
          </div>
          <div className="field">
            <label htmlFor="companyName">Company name</label>
            <input
              defaultValue={profile?.company_name || ""}
              id="companyName"
              name="companyName"
              required
              type="text"
            />
          </div>
          <div className="field">
            <label htmlFor="role">Role</label>
            <input defaultValue={profile?.role || ""} id="role" name="role" required type="text" />
          </div>
          <div className="field">
            <label htmlFor="useCase">Primary use case</label>
            <textarea
              defaultValue={profile?.use_case || ""}
              id="useCase"
              name="useCase"
              required
            />
          </div>
          <button className="button" type="submit">
            Finish onboarding
          </button>
        </form>
      </section>
    </main>
  );
}
