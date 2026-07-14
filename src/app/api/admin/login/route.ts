import { NextResponse, type NextRequest } from "next/server";
import mongoose from "mongoose";
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
    });

    const response = NextResponse.json({ admin });
    response.cookies.set(ADMIN_AUTH_COOKIE, token, adminCookieOptions);

    return response;
  } catch (error) {
    console.error("Admin login failed", error);

    if (error instanceof mongoose.Error.MongooseServerSelectionError) {
      return NextResponse.json(
        { message: "Cannot connect to MongoDB. Check MONGODB_URI or start MongoDB." },
        { status: 503 }
      );
    }

    return NextResponse.json({ message: "Unable to login right now." }, { status: 500 });
  }
}
