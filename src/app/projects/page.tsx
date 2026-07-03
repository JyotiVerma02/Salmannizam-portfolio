"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";
import "@/styles/project.css";

const projects = [
  {
    id: "saarthii",
    title: "Saarthii B2B Transaction Platform",
    description:
      "Comprehensive B2B transaction platform featuring wallet, air, bus and rail booking with multiple payment gateways.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Docker"],
    image: "/images/B2Bproject.png", // ✅ Correct path
  },
  {
    id: "coderlala",
    title: "CoderLala CRM System",
    description:
      "Enterprise-grade CRM platform built with microservices architecture, RabbitMQ and real-time processing.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    image: "/images/coderlala.png",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <section id="projects" className="projects-section">
        <div className="projects-container">
          {/* Heading */}
          <motion.div
            className="projects-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="projects-tag">Featured Projects</span>
            <h2 className="projects-title">
              Real-World <span>Projects</span>
            </h2>
            <p className="projects-description">
              Real-world projects showcasing technical expertise,
              scalable architecture and modern full-stack development.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="project-link"
                >
                  {/* Image */}
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={260}
                      height={180}
                      className="project-image-bg"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <span className="project-btn">Learn More →</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}