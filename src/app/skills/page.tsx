import PageShell from "@/components/Common/PageShell";

export default function SkillsPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">Skills <span>& Expertise</span></h1>
        <div className="card" style={{ padding: "2rem" }}>
          <p>Next.js, React, Node.js, NestJS, TypeScript, MongoDB, Redis, AWS, Docker, and system design.</p>
        </div>
      </section>
    </PageShell>
  );
}
