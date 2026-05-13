"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import { getSiteUrl } from "@/lib/env";

function getSafeNext(formData: FormData) {
  const next = formData.get("next");

  if (typeof next !== "string" || !next.startsWith("/") || next.startsWith("//")) {
    return "/dashboard";
  }

  return next;
}

function encodedRedirect(pathname: string, type: "error" | "success", message: string) {
  const params = new URLSearchParams({ [type]: message });
  redirect(`${pathname}?${params.toString()}`);
}

export async function signInWithPassword(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = getSafeNext(formData);

  if (!email || !password) {
    encodedRedirect("/login", "error", "Enter your email and password.");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    encodedRedirect("/login", "error", error.message);
  }

  redirect(next);
}

export async function signUpWithPassword(formData: FormData) {
  const supabase = await createClient();
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const fullName = String(formData.get("fullName") || "").trim();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    encodedRedirect("/login", "error", "Enter your email and password.");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName
      },
      emailRedirectTo: `${getSiteUrl(origin ?? undefined)}/auth/callback?next=/onboarding`
    }
  });

  if (error) {
    encodedRedirect("/login", "error", error.message);
  }

  if (!data.session) {
    encodedRedirect("/login", "success", "Check your email to confirm your account.");
  }

  redirect("/onboarding");
}

export async function signInWithGoogle(formData: FormData) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");
  const next = getSafeNext(formData);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${getSiteUrl(origin ?? undefined)}/auth/callback?next=${encodeURIComponent(next)}`
    }
  });

  if (error || !data.url) {
    encodedRedirect("/login", "error", error?.message || "Could not start Google sign in.");
  }

  redirect(data.url);
}
