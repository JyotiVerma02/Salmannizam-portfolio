import PageShell from "@/components/Common/PageShell";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">Contact <span>Me</span></h1>
        <div className="card" style={{ padding: "2rem" }}>
          <p>Reach out for freelance projects, collaborations, or full-time opportunities.</p>
        </div>
      </section>
    </PageShell>
  );
}
