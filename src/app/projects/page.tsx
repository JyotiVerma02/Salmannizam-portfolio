import Link from "next/link";
import PageShell from "@/components/Common/PageShell";

const projects = [
  { id: "saarthii", title: "Saarthii" },
  { id: "coderlala", title: "CoderLala" },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="section container" style={{ paddingTop: "8rem" }}>
        <h1 className="section__title">Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>Detailed case study and implementation overview.</p>
                <Link href={`/projects/${project.id}`} className="project-btn">
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
