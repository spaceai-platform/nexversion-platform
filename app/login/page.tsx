import Link from "next/link";

import { signInWithGoogle, signInWithPassword, signUpWithPassword } from "@/app/login/actions";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
    success?: string;
    next?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const next = params.next && params.next.startsWith("/") ? params.next : "/dashboard";

  return (
    <main className="page-shell">
      <nav className="nav">
        <Link className="brand" href="/">
          <span className="brand-mark" />
          Nexversion
        </Link>
      </nav>

      <section className="hero">
        <div>
          <h1>Secure access for every workspace.</h1>
          <p className="lead">
            Sign in with email or Google. Sessions are persisted through Supabase Auth cookies and
            refreshed at the edge for protected routes.
          </p>
          <ul className="card-list">
            <li>Email/password sign in and account creation</li>
            <li>Google OAuth callback handling</li>
            <li>Protected dashboard with onboarding enforcement</li>
          </ul>
        </div>

        <div className="panel stack">
          <div className="stack">
            <h2>Welcome back</h2>
            <p className="muted">Use your Nexversion account to continue.</p>
            {params.error ? <div className="message error">{params.error}</div> : null}
            {params.success ? <div className="message success">{params.success}</div> : null}
          </div>

          <form action={signInWithGoogle}>
            <input name="next" type="hidden" value={next} />
            <button className="button-secondary" type="submit">
              Continue with Google
            </button>
          </form>

          <form action={signInWithPassword} className="stack">
            <input name="next" type="hidden" value={next} />
            <div className="field">
              <label htmlFor="signin-email">Email</label>
              <input id="signin-email" name="email" required type="email" />
            </div>
            <div className="field">
              <label htmlFor="signin-password">Password</label>
              <input id="signin-password" minLength={6} name="password" required type="password" />
            </div>
            <button className="button" type="submit">
              Sign in with email
            </button>
          </form>

          <div className="stack">
            <p className="muted">New to Nexversion?</p>
            <form action={signUpWithPassword} className="stack">
              <div className="field">
                <label htmlFor="signup-name">Full name</label>
                <input id="signup-name" name="fullName" type="text" />
              </div>
              <div className="field">
                <label htmlFor="signup-email">Email</label>
                <input id="signup-email" name="email" required type="email" />
              </div>
              <div className="field">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  minLength={6}
                  name="password"
                  required
                  type="password"
                />
              </div>
              <button className="button-ghost" type="submit">
                Create account
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
