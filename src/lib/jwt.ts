import jwt, { type JwtPayload } from "jsonwebtoken";

export type AdminJwtPayload = JwtPayload & {
  adminId: string;
  email: string;
  role: "super_admin";
};

function getJwtSecret() {
  const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured.");
  }

  return secret;
}

export function signAdminToken(payload: Omit<AdminJwtPayload, keyof JwtPayload>) {
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: "7d",
  });
}

export function verifyAdminToken(token: string): AdminJwtPayload | null {
  try {
    const decoded = jwt.verify(token, getJwtSecret());

    if (typeof decoded === "string") {
      return null;
    }

    if (
      typeof decoded.adminId !== "string" ||
      typeof decoded.email !== "string" ||
      decoded.role !== "super_admin"
    ) {
      return null;
    }

    return decoded as AdminJwtPayload;
  } catch {
    return null;
  }
}