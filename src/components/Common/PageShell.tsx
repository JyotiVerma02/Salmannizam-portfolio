import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page" style={{ paddingTop: 'var(--page-shell-offset, 6rem)' }}>
      <Navbar />
      {children}
    </main>
  );
}

