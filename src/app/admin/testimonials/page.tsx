import "@/styles/admin/testimonials.css";
import AdminSection from "@/components/Admin/AdminSection";

export default function Page() {
  return (
    <AdminSection
      id="page"
      eyebrow="Admin"
      title="Page"
      description="Manage content here."
    >
      <div>Content goes here...</div>
    </AdminSection>
  );
}
