import { NextResponse, type NextRequest } from "next/server";

const ADMIN_AUTH_COOKIE = "admin_token";

function base64UrlToUint8Array(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function base64UrlToString(value: string) {
  return new TextDecoder().decode(base64UrlToUint8Array(value));
}

async function isValidAdminToken(token: string) {
  try {
    const [header, payload, signature] = token.split(".");

    if (!header || !payload || !signature) {
      return false;
    }

    const decodedHeader = JSON.parse(base64UrlToString(header)) as { alg?: string };

    if (decodedHeader.alg !== "HS256") {
      return false;
    }

    const secret = process.env.JWT_SECRET || process.env.NEXTAUTH_SECRET;

    if (!secret) {
      return false;
    }

    const key = await crypto.subtle.importKey(
      "raw",
      new TextEncoder().encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const verified = await crypto.subtle.verify(
      "HMAC",
      key,
      base64UrlToUint8Array(signature),
      new TextEncoder().encode(`${header}.${payload}`)
    );

    if (!verified) {
      return false;
    }

    const decodedPayload = JSON.parse(base64UrlToString(payload)) as {
      adminId?: unknown;
      email?: unknown;
      role?: unknown;
      exp?: unknown;
    };

    return (
      typeof decodedPayload.adminId === "string" &&
      typeof decodedPayload.email === "string" &&
      decodedPayload.role === "super_admin" &&
      typeof decodedPayload.exp === "number" &&
      decodedPayload.exp > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(ADMIN_AUTH_COOKIE)?.value;
  const isLoginPage = pathname === "/admin-login";
  const isAdminRoot = pathname === "/admin";
  const hasValidToken = token ? await isValidAdminToken(token) : false;

  if (isLoginPage) {
    if (hasValidToken) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    return NextResponse.next();
  }

  if (!hasValidToken) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  if (isAdminRoot) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
