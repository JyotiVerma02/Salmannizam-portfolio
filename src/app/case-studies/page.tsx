"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <section id="case-studies" className="section container">
        <div className="section-heading">
          <h2 className="section__title">
            Case <span>Studies</span>
          </h2>

          <p className="section-description">
            Detailed case studies showcasing technical challenges, engineering
            decisions, solutions, and measurable outcomes from real-world
            projects.
          </p>
        </div>

        <motion.div
          className="case-study-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="case-study-banner">
            <span>📖</span>
          </div>

          <div className="case-study-content">
            <div className="case-study-meta">
              <span>Various Projects</span>
              <span>•</span>
              <span>January 2026</span>
            </div>

            <h3>Case Studies Coming Soon</h3>

            <p>
              I'm preparing detailed engineering case studies covering backend
              architecture, system design, scaling challenges, DevOps practices,
              cloud infrastructure, API development, and performance optimization
              from production applications.
            </p>

            <a href="#" className="case-study-btn">
              Read Case Study →
            </a>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
