import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

import type { Database } from "@/lib/database.types";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/env";

const protectedPrefixes = ["/dashboard", "/onboarding"];
const authPrefixes = ["/login"];

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request
  });

  const supabase = createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({
          request
        });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      }
    }
  });

  const {
    data: { user }
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isProtectedRoute = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
  const isAuthRoute = authPrefixes.some((prefix) => pathname.startsWith(prefix));

  if (isProtectedRoute && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/login";
    redirectUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (isAuthRoute && user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}
