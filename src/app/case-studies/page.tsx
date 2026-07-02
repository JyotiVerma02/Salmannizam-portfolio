import PageShell from "@/components/Common/PageShell";

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">Case <span>Studies</span></h1>
        <div className="card" style={{ padding: "2rem" }}>
          <p>Selected implementation stories and technical decision highlights.</p>
        </div>
      </section>
    </PageShell>
  );
}
