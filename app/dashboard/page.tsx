import { redirect } from "next/navigation";

import { signOut } from "@/app/dashboard/actions";
import { createClient, getCurrentUser } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?next=/dashboard");
  }

  const supabase = await createClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile?.onboarding_completed) {
    redirect("/onboarding");
  }

  return (
    <main className="page-shell">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark" />
          Nexversion
        </div>
        <form action={signOut}>
          <button className="button-ghost" type="submit">
            Sign out
          </button>
        </form>
      </nav>

      <section className="grid">
        <div className="panel">
          <p className="muted">Protected dashboard</p>
          <h1>Welcome, {profile.full_name || user.email}.</h1>
          <p className="lead">
            Your Supabase session is active and this route is only available after onboarding is
            complete.
          </p>
        </div>

        <div className="grid two">
          <div className="panel">
            <h2>Account</h2>
            <ul className="card-list">
              <li>Email: {user.email}</li>
              <li>Role: {profile.role}</li>
              <li>Company: {profile.company_name}</li>
            </ul>
          </div>
          <div className="panel">
            <h2>Workspace intent</h2>
            <p className="lead">{profile.use_case}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
