import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page" style={{ paddingTop: 'calc(var(--page-shell-offset, 6rem) + 0.75rem)' }}>
      <Navbar />
      {children}
    </main>
  );
}

