import bcrypt from "bcryptjs";
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

function getConfiguredAdminName() {
  return (
    process.env.ADMIN_NAME?.trim() ||
    process.env.ADMIN_DISPLAY_NAME?.trim() ||
    "Salman Nizam"
  );
}

function getConfiguredAdminId() {
  return process.env.ADMIN_ID?.trim() || "admin";
}

async function authenticateFromEnvironment(email: string, password: string) {
  const configuredEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!configuredEmail || configuredEmail !== email.toLowerCase().trim()) {
    return null;
  }

  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim();
  const plainPassword = process.env.ADMIN_PASSWORD?.trim();

  if (passwordHash) {
    const isPasswordValid = await verifyPassword(password, passwordHash);

    if (!isPasswordValid) {
      return null;
    }
  } else if (plainPassword) {
    if (password !== plainPassword) {
      return null;
    }
  } else {
    return null;
  }

  return {
    id: getConfiguredAdminId(),
    name: getConfiguredAdminName(),
    email: configuredEmail,
    role: "super_admin",
  } satisfies SafeAdmin;
}

export async function getAdminByCredentials(email: string, password: string) {
  const envAdmin = await authenticateFromEnvironment(email, password);

  if (envAdmin) {
    return envAdmin;
  }

  try {
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
  } catch (error) {
    console.error("Admin database auth failed", error);
    return null;
  }
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

  try {
    await connectDB();

    const admin = await Admin.findById(payload.adminId).select("name email role");

    if (admin && admin.role === "super_admin") {
      return {
        id: admin._id.toString(),
        name: admin.name,
        email: admin.email,
        role: admin.role,
      } satisfies SafeAdmin;
    }
  } catch (error) {
    console.warn("Admin session DB lookup failed", error);
  }

  return {
    id: payload.adminId,
    name: typeof payload.name === "string" && payload.name.trim() ? payload.name : getConfiguredAdminName(),
    email: payload.email,
    role: "super_admin",
  } satisfies SafeAdmin;
}
