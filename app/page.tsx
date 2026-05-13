import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <nav className="nav">
        <Link className="brand" href="/">
          <span className="brand-mark" />
          Nexversion
        </Link>
        <div className="button-row">
          <Link className="button-ghost" href="/login">
            Sign in
          </Link>
          <Link className="button" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div>
          <h1>Auth-ready platform foundation.</h1>
          <p className="lead">
            A scalable Supabase Auth integration with email login, Google OAuth, server-side route
            protection, onboarding, and session persistence.
          </p>
          <div className="button-row" style={{ marginTop: 28 }}>
            <Link className="button" href="/login">
              Get started
            </Link>
            <Link className="button-ghost" href="/dashboard">
              View protected area
            </Link>
          </div>
        </div>

        <div className="panel">
          <h2>Included auth surface</h2>
          <ul className="card-list">
            <li>Supabase SSR clients for browser, server actions, and middleware</li>
            <li>Persistent auth cookies refreshed before protected route rendering</li>
            <li>Account onboarding profile persisted in Postgres with RLS policies</li>
            <li>Dashboard guarded behind authentication and completed onboarding</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
