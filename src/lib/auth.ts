import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { ADMIN_AUTH_COOKIE } from "@/lib/cookies";
import { connectDB } from "@/lib/db";
import { verifyAdminToken } from "@/lib/jwt";
import Admin from "@/models/Admin";

export type SafeAdmin = {
  id: string;
  name: string;
  email: string;
  role: "super_admin";
};

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword);
}

export async function getAdminByCredentials(email: string, password: string) {
  await connectDB();

  const admin = await Admin.findOne({ email: email.toLowerCase().trim() }).select("+password");

  if (!admin) {
    return null;
  }

  const isPasswordValid = await verifyPassword(password, admin.password);

  if (!isPasswordValid) {
    return null;
  }

  return {
    id: admin._id.toString(),
    name: admin.name,
    email: admin.email,
    role: admin.role,
  } satisfies SafeAdmin;
}

export async function getCurrentAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_AUTH_COOKIE)?.value;

  if (!token) {
    return null;
  }

  const payload = verifyAdminToken(token);

  if (!payload) {
    return null;
  }

  await connectDB();

  const admin = await Admin.findById(payload.adminId).select("name email role");

  if (!admin || admin.role !== "super_admin") {
    return null;
  }

  return {
    id: admin._id.toString(),
    name: admin.name,
    email: admin.email,
    role: admin.role,
  } satisfies SafeAdmin;
}