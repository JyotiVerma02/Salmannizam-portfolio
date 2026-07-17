"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import PageShell from "@/components/Common/PageShell";
import "@/styles/blog.css";
import "@/styles/blog-post.css";

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

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/slug/${slug}`)
      .then((r) => r.json())
      .then((result) => {
        if (result.success) {
          setBlog(result.data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  /* ── Loading ── */
  if (loading) {
    return (
      <PageShell>
        <div className="blog-post-loading">
          <div className="blog-spinner" />
          <p>Loading article…</p>
        </div>
      </PageShell>
    );
  }

  /* ── Not Found ── */
  if (notFound || !blog) {
    return (
      <PageShell>
        <div className="blog-post-notfound">
          <span className="blog-post-notfound-icon">📭</span>
          <h2>Post not found</h2>
          <p>This article doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="blog-btn">
            ← Back to Blog
          </Link>
        </div>
      </PageShell>
    );
  }

  const categoryLabel = CATEGORY_LABELS[blog.category || ""] || blog.category;

  return (
    <PageShell>
      <article className="blog-post-page">
        {/* Hero — only shown when a featured image exists */}
        {blog.featuredImage && (
          <div className="blog-post-hero">
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="blog-post-hero-img"
            />
            <div className="blog-post-hero-overlay" />
          </div>
        )}

        {/* Content wrapper */}
        <div className="blog-post-container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/blog" className="blog-post-back">
              ← Back to Blog
            </Link>
          </motion.div>

          {/* Meta row */}
          <motion.div
            className="blog-post-meta-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {categoryLabel && (
              <span className="blog-meta-tag">{categoryLabel}</span>
            )}
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-date">
              {formatDate(blog.publishedAt || blog.createdAt)}
            </span>
            {blog.readTime && (
              <>
                <span className="blog-meta-dot">•</span>
                <span className="blog-meta-date">⏱ {blog.readTime}</span>
              </>
            )}
            <span
              className={`blog-post-status-badge ${
                blog.status === "published" ? "published" : "draft"
              }`}
            >
              {blog.status === "published" ? "Published" : "Draft"}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="blog-post-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {blog.title}
          </motion.h1>

          {/* Excerpt / Lead */}
          {blog.excerpt && (
            <motion.p
              className="blog-post-lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {blog.excerpt}
            </motion.p>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <motion.div
              className="blog-tech-tags blog-post-tags"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {blog.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </motion.div>
          )}

          {/* Divider */}
          <div className="blog-post-divider" />

          {/* Body content */}
          {blog.content ? (
            <motion.div
              className="blog-post-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br/>') }} />
            </motion.div>
          ) : (
            <motion.div
              className="blog-post-empty-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>✍️</span>
              <p>Content coming soon…</p>
            </motion.div>
          )}

          {/* Footer */}
          <div className="blog-post-footer">
            <Link href="/blog" className="blog-btn">
              ← All Posts
            </Link>
          </div>
        </div>
      </article>
    </PageShell>
  );
}