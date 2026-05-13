"use server";

import { redirect } from "next/navigation";

import { createClient, getCurrentUser } from "@/lib/supabase/server";

function requiredText(formData: FormData, key: string) {
  const value = String(formData.get(key) || "").trim();

  if (!value) {
    throw new Error(`${key} is required.`);
  }

  return value;
}

export async function completeOnboarding(formData: FormData) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login?error=Please%20sign%20in%20to%20continue.");
  }

  const supabase = await createClient();
  const fullName = requiredText(formData, "fullName");
  const companyName = requiredText(formData, "companyName");
  const role = requiredText(formData, "role");
  const useCase = requiredText(formData, "useCase");

  const { error } = await supabase.from("profiles").upsert({
    id: user.id,
    email: user.email,
    full_name: fullName,
    company_name: companyName,
    role,
    use_case: useCase,
    onboarding_completed: true,
    updated_at: new Date().toISOString()
  });

  if (error) {
    redirect(`/onboarding?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/dashboard");
}
