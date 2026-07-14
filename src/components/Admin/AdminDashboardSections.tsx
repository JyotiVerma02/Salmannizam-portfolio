import type { ReactNode } from "react";

type DashboardStat = {
  label: string;
  value: string;
  note: string;
  accent: string;
};

type AdminSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

const stats: DashboardStat[] = [
  { label: "Projects", value: "20+", note: "Case studies ready to manage", accent: "violet" },
  { label: "Messages", value: "12", note: "Visitor queries in queue", accent: "cyan" },
  { label: "Blog", value: "08", note: "Ideas, drafts, and posts", accent: "amber" },
  { label: "Skills", value: "24", note: "Technology profile items", accent: "emerald" },
];

const projects = ["Coderlala", "FintechFlow", "NeoHealth", "Saarthii"];
const skills = ["Next.js", "Node.js", "MongoDB", "TypeScript", "APIs", "Cloud"];
const experience = ["Backend architecture", "Authentication systems", "Dashboard design"];
const blogs = ["Secure admin auth", "Scalable portfolio CMS", "API design notes"];
const testimonials = ["Founder review", "Client feedback", "Team recommendation"];
const messages = ["Project inquiry", "Consultation request", "Portfolio feedback"];
const settings = ["Admin profile", "Security cookie", "JWT session"];

function AdminSection({ id, eyebrow, title, description, children }: AdminSectionProps) {
  return (
    <section id={id} className="admin-section-block">
      <div className="admin-section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  );
}

function MiniList({ items, tone }: { items: string[]; tone: string }) {
  return (
    <div className="admin-mini-list">
      {items.map((item, index) => (
        <article className={`admin-mini-card tone-${tone}`} key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          <p>Manage, update, and keep this portfolio area production-ready.</p>
        </article>
      ))}
    </div>
  );
}

export default function AdminDashboardSections() {
  return (
    <div className="admin-dashboard-content">
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

      <AdminSection
        id="projects"
        eyebrow="Portfolio"
        title="Projects"
        description="Control featured projects, case-study order, project summaries, and live links."
      >
        <MiniList items={projects} tone="violet" />
      </AdminSection>

      <AdminSection
        id="skills"
        eyebrow="Profile"
        title="Skills"
        description="Keep the technical skill list sharp, current, and easy for visitors to scan."
      >
        <MiniList items={skills} tone="emerald" />
      </AdminSection>

      <AdminSection
        id="experience"
        eyebrow="Career"
        title="Experience"
        description="Manage experience highlights and the story behind production work."
      >
        <MiniList items={experience} tone="amber" />
      </AdminSection>

      <AdminSection
        id="blog"
        eyebrow="Content"
        title="Blog"
        description="Draft, publish, and organize technical writing for the portfolio."
      >
        <MiniList items={blogs} tone="cyan" />
      </AdminSection>

      <AdminSection
        id="testimonials"
        eyebrow="Trust"
        title="Testimonials"
        description="Review client and collaborator feedback before it appears publicly."
      >
        <MiniList items={testimonials} tone="rose" />
      </AdminSection>

      <AdminSection
        id="messages"
        eyebrow="Inbox"
        title="Messages"
        description="Track contact requests and follow up on serious project opportunities."
      >
        <MiniList items={messages} tone="blue" />
      </AdminSection>

      <AdminSection
        id="settings"
        eyebrow="System"
        title="Settings"
        description="Security-first controls for the manually managed single-admin account."
      >
        <div className="admin-security-list">
          {settings.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </AdminSection>
    </div>
  );
}
