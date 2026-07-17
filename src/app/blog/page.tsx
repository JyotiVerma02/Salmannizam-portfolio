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
  cloud: "Cloud",
  "ai-ml": "AI / ML",
  backend: "Backend",
};

const CATEGORY_COLORS: Record<string, string> = {
  "web-dev": "#22c55e",
  devops: "#f97316",
  database: "#3b82f6",
  "system-design": "#8b5cf6",
  cloud: "#06b6d4",
  "ai-ml": "#ec4899",
  backend: "#f97316",
  default: "#6366f1",
};

const DARK_CARD_GRADIENTS: Record<string, string> = {
  "web-dev":    "linear-gradient(135deg,#0d2f1f 0%,#0a1a14 100%)",
  devops:       "linear-gradient(135deg,#2d1a06 0%,#1a0f00 100%)",
  database:     "linear-gradient(135deg,#0a1f3d 0%,#050f20 100%)",
  "system-design":"linear-gradient(135deg,#1e0a3d 0%,#0f0523 100%)",
  cloud:        "linear-gradient(135deg,#062d2d 0%,#031818 100%)",
  "ai-ml":      "linear-gradient(135deg,#2d0626 0%,#1a0315 100%)",
  backend:      "linear-gradient(135deg,#1c1206 0%,#100a02 100%)",
  default:      "linear-gradient(135deg,#1a1a2e 0%,#0f0f1a 100%)",
};

function categoryColor(cat?: string) {
  return CATEGORY_COLORS[cat || "default"] ?? CATEGORY_COLORS.default;
}
function darkGradient(cat?: string) {
  return DARK_CARD_GRADIENTS[cat || "default"] ?? DARK_CARD_GRADIENTS.default;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ─── Icons ─── */
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const BookmarkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);

