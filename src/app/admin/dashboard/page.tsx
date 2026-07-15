import "@/styles/admin/dashboard.css";
import AdminSection from "@/components/Admin/AdminSection";
import { ReactNode } from "react";

const ProjectsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>;
const MessagesIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>;
const BlogIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>;
const SkillsIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>;

type DashboardStat = {
  label: string;
  value: string;
  note: string;
  accent: string;
  icon: ReactNode;
};

const stats: DashboardStat[] = [
  { label: "Projects", value: "20+", note: "Case studies ready to manage", accent: "violet", icon: <ProjectsIcon /> },
  { label: "Messages", value: "12", note: "Visitor queries in queue", accent: "cyan", icon: <MessagesIcon /> },
  { label: "Blog", value: "08", note: "Ideas, drafts, and posts", accent: "amber", icon: <BlogIcon /> },
  { label: "Skills", value: "24", note: "Technology profile items", accent: "emerald", icon: <SkillsIcon /> },
];

export default function AdminDashboardPage() {
  return (
    <AdminSection
      id="dashboard"
      eyebrow="Overview"
      title="Welcome back."
      description="A focused command center for managing Salman Nizam's portfolio content from one protected workspace."
    >
      <div className="admin-stat-grid" aria-label="Dashboard summary">
        {stats.map((stat) => (
          <article className={`admin-stat-card accent-${stat.accent}`} key={stat.label}>
            <div className="admin-stat-icon">{stat.icon}</div>
            <div className="admin-stat-info">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p>{stat.note}</p>
            </div>
          </article>
        ))}
      </div>
    </AdminSection>
  );
}
