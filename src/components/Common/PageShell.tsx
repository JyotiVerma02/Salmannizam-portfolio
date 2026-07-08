import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="page" style={{ paddingTop: '80px' }}>
      <Navbar />
      {children}
    </main>
  );
}
