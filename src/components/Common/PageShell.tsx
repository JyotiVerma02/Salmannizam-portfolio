import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="main">
      <div className="blob-big" style={{ top: "-10rem", left: "-10rem" }} />
      <div className="blob-big" style={{ top: "10rem", right: "-10rem" }} />
      <Navbar />
      {children}
    </main>
  );
}
