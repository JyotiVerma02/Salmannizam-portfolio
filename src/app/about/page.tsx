import PageShell from "@/components/Common/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">About <span>Me</span></h1>
        <div className="card" style={{ padding: "2rem", lineHeight: "1.8" }}>
          <p>
            I am a senior full-stack developer focused on building scalable platforms,
            reliable APIs, and polished user experiences for ambitious products.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
