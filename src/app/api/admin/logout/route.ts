import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_AUTH_COOKIE } from "@/lib/cookies";

export async function POST(request: NextRequest) {
  const loginUrl = new URL("/admin-login", request.url);
  const response = NextResponse.redirect(loginUrl);

  response.cookies.set(ADMIN_AUTH_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });

  return response;
}