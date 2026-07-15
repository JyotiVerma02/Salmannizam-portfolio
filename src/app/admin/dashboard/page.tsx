import "@/styles/admin/dashboard.css";
import AdminSection from "@/components/Admin/AdminSection";

type DashboardStat = {
  label: string;
  value: string;
  note: string;
  accent: string;
};

const stats: DashboardStat[] = [
  { label: "Projects", value: "20+", note: "Case studies ready to manage", accent: "violet" },
  { label: "Messages", value: "12", note: "Visitor queries in queue", accent: "cyan" },
  { label: "Blog", value: "08", note: "Ideas, drafts, and posts", accent: "amber" },
  { label: "Skills", value: "24", note: "Technology profile items", accent: "emerald" },
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
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.note}</p>
          </article>
        ))}
      </div>
    </AdminSection>
  );
}
