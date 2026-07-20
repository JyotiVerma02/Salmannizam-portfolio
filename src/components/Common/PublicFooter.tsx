"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer/Footer";

export default function PublicFooter() {
  const pathname = usePathname();
  const isAdminFlow = pathname?.startsWith("/admin") || pathname === "/admin-login";

  if (isAdminFlow) {
    return null;
  }

  return <Footer />;
}
