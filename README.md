# Nexversion Platform

Next.js application foundation with Supabase Auth.

## Authentication features

- Email/password sign up and sign in
- Google OAuth sign in through Supabase Auth
- Cookie-backed session persistence with `@supabase/ssr`
- Middleware-protected routes for `/dashboard` and `/onboarding`
- Onboarding flow backed by a `profiles` table with row-level security

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables and fill in your Supabase project values:

   ```bash
   cp .env.example .env.local
   ```

3. Apply the Supabase migration in `supabase/migrations/0001_auth_profiles.sql`.

4. Enable Google as an auth provider in Supabase and add this redirect URL:

   ```text
   http://localhost:3000/auth/callback
   ```

5. Start the app:

   ```bash
   npm run dev
   ```
