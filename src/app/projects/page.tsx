"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import PageShell from "@/components/Common/PageShell";

const projects = [
  {
    id: "saarthii",
    title: "Saarthii B2B Transaction Platform",
    description:
      "Comprehensive B2B transaction platform featuring wallet, air, bus, and rail booking with multiple payment gateways.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Docker"],
    image: "/projects/saarthii.png",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Performance", value: "Fast" },
    ],
    features: ["Microservices", "Real-time", "Secure"],
    theme: "project-card--orange",
  },
  {
    id: "coderlala",
    title: "CoderLala CRM System",
    description:
      "Enterprise-grade CRM platform built with microservices architecture, RabbitMQ, and real-time processing.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    image: "/projects/coderlala.png",
    stats: [
      { label: "Scalable", value: "Architecture" },
      { label: "Processing", value: "Real-time" },
      { label: "Grade", value: "Enterprise" },
    ],
    features: ["Microservices", "Real-time", "Enterprise Grade"],
    theme: "project-card--blue",
  },
  {
    id: "neohealth",
    title: "NeoHealth Dashboard",
    description:
      "Advanced healthcare analytics dashboard for tracking patient metrics, scheduling, and medical resource management in real time.",
    tech: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS"],
    image: "/projects/neohealth.png",
    stats: [
      { label: "Data", value: "Real-time" },
      { label: "Compliance", value: "HIPAA" },
      { label: "Metrics", value: "Advanced" },
    ],
    features: ["Analytics", "Scheduling", "Secure Data"],
    theme: "project-card--green",
  },
  {
    id: "fintechflow",
    title: "FinTech Flow App",
    description:
      "Next-generation financial application providing seamless peer-to-peer transfers, investment tracking, and automated portfolio management.",
    tech: ["Next.js", "Go", "PostgreSQL", "Kafka", "Docker"],
    image: "/projects/fintechflow.png",
    stats: [
      { label: "Transfers", value: "Instant" },
      { label: "Security", value: "Bank-grade" },
      { label: "UX", value: "Modern" },
    ],
    features: ["P2P Transfers", "Investing", "Automation"],
    theme: "project-card--purple",
  },
  {
    id: "dummyproject",
    title: "Upcoming Project",
    description:
      "This is a placeholder for an exciting new project. Details will be revealed soon, showcasing innovative solutions and modern technology.",
    tech: ["Coming Soon"],
    image: "/projects/dummyproject.png",
    stats: [
      { label: "Status", value: "In-Progress" },
      { label: "Launch", value: "TBD" },
      { label: "Tech", value: "Modern" },
    ],
    features: ["Innovative", "Scalable", "User-Centric"],
    theme: "project-card--teal",
  },
];

type ProjectItem = (typeof projects)[number];

function ProjectThumbnail({ project, priority }: { project: ProjectItem; priority: boolean }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="project-image project-image--fallback">
        <div className="project-image-fallback">
          <span className="project-image-kicker">Featured case study</span>
          <strong className="project-image-title">{project.title}</strong>
          <span className="project-image-subtitle">{project.features.join(" � ")}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-image">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="project-image-bg"
        priority={priority}
        sizes="(max-width: 1000px) 100vw, 50vw"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <section id="projects" className="projects-section">
        <div className="projects-container">
          <motion.div
            className="projects-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="projects-tag">FEATURED PROJECTS</span>
            <h2 className="projects-title">
              Real-World <span>Projects</span>
            </h2>
            <p className="projects-description">
              Real-world projects showcasing technical expertise, scalable architecture
              and modern full-stack development.
            </p>
          </motion.div>

          <div className="projects-filters">
            <button className="filter-btn active">All Projects</button>
            <button className="filter-btn">Web Applications</button>
            <button className="filter-btn">SaaS Platform</button>
            <button className="filter-btn">Dashboards</button>
            <button className="filter-btn">APIs & Services</button>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`project-card ${project.theme}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <Link href={`/projects/${project.id}`} className="project-link">
                  <ProjectThumbnail project={project} priority={index < 2} />

                  <div className="project-content">
                    <div className="project-tags">
                      <span className="project-tag">SaaS Platform</span>
                      <span className="project-tag">Enterprise</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-stats">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="stat-item">
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-features">
                      {project.features.map((feature, idx) => (
                        <span key={idx}>{feature}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <span className="project-btn">Learn More &rarr;</span>
                      <span className="project-view">View Details</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="projects-cta projects-cta--gradient-background"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Have a Project in Mind?</h3>
            <p>
              Let&apos;s build something amazing together. I&apos;m always excited to work on
              new challenges.
            </p>
            <a href="/contact" className="cta-btn">
              Start a Project
            </a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
