"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

export default function BlogPage() {
  return (
    <PageShell>
      <section id="blog" className="section container">
        <div className="section-heading">
          <span className="section-tag">Knowledge Sharing</span>

          <h2 className="section__title">
            Latest <span>Blog</span>
          </h2>

          <p className="section-description">
            Technical articles, tutorials, and insights on full-stack
            development, backend systems, cloud architecture, DevOps,
            and modern web technologies.
          </p>
        </div>

        <motion.div
          className="blog-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="blog-banner">
            <span>✍️</span>
          </div>

          <div className="blog-content">
            <div className="blog-meta">
              <span>Announcement</span>
              <span>•</span>
              <span>January 10, 2026</span>
            </div>

            <h3>Blog Coming Soon</h3>

            <p>
              I'm currently preparing in-depth technical articles covering
              Next.js, NestJS, Node.js, TypeScript, System Design,
              Microservices, AWS, Docker, Kubernetes, DevOps,
              Performance Optimization, and Software Engineering
              best practices.
            </p>

            <a href="#" className="blog-btn">
              Read More →
            </a>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
