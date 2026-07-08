"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

const projects = [
  {
    id: "saarthii",
    title: "Saarthii B2B Transaction Platform",
    description:
      "Comprehensive B2B transaction platform featuring wallet, air, bus and rail booking with multiple payment gateways.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "AWS", "Docker"],
    image: "/images/B2Bproject.png",
    stats: [
      { label: "Users", value: "10K+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Performance", value: "Fast" },
    ],
    features: ["Microservices", "Real-time", "Secure"],
  },
  {
    id: "coderlala",
    title: "CoderLala CRM System",
    description:
      "Enterprise-grade CRM platform built with microservices architecture, RabbitMQ and real-time processing.",
    tech: ["Next.js", "NestJS", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    image: "/images/coderlala.png",
    stats: [
      { label: "Scalable", value: "Architecture" },
      { label: "Processing", value: "Real-time" },
      { label: "Grade", value: "Enterprise" },
    ],
    features: ["Microservices", "Real-time", "Enterprise Grade"],
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
            <span className="projects-tag">★ FEATURED PROJECTS</span>
            <h2 className="projects-title">
              Real-World <span>Projects</span>
            </h2>
            <p className="projects-description">
              Real-world projects showcasing technical expertise, scalable architecture
              and modern full-stack development.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="projects-filters">
            <button className="filter-btn active">All Projects</button>
            <button className="filter-btn">Web Applications</button>
            <button className="filter-btn">SaaS Platform</button>
            <button className="filter-btn">Dashboards</button>
            <button className="filter-btn">APIs & Services</button>
          </div>

          {/* Cards */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className={`project-card ${project.id === 'coderlala' ? 'project-card--blue' : ''}`}
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
                    
                    {/* Stats */}
                    <div className="project-stats">
                      {project.stats.map((stat, idx) => (
                        <div key={idx} className="stat-item">
                          <strong>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="project-features">
                      {project.features.map((feature, idx) => (
                        <span key={idx}>{feature}</span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <span className="project-btn">Learn More →</span>
                      <span className="project-view">View Details</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Have a Project in Mind?</h3>
            <p>Let's build something amazing together. I'm always excited to work on new challenges.</p>
            <a href="/contact" className="cta-btn">Start a Project</a>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}