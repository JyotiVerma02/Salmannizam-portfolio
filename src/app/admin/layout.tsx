import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import AdminSidebarNav from "@/components/Admin/AdminSidebarNav";
import "@/styles/admin/admin-layout.css";
import "@/styles/admin/admin-sidebar.css";
import "@/styles/admin/admin-navbar.css";

// Basic icons to match the image visually
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
);
const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
);
const SkillsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
);
const ExperienceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);
const BlogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
);
const TestimonialIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
);
const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
);
const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
);
const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
);

const navGroups = [
  {
    heading: "MAIN",
    items: [
      { label: "Dashboard", href: "/admin/dashboard", icon: <DashboardIcon /> },
      { label: "Projects", href: "/admin/projects", icon: <ProjectsIcon /> },
      { label: "Skills", href: "/admin/skills", icon: <SkillsIcon /> },
      { label: "Experience", href: "/admin/experience", icon: <ExperienceIcon /> },
    ],
  },
  {
    heading: "CONTENT",
    items: [
      { label: "Blogs", href: "/admin/blogs", icon: <BlogIcon /> },
      { label: "Testimonials", href: "/admin/testimonials", icon: <TestimonialIcon /> },
      { label: "Messages", href: "/admin/messages", icon: <MessageIcon /> },
    ],
  },
  {
    heading: "SETTINGS",
    items: [
      { label: "Settings", href: "/admin/settings", icon: <SettingsIcon /> },
    ],
  }
];

type AdminDashboardLayoutProps = {
  children: ReactNode;
};

export default async function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin-login");
  }

  const initials = admin.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "SN";

  return (
    <main className="admin-dashboard-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <div className="admin-sidebar-logo">SN</div>
          <div>
            <strong>Salman Nizam</strong>
            <span>Portfolio Admin</span>
          </div>
        </div>

        <AdminSidebarNav groups={navGroups} />

        <form action="/api/admin/logout" method="post" className="admin-sidebar-logout">
          <button type="submit">
            <LogoutIcon />
            Logout
          </button>
        </form>
      </aside>

      <section className="admin-dashboard-main">
        <header className="admin-dashboard-topbar">
          <div className="admin-user-chip">
            <div className="admin-avatar">{initials}</div>
            <div className="admin-user-chip-text">
              <strong>{admin.name}</strong>
              <span>Super Admin</span>
            </div>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#64748b" style={{marginLeft: 8}}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </div>
        </header>

        {children}
      </section>
    </main>
  );
}
