import PageShell from "@/components/Common/PageShell";

export default function BlogPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">Blog</h1>
        <div className="card" style={{ padding: "2rem" }}>
          <p>Engineering notes, architecture insights, and product development lessons.</p>
        </div>
      </section>
    </PageShell>
  );
}
