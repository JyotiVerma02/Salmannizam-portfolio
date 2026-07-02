"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

const projects = [
  {
    id: "saarthii",
    title: "Saarthii B2B Transaction Platform",
    description:
      "Comprehensive B2B transaction platform featuring wallet, air, bus and rail booking with multiple payment gateways.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Docker"],
    gradient: "orange",
  },
  {
    id: "coderlala",
    title: "CoderLala CRM System",
    description:
      "Enterprise-grade CRM platform built with microservices architecture, RabbitMQ and real-time processing.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    gradient: "blue",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <section id="projects" className="section container">
        <div className="section-heading">
          <h2 className="section__title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            Real-world projects showcasing technical expertise and scalable
            architecture.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
            >
              <div className={`project-image ${project.gradient}`}>
                <span>🚀</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <Link href={`/projects/${project.id}`} className="project-btn">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
