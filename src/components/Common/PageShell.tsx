import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page" style={{ paddingTop: 'calc(0.6rem + 80px + 1rem)' }}>
      <Navbar />
      {children}
    </main>
  );
}
