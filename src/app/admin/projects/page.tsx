import "@/styles/admin/projects.css";
import AdminSection from "@/components/Admin/AdminSection";
import MiniList from "@/components/Admin/MiniList";

const projects = ["Coderlala", "FintechFlow", "NeoHealth", "Saarthii"];

export default function Page() {
  return (
    <AdminSection
      id="projects"
      eyebrow="Portfolio"
      title="Projects"
      description="Control featured projects, case-study order, project summaries, and live links."
    >
      <MiniList items={projects} tone="violet" />
    </AdminSection>
  );
}