/* ════════════════════════════════════
   LEFT HERO CARD
════════════════════════════════════ */
function HeroCard({ blog }: { blog: Blog }) {
  const catLabel = CATEGORY_LABELS[blog.category || ""] || blog.category || "Article";
  const catColor = categoryColor(blog.category);
  const gradient = darkGradient(blog.category);

  return (
    <motion.a
      href={`/blog/${blog.slug}`}
      className="blog-hero-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
    >
      {/* Image banner */}
      <div className="blog-hero-img"
        style={{ background: !blog.featuredImage ? gradient : undefined }}>
        {blog.featuredImage
          ? <img src={blog.featuredImage} alt={blog.title} />
          : <span className="blog-hero-placeholder-text">{catLabel}</span>}
        {/* Category badge overlaid on image */}
        <span className="blog-hero-cat-badge"
          style={{ color: catColor, borderColor: catColor + "40", background: catColor + "18" }}>
          {catLabel.toUpperCase()}
        </span>
      </div>

      {/* Text body */}
      <div className="blog-hero-body">
        <h3 className="blog-hero-title">{blog.title}</h3>
        {blog.excerpt && <p className="blog-hero-excerpt">{blog.excerpt}</p>}
        <div className="blog-hero-footer">
          <span className="blog-read-more">Read More <ArrowRight /></span>
          <div className="blog-hero-meta">
            {blog.readTime && <span><ClockIcon /> {blog.readTime}</span>}
            <span><CalIcon /> {formatDate(blog.publishedAt || blog.createdAt)}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ════════════════════════════════════
   RIGHT SIDEBAR CARD  (dark preview + light footer)
════════════════════════════════════ */
function SideCard({ blog, index }: { blog: Blog; index: number }) {
  const catLabel = CATEGORY_LABELS[blog.category || ""] || blog.category || "Article";
  const catColor = categoryColor(blog.category);
  const gradient = darkGradient(blog.category);

  return (
    <motion.a
      href={`/blog/${blog.slug}`}
      className="blog-side-card"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* ── Dark preview section ── */}
      <div className="blog-side-preview" style={{ background: gradient }}>
        <div className="blog-side-preview-left">
          <span className="blog-side-cat"
            style={{ color: catColor }}>
            {catLabel.toUpperCase()}
          </span>
          <h4 className="blog-side-preview-title">
            {blog.title.length > 55 ? blog.title.slice(0, 55) + "…" : blog.title}
          </h4>
          {blog.excerpt && (
            <p className="blog-side-preview-desc">
              {blog.excerpt.slice(0, 100)}…
            </p>
          )}
          <div className="blog-side-meta">
            {blog.readTime && <span><ClockIcon /> {blog.readTime}</span>}
            <span className="blog-side-meta-dot">•</span>
            <span><CalIcon /> {formatDate(blog.publishedAt || blog.createdAt)}</span>
          </div>
        </div>
        {/* Thumbnail / gradient blob */}
        <div className="blog-side-thumb"
          style={{ background: catColor + "22", border: `1px solid ${catColor}33` }}>
          {blog.featuredImage
            ? <img src={blog.featuredImage} alt={blog.title} />
            : <span className="blog-side-thumb-icon" style={{ color: catColor }}>
                {catLabel.slice(0, 1)}
              </span>}
        </div>
      </div>

      {/* ── Light footer section ── */}
      <div className="blog-side-footer">
        <div className="blog-side-footer-left">
          <p className="blog-side-footer-title">{blog.title}</p>
          <span className="blog-read-more small">Read More <ArrowRight /></span>
        </div>
        <button className="blog-bookmark-btn" onClick={(e) => e.preventDefault()}>
          <BookmarkIcon />
        </button>
      </div>
    </motion.a>
  );
}

/* ════════════════════════════════════
   GRID CARD (For remaining blogs)
════════════════════════════════════ */
function GridCard({ blog, index }: { blog: Blog; index: number }) {
  const catLabel = CATEGORY_LABELS[blog.category || ""] || blog.category || "Article";
  const catColor = categoryColor(blog.category);
  const gradient = darkGradient(blog.category);

  return (
    <motion.a
      href={`/blog/${blog.slug}`}
      className="blog-grid-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <div className="blog-grid-img"
        style={{ background: !blog.featuredImage ? gradient : undefined }}>
        {blog.featuredImage
          ? <img src={blog.featuredImage} alt={blog.title} />
          : <span className="blog-hero-placeholder-text">{catLabel}</span>}
        <span className="blog-hero-cat-badge"
          style={{ color: catColor, borderColor: catColor + "40", background: catColor + "18" }}>
          {catLabel.toUpperCase()}
        </span>
      </div>

      <div className="blog-grid-body">
        <h4 className="blog-grid-title">{blog.title}</h4>
        {blog.excerpt && <p className="blog-grid-excerpt">{blog.excerpt}</p>}
        <div className="blog-hero-footer">
          <span className="blog-read-more small">Read More <ArrowRight /></span>
          <div className="blog-hero-meta">
            {blog.readTime && <span><ClockIcon /> {blog.readTime}</span>}
            <span><CalIcon /> {formatDate(blog.publishedAt || blog.createdAt)}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

/* ─── Placeholder data shown when no published blogs ─── */
const PLACEHOLDER_BLOGS: Blog[] = [
  {
    _id: "p1", slug: "#", status: "published", category: "web-dev",
    title: "Building a Modern Full-Stack Developer Portfolio with Next.js 15, TypeScript, Tailwind CSS, and MongoDB",
    excerpt: "Learn how I built a modern full-stack developer portfolio using Next.js 15, React, TypeScript, Tailwind CSS, MongoDB, and Framer Motion. This article covers planning, project structure, responsive UI design, animations, dynamic routing, authentication, blog management…",
    readTime: "8 min read", publishedAt: "2025-07-15T00:00:00Z", createdAt: "2025-07-15T00:00:00Z",
  },
  {
    _id: "p2", slug: "#", status: "published", category: "backend",
    title: "Building Scalable Backend Systems with Precision",
    excerpt: "Explore architecture patterns, best practices, and tools for building scalable and maintainable backend systems.",
    readTime: "6 min read", publishedAt: "2025-07-10T00:00:00Z", createdAt: "2025-07-10T00:00:00Z",
  },
  {
    _id: "p3", slug: "#", status: "published", category: "system-design",
    title: "System Design Fundamentals for Modern Applications",
    excerpt: "Deep dive into load balancing, caching strategies, database sharding, and microservices patterns.",
    readTime: "10 min read", publishedAt: "2025-07-05T00:00:00Z", createdAt: "2025-07-05T00:00:00Z",
  },
  {
    _id: "p4", slug: "#", status: "published", category: "cloud",
    title: "Mastering AWS Serverless Architectures",
    excerpt: "Learn how to build scalable, cost-effective serverless applications using AWS Lambda, API Gateway, and DynamoDB.",
    readTime: "7 min read", publishedAt: "2025-06-20T00:00:00Z", createdAt: "2025-06-20T00:00:00Z",
  },
  {
    _id: "p5", slug: "#", status: "published", category: "database",
    title: "PostgreSQL Performance Tuning Guide",
    excerpt: "Essential tips and techniques for optimizing PostgreSQL performance, including indexing strategies and query analysis.",
    readTime: "12 min read", publishedAt: "2025-06-10T00:00:00Z", createdAt: "2025-06-10T00:00:00Z",
  },
  {
    _id: "p6", slug: "#", status: "published", category: "devops",
    title: "CI/CD Best Practices with GitHub Actions",
    excerpt: "Automate your testing and deployment workflows effectively using GitHub Actions and Docker containers.",
    readTime: "5 min read", publishedAt: "2025-05-28T00:00:00Z", createdAt: "2025-05-28T00:00:00Z",
  },
];

/* ════════════════════════════════════
   PAGE
════════════════════════════════════ */
export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All Posts");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setBlogs(result.data.filter((b: Blog) => b.status === "published"));
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
    Cloud: "cloud",
    "AI / ML": "ai-ml",
  };

  const filterButtons = ["All Posts", ...Object.keys(filterMap)];
  const source = blogs.length > 0 ? blogs : PLACEHOLDER_BLOGS;
  const filtered = activeFilter === "All Posts"
    ? source
    : source.filter((b) => b.category === filterMap[activeFilter]);

  const [featured, ...sidebarBlogs] = filtered;
  const topSidebarBlogs = sidebarBlogs.slice(0, 2);
  const remainingBlogs = sidebarBlogs.slice(2);

  return (
    <PageShell>
      <section id="blog" className="blog-section">

        {/* ══ HERO BANNER ══ */}
        <div className="blog-hero-banner">
          {/* Decorative particles */}
          <span className="bp bp-orange bp-1">◆</span>
          <span className="bp bp-purple bp-2">◆</span>
          <span className="bp bp-blue bp-3">×</span>
          <span className="bp bp-orange bp-4">○</span>
          <span className="bp bp-purple bp-5">×</span>

          <div className="blog-banner-inner">
            {/* Left */}
            <motion.div className="blog-banner-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className="blog-banner-title">
                Latest <span className="blog-title-accent">Blog</span> Insights
                <span className="blog-title-sparkle" aria-hidden="true">✦</span>
              </h1>
              <p className="blog-banner-desc">
                Expert articles, tutorials and deep-dives on full-stack development,
                backend systems, cloud &amp; DevOps.
              </p>
              <div className="blog-banner-actions">
                <a href="#blog-grid" className="blog-cta-btn">
                  Read More Blogs <ArrowRight />
                </a>
                <span className="blog-banner-badge">
                  <ClockIcon /> New articles every week
                </span>
              </div>
            </motion.div>

            {/* Right illustration */}
            <motion.div className="blog-banner-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}>
              <img src="/blog-hero.png" alt="Blog illustration" className="blog-banner-img" />
            </motion.div>
          </div>
        </div>

        <div className="blog-container" id="blog-grid">

          {/* ══ FILTER PILLS ══ */}
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

          {/* ══ CONTENT ══ */}
          {loading ? (
            <div className="blog-loading">
              <div className="blog-spinner" />
              <p>Loading posts…</p>
            </div>
          ) : filtered.length > 0 ? (
            <>
              <div className="blog-layout">
                {featured && <HeroCard blog={featured} />}
                {topSidebarBlogs.length > 0 && (
                  <div className="blog-sidebar">
                    {topSidebarBlogs.map((b, i) => (
                      <SideCard key={b._id} blog={b} index={i} />
                    ))}
                  </div>
                )}
              </div>

              {/* ══ REMAINING BLOGS GRID ══ */}
              {remainingBlogs.length > 0 && (
                <div className="more-blogs-section">
                  <h3 className="more-blogs-title">More Articles</h3>
                  <div className="more-blogs-grid">
                    {remainingBlogs.map((b, i) => (
                      <GridCard key={b._id} blog={b} index={i} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p className="blog-empty">No posts found for this category.</p>
          )}
        </div>
      </section>
    </PageShell>
  );
}