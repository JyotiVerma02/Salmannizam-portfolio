import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import "@/styles/admin-dashboard.css";

const sidebarItems = [
  { label: "Dashboard", href: "#dashboard", icon: "D" },
  { label: "Projects", href: "#projects", icon: "P" },
  { label: "Skills", href: "#skills", icon: "S" },
  { label: "Experience", href: "#experience", icon: "E" },
  { label: "Blog", href: "#blog", icon: "B" },
  { label: "Testimonials", href: "#testimonials", icon: "T" },
  { label: "Messages", href: "#messages", icon: "M" },
  { label: "Settings", href: "#settings", icon: "G" },
];

type AdminDashboardLayoutProps = {
  children: ReactNode;
};

export default async function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const initials = admin.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "A";

  return (
    <main className="admin-dashboard-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo">SN</div>
          <div>
            <strong>Admin Studio</strong>
            <span>Portfolio Control</span>
          </div>
        </div>

        <nav className="admin-sidebar-nav" aria-label="Admin dashboard navigation">
          {sidebarItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={index === 0 ? "active" : ""}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <form action="/api/admin/logout" method="post" className="admin-sidebar-logout">
          <button type="submit">Logout</button>
        </form>
      </aside>

      <section className="admin-dashboard-main">
        <header className="admin-dashboard-topbar">
          <div>
            <span className="admin-kicker">Secure Dashboard</span>
            <h1>Portfolio Admin</h1>
          </div>

          <div className="admin-user-chip">
            <div className="admin-avatar">{initials}</div>
            <div>
              <strong>{admin.name}</strong>
              <span>{admin.email}</span>
            </div>
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}
