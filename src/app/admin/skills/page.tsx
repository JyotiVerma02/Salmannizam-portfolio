import "@/styles/admin/skills.css";
import AdminSection from "@/components/Admin/AdminSection";
import MiniList from "@/components/Admin/MiniList";

const skills = ["Next.js", "Node.js", "MongoDB", "TypeScript", "APIs", "Cloud"];

export default function Page() {
  return (
    <AdminSection
      id="skills"
      eyebrow="Profile"
      title="Skills"
      description="Keep the technical skill list sharp, current, and easy for visitors to scan."
    >
      <MiniList items={skills} tone="emerald" />
    </AdminSection>
  );
}
