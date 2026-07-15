import "@/styles/admin/settings.css";
import AdminSection from "@/components/Admin/AdminSection";

const settings = ["Admin profile", "Security cookie", "JWT session"];

export default function Page() {
  return (
    <AdminSection
      id="settings"
      eyebrow="System"
      title="Settings"
      description="Security-first controls for the manually managed single-admin account."
    >
      <div className="admin-security-list">
        {settings.map((item) => (<span key={item}>{item}</span>))}
      </div>
    </AdminSection>
  );
}