import "@/styles/admin/messages.css";
import AdminSection from "@/components/Admin/AdminSection";
import MiniList from "@/components/Admin/MiniList";

const messages = ["Project inquiry", "Consultation request", "Portfolio feedback"];

export default function Page() {
  return (
    <AdminSection
      id="messages"
      eyebrow="Inbox"
      title="Messages"
      description="Track contact requests and follow up on serious project opportunities."
    >
      <MiniList items={messages} tone="blue" />
    </AdminSection>
  );
}
