import { NextResponse, type NextRequest } from "next/server";
import { getAdminByCredentials, isValidEmail } from "@/lib/auth";
import { ADMIN_AUTH_COOKIE, adminCookieOptions } from "@/lib/cookies";
import { signAdminToken } from "@/lib/jwt";

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const { email, password } = body as Record<string, unknown>;

    if (typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 });
    }

    if (typeof password !== "string" || password.length < 1) {
      return NextResponse.json({ message: "Password is required." }, { status: 400 });
    }

    const admin = await getAdminByCredentials(email, password);

    if (!admin) {
      return NextResponse.json({ message: "Incorrect email or password." }, { status: 401 });
    }

    const token = signAdminToken({
      adminId: admin.id,
      email: admin.email,
      role: admin.role,
      name: admin.name,
    });

    const response = NextResponse.json({ admin });
    response.cookies.set(ADMIN_AUTH_COOKIE, token, adminCookieOptions);

    return response;
  } catch (error) {
    console.error("Admin login failed", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error && error.message.includes("JWT_SECRET")
            ? "JWT secret is not configured."
            : "Unable to login right now.",
      },
      { status: 500 }
    );
  }
}
