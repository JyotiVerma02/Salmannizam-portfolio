import PageShell from "@/components/Common/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section id="about" className="section container">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="card" style={{ padding: "2rem", lineHeight: "1.8" }}>
          <h3 style={{ color: "var(--white-color)", marginBottom: "1rem" }}>
            Professional Background
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            I am a senior full-stack developer with extensive experience in building
            scalable backend systems, robust infrastructure, and user-focused products.
            My career has been focused on solving complex engineering challenges across
            various domains.
          </p>

          <h3 style={{ color: "var(--white-color)", marginBottom: "1rem" }}>
            Career Journey
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Starting from frontend development, I gradually moved into full-stack roles,
            with a strong focus on backend architecture, database design, and system scalability.
            I've worked with startups and established companies, building products that
            serve thousands to millions of users.
          </p>

          <h3 style={{ color: "var(--white-color)", marginBottom: "1rem" }}>
            Engineering Philosophy
          </h3>
          <p style={{ marginBottom: "1.5rem" }}>
            I believe in writing clean, maintainable code that solves real problems.
            I prioritize scalability, performance, and developer experience. Every system
            should be built with future growth in mind, but not over-engineered for current needs.
          </p>

          <h3 style={{ color: "var(--white-color)", marginBottom: "1rem" }}>
            Types of Problems I Solve
          </h3>

          <ul style={{ paddingLeft: "1.2rem", color: "var(--text-color)" }}>
            <li>Backend architecture and API design</li>
            <li>Database optimization and scaling</li>
            <li>Infrastructure setup and DevOps</li>
            <li>Product development from concept to launch</li>
            <li>Performance optimization</li>
            <li>System reliability and monitoring</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
