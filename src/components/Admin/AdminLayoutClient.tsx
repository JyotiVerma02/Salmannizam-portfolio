"use client";

import { useState, type ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";
import AdminSidebarNav from "./AdminSidebarNav";

const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
    <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

type NavGroup = {
  heading: string;
  items: NavItem[];
};

type AdminLayoutClientProps = {
  children: ReactNode;
  initials: string;
  adminName: string;
  groups: NavGroup[];
};

export default function AdminLayoutClient({
  children,
  initials,
  adminName,
  groups,
}: AdminLayoutClientProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div
      className={`admin-layout-container ${isSidebarOpen ? "sidebar-open" : ""} ${
        isSidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* Mobile Topbar Header */}
   <header
  className={`admin-mobile-header ${
    isSidebarOpen ? "hidden-header" : ""
  }`}
>
        <button
          type="button"
          className="admin-hamburger-btn"
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar navigation"
        >
          <HamburgerIcon />
        </button>

        <div className="admin-mobile-brand">
          <div className="admin-mobile-logo">
            <span>{initials}</span>
          </div>
          <strong>{adminName}</strong>
        </div>

        <div className="admin-mobile-actions">
          <ThemeToggle />
        </div>
      </header>

      {/* Backdrop overlay */}
      <div
        className="admin-sidebar-backdrop"
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside className={`admin-sidebar ${isSidebarOpen ? "open" : ""} ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="admin-sidebar-brand-wrapper">
          <div className="admin-sidebar-brand">
            <div className="admin-sidebar-logo">
              <span>{initials}</span>
              <div className="admin-sidebar-logo-ring" />
            </div>
            <div>
              <strong>{adminName}</strong>
              <span>Portfolio Admin</span>
            </div>
          </div>

          {/* Desktop Collapse Toggle Icon */}
          <button
            type="button"
            className="admin-sidebar-toggle-btn"
            onClick={() => setIsSidebarCollapsed((prev) => !prev)}
            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isSidebarCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </button>

          <button
            type="button"
            className="admin-sidebar-close-btn"
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close sidebar navigation"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="admin-sidebar-nav-scroll">
      <AdminSidebarNav
  groups={groups}
  onNavigate={() => setIsSidebarOpen(false)}
/>
        </div>

        <form action="/api/admin/logout" method="post" className="admin-sidebar-logout">
          <button type="submit">
            <LogoutIcon />
            <span className="logout-label">Logout</span>
          </button>
        </form>
      </aside>

      {/* Main Content Area */}
      <section className="admin-dashboard-main">
        {children}
      </section>
    </div>
  );
}
