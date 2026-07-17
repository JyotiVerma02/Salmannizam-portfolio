"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";
import "@/styles/blog.css";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  status: string;
  readTime?: string;
  publishedAt?: string;
  createdAt: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  "web-dev": "Web Development",
  devops: "DevOps",
  database: "Database",
  "system-design": "System Design",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Posts");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          const published = result.data.filter(
            (b: Blog) => b.status === "published"
          );
          setBlogs(published);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filterMap: Record<string, string> = {
    "Web Development": "web-dev",
    DevOps: "devops",
    Database: "database",
    "System Design": "system-design",
  };

  const filterButtons = ["All Posts", ...Object.keys(filterMap)];

  const filtered =
    activeFilter === "All Posts"
      ? blogs
      : blogs.filter((b) => b.category === filterMap[activeFilter]);

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
              Technical articles, tutorials, and insights on full-stack
              development, backend systems, cloud architecture, DevOps, and
              modern web technologies.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="blog-filters">
            {filterButtons.map((btn) => (
              <button
                key={btn}
                className={`filter-btn${activeFilter === btn ? " active" : ""}`}
                onClick={() => setActiveFilter(btn)}
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Content */}
          {loading ? (
            <div className="blog-loading">
              <div className="blog-spinner" />
              <p>Loading posts…</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="blog-grid">
              {filtered.map((blog, i) => (
                <motion.div
                  key={blog._id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                >
                  <div className="blog-card-inner">
                    {/* Banner / Featured Image */}
                    <div className="blog-banner">
                      {blog.featuredImage ? (
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="blog-banner-img"
                        />
                      ) : (
                        <div className="blog-banner-content">
                          <span className="blog-banner-icon">📝</span>
                          <span className="blog-banner-text">
                            {CATEGORY_LABELS[blog.category || ""] ||
                              blog.category ||
                              "Article"}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta">
                        {blog.category && (
                          <span className="blog-meta-tag">
                            {CATEGORY_LABELS[blog.category] || blog.category}
                          </span>
                        )}
                        <span className="blog-meta-dot">•</span>
                        <span className="blog-meta-date">
                          {formatDate(blog.publishedAt || blog.createdAt)}
                        </span>
                        {blog.readTime && (
                          <>
                            <span className="blog-meta-dot">•</span>
                            <span className="blog-meta-date">
                              {blog.readTime}
                            </span>
                          </>
                        )}
                      </div>

                      <h3>{blog.title}</h3>

                      {blog.excerpt && <p>{blog.excerpt}</p>}

                      {blog.tags && blog.tags.length > 0 && (
                        <div className="blog-tech-tags">
                          {blog.tags.slice(0, 5).map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                          {blog.tags.length > 5 && (
                            <span className="more-tag">
                              +{blog.tags.length - 5} More
                            </span>
                          )}
                        </div>
                      )}

                      <a href={`/blog/${blog.slug}`} className="blog-btn">
                        Read More →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* No published blogs yet — keep the "coming soon" look */
            <>
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
                      <span className="blog-banner-icon"></span>
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
                      I&apos;m currently preparing in-depth technical articles covering
                      Next.js, NestJS, Node.js, TypeScript, System Design,
                      Microservices, AWS, Docker, Kubernetes, DevOps, Performance
                      Optimization, and Software Engineering best practices.
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
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}