import "@/styles/admin/testimonials.css";
import AdminSection from "@/components/Admin/AdminSection";
import MiniList from "@/components/Admin/MiniList";

const testimonials = ["Founder review", "Client feedback", "Team recommendation"];

export default function Page() {
  return (
    <AdminSection
      id="testimonials"
      eyebrow="Trust"
      title="Testimonials"
      description="Review client and collaborator feedback before it appears publicly."
    >
      <MiniList items={testimonials} tone="rose" />
    </AdminSection>
  );
}
