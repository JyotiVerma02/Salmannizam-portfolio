"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

export default function BlogPage() {
  return (
    <PageShell>
      <section id="blog" className="blog-section">
        <div className="blog-container">
          {/* Heading */}
          <motion.div
            className="blog-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="blog-tag">KNOWLEDGE SHARING</span>
            <h2 className="blog-title">
              Latest <span>Blog</span>
            </h2>
            <p className="blog-description">
              Technical articles, tutorials, and insights on full-stack development, backend systems,
              cloud architecture, DevOps, and modern web technologies.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="blog-filters">
            <button className="filter-btn active">All Posts</button>
            <button className="filter-btn">Web Development</button>
            <button className="filter-btn">Backend</button>
            <button className="filter-btn">DevOps</button>
            <button className="filter-btn">Cloud & Infra</button>
            <button className="filter-btn">Tutorials</button>
          </div>

          {/* Blog Card */}
          <motion.div
            className="blog-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-card-inner">
              <div className="blog-banner">
                <div className="blog-banner-content">
                  <span className="blog-banner-icon">✍️</span>
                  <span className="blog-banner-text">Coming Soon</span>
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-meta-tag">ANNOUNCEMENT</span>
                  <span className="blog-meta-dot">•</span>
                  <span className="blog-meta-date">January 10, 2026</span>
                </div>

                <h3>Blog Coming Soon</h3>

                <p>
                  I'm currently preparing in-depth technical articles covering
                  Next.js, NestJS, Node.js, TypeScript, System Design,
                  Microservices, AWS, Docker, Kubernetes, DevOps,
                  Performance Optimization, and Software Engineering best practices.
                </p>

                <div className="blog-tech-tags">
                  <span>Next.js</span>
                  <span>NestJS</span>
                  <span>Node.js</span>
                  <span>TypeScript</span>
                  <span>AWS</span>
                  <span className="more-tag">+More</span>
                </div>

                <a href="#" className="blog-btn">
                  Read More →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="blog-features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="feature-item">
              <span className="feature-icon">📚</span>
              <h4>Quality Content</h4>
              <p>Well-researched and practical articles</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💡</span>
              <h4>Real-World Insights</h4>
              <p>Based on real projects and experience</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📅</span>
              <h4>Regular Updates</h4>
              <p>New articles coming very soon</p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}