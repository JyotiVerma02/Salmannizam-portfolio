import "@/styles/admin/experience.css";
import AdminSection from "@/components/Admin/AdminSection";
import MiniList from "@/components/Admin/MiniList";

const experience = ["Backend architecture", "Authentication systems", "Dashboard design"];

export default function Page() {
  return (
    <AdminSection
      id="experience"
      eyebrow="Career"
      title="Experience"
      description="Manage experience highlights and the story behind production work."
    >
      <MiniList items={experience} tone="amber" />
    </AdminSection>
  );
}
