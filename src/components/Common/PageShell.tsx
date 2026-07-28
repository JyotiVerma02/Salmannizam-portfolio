import type { ReactNode } from "react";
import Navbar from "@/components/Navbar/Navbar";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  topPadding?: string;
};

export default function PageShell({ children, className = "", topPadding }: PageShellProps) {
  return (
    <main
      className={`page ${className}`.trim()}
      style={{ paddingTop: topPadding ?? 'calc(var(--page-shell-offset, 6rem) + 0.75rem)' }}
    >
      <Navbar />
      {children}
    </main>
  );
}