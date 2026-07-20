"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import PageShell from "@/components/Common/PageShell";
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

type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
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

const CATEGORY_ACCENT: Record<string, string> = {
  "web-dev": "#5b5ef7",
  devops: "#f97316",
  database: "#2563eb",
  "system-design": "#7c3aed",
  cloud: "#0891b2",
  "ai-ml": "#db2777",
  backend: "#ea580c",
};

function formatDate(dateStr?: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72) || "section";
}

function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function decorateContent(content: string) {
  const toc: TocItem[] = [];
  const headingCounts: Record<string, number> = {};

  const html = content.replace(
    /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
    (match, level, attrs, inner) => {
      const title = stripHtml(String(inner));
      if (!title) return match;

      const existingId = String(attrs).match(/\sid\s*=\s*["']([^"']+)["']/i)?.[1];
      let id = existingId || "";

      if (!id) {
        const base = slugify(title);
        const count = headingCounts[base] || 0;
        headingCounts[base] = count + 1;
        id = count > 0 ? `${base}-${count + 1}` : base;
      }

      if (!toc.some((item) => item.id === id)) {
        toc.push({ id, title, level: Number(level) as 2 | 3 });
      }

      const attrsWithoutId = String(attrs).replace(/\sid\s*=\s*["'][^"']*["']/i, "");
      return `<h${level}${attrsWithoutId} id="${id}">${inner}</h${level}>`;
    },
  );

  return { html, toc };
}

function getEstimatedReadTime(blog?: Blog | null) {
  if (blog?.readTime) return blog.readTime;
  const words = stripHtml(blog?.content || blog?.excerpt || "").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 220));
  return `${mins} min read`;
}

function getReadingStats(blog?: Blog | null, tocCount = 0) {
  const words = stripHtml(blog?.content || blog?.excerpt || "").split(/\s+/).filter(Boolean).length;
  return {
    words,
    sections: Math.max(tocCount, 1),
    tags: blog?.tags?.length || 0,
  };
}

function getCategoryLabel(category?: string) {
  if (!category) return "Article";
  return CATEGORY_LABELS[category] || category;
}

function getCategoryAccent(category?: string) {
  if (!category) return CATEGORY_ACCENT["web-dev"];
  return CATEGORY_ACCENT[category] || CATEGORY_ACCENT["web-dev"];
}

function AvatarMark() {
  return <span className="blog-detail-avatar-mark">SN</span>;
}

function MetaIcon({ children }: { children: React.ReactNode }) {
  return <span className="blog-detail-meta-icon">{children}</span>;
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 7.8c0-2.3-1.9-4.2-4.2-4.2-1.6 0-3 .9-3.6 2.2-.6-1.3-2-2.2-3.6-2.2-2.3 0-4.2 1.9-4.2 4.2 0 6.2 7.8 10.6 7.8 10.6s7.8-4.4 7.8-10.6Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
      <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" />
      <path d="M12 3v13" />
      <path d="m7 8 5-5 5 5" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 12 2 2 4-5" />
      <path d="M12 2 4.5 5.5 3 13l4.5 8L12 22l4.5-1 4.5-8-1.5-7.5Z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  return <span className="blog-detail-social-label">{label}</span>;
}

function ArticlePreview({ blog, compact = false }: { blog: Blog; compact?: boolean }) {
  const accent = getCategoryAccent(blog.category);
  const category = getCategoryLabel(blog.category);

  return (
    <Link href={`/blog/${blog.slug}`} className={`blog-detail-related-item${compact ? " compact" : ""}`}>
      <div
        className="blog-detail-related-thumb"
        style={{
          background: blog.featuredImage
            ? "#0f172a"
            : `linear-gradient(135deg, ${accent} 0%, #111827 100%)`,
        }}
      >
        {blog.featuredImage ? (
          <img src={blog.featuredImage} alt={blog.title} />
        ) : (
          <span>{category.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="blog-detail-related-copy">
        <span className="blog-detail-related-category">{category}</span>
        <strong>{blog.title}</strong>
        <span>{getEstimatedReadTime(blog)}</span>
      </div>
    </Link>
  );
}

export default function BlogPostPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [publishedBlogs, setPublishedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const progressFillRef = useRef<HTMLSpanElement>(null);
  const progressLabelRef = useRef<HTMLSpanElement>(null);
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const slug = blog?.slug || "";

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadBlog() {
      try {
        setLoading(true);
        setNotFound(false);
        const [postResponse, blogsResponse] = await Promise.all([
          fetch(`/api/blogs/slug/${window.location.pathname.split("/").pop()}`, {
            signal: controller.signal,
          }),
          fetch("/api/blogs", { signal: controller.signal }),
        ]);

        if (cancelled) return;

        if (postResponse.ok) {
          const postResult = await postResponse.json();
          if (postResult.success) {
            setBlog(postResult.data);
          } else {
            setNotFound(true);
          }
        } else {
          setNotFound(true);
        }

        if (blogsResponse.ok) {
          const blogsResult = await blogsResponse.json();
          if (blogsResult.success) {
            const published = (blogsResult.data || [])
              .filter((item: Blog) => item.status === "published")
              .sort((a: Blog, b: Blog) => {
                const aTime = new Date(a.publishedAt || a.createdAt).getTime();
                const bTime = new Date(b.publishedAt || b.createdAt).getTime();
                return bTime - aTime;
              });
            setPublishedBlogs(published);
          }
        }
      } catch {
        if (!cancelled) {
          setNotFound(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadBlog();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  const decorated = useMemo(() => decorateContent(blog?.content || ""), [blog?.content]);
  const tocItems = decorated.toc;
  const contentHtml = decorated.html;
  const readTime = getEstimatedReadTime(blog);
  const stats = getReadingStats(blog, tocItems.length);
  const categoryLabel = getCategoryLabel(blog?.category);
  const accent = getCategoryAccent(blog?.category);
  const publishedDate = formatDate(blog?.publishedAt || blog?.createdAt);
  const relatedBlogs = useMemo(
    () => publishedBlogs.filter((item) => item._id !== blog?._id).slice(0, 3),
    [publishedBlogs, blog?._id],
  );
  const currentIndex = useMemo(
    () => publishedBlogs.findIndex((item) => item._id === blog?._id),
    [publishedBlogs, blog?._id],
  );
  const previousArticle = currentIndex >= 0 ? publishedBlogs[currentIndex + 1] : undefined;
  const nextArticle = currentIndex > 0 ? publishedBlogs[currentIndex - 1] : undefined;
  const heroHasImage = Boolean(blog?.featuredImage);
  const pageUrl = currentUrl || (blog ? `/blog/${blog.slug}` : "/blog");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [blog?.slug]);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      const clamped = Math.max(0, Math.min(100, value));

      if (progressFillRef.current) {
        progressFillRef.current.style.width = `${clamped}%`;
      }

      if (progressLabelRef.current) {
        progressLabelRef.current.textContent = `Reading Progress: ${Math.round(clamped)}%`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!tocItems.length) return;

    const elements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [tocItems, contentHtml]);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  if (loading) {
    return (
      <PageShell>
        <div className="blog-detail-state">
          <div className="blog-detail-spinner" />
          <p>Loading article...</p>
        </div>
      </PageShell>
    );
  }

  if (notFound || !blog) {
    return (
      <PageShell>
        <div className="blog-detail-state not-found">
          <span className="blog-detail-state-icon">404</span>
          <h2>Post not found</h2>
          <p>This article does not exist or has been removed.</p>
          <Link href="/blog" className="blog-detail-button">
            <ChevronLeftIcon />
            Back to Blog
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="blog-detail-page">
        <div className="blog-detail-progress-wrap" aria-hidden="true">
          <div className="blog-detail-progress-track">
            <span ref={progressFillRef} style={{ width: "0%" }} />
          </div>
          <span ref={progressLabelRef} className="blog-detail-progress-label">Reading Progress: 0%</span>
        </div>

        <section className="blog-detail-hero">
          <motion.div
            className="blog-detail-hero-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="blog-detail-hero-copy">
              <span
                className="blog-detail-kicker"
                style={{
                  color: accent,
                  borderColor: `${accent}33`,
                  background: `${accent}14`,
                }}
              >
                {categoryLabel}
              </span>

              <h1 className="blog-detail-title">{blog.title}</h1>

              {blog.excerpt && <p className="blog-detail-excerpt">{blog.excerpt}</p>}

              <div className="blog-detail-meta-row">
                <span>
                  <MetaIcon>
                    <CalendarIcon />
                  </MetaIcon>
                  {publishedDate}
                </span>
                <span>
                  <MetaIcon>
                    <ClockIcon />
                  </MetaIcon>
                  {readTime}
                </span>
                <span>
                  <MetaIcon>
                    <EyeIcon />
                  </MetaIcon>
                  {stats.sections} sections
                </span>
              </div>

              <div className="blog-detail-tag-row">
                {(blog.tags || []).slice(0, 4).map((tag) => (
                  <span key={tag} className="blog-detail-tag">
                    {tag}
                  </span>
                ))}
                {blog.status === "published" && <span className="blog-detail-status">Published</span>}
              </div>
            </div>

            <div className="blog-detail-hero-visual">
              <div className="blog-detail-glow blog-detail-glow-left" />
              <div className="blog-detail-glow blog-detail-glow-right" />

              {heroHasImage ? (
                <div className="blog-detail-image-frame">
                  <img src={blog.featuredImage} alt={blog.title} className="blog-detail-hero-image" />
                </div>
              ) : (
                <div className="blog-detail-image-frame placeholder" style={{ background: `linear-gradient(135deg, ${accent} 0%, #111827 100%)` }}>
                  <span>{categoryLabel}</span>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        <section className="blog-detail-shell">
          <aside className="blog-detail-share-rail" aria-label="Share article">
            <span className="blog-detail-share-label">
              <ShareIcon />
              Share
            </span>
            <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" aria-label="Share on X" className="blog-detail-share-btn">
              <SocialIcon label="X" />
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className="blog-detail-share-btn">
              <SocialIcon label="in" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook" className="blog-detail-share-btn">
              <SocialIcon label="f" />
            </a>
            <button type="button" onClick={handleCopyLink} className="blog-detail-share-btn" aria-label="Copy link">
              <LinkIcon />
            </button>
            <button type="button" onClick={handleCopyLink} className="blog-detail-share-btn" aria-label="Copy article link">
              {copied ? <SocialIcon label="OK" /> : <SocialIcon label="Copy" />}
            </button>
          </aside>

          <main className="blog-detail-main">
            <div className="blog-detail-main-header">
              <Link href="/blog" className="blog-detail-back-link">
                <ChevronLeftIcon />
                Back to Blogs
              </Link>

              <div className="blog-detail-author-card">
                <div className="blog-detail-author-copy">
                  <div className="blog-detail-author-avatar">
                    <AvatarMark />
                  </div>
                  <div>
                    <div className="blog-detail-author-name-row">
                      <strong>Salman Nizam</strong>
                      <span className="blog-detail-verified" aria-label="Verified author">
                        <VerifiedIcon />
                      </span>
                    </div>
                    <p>Full-Stack Developer</p>
                  </div>
                </div>
                <button type="button" className="blog-detail-follow-btn">
                  Follow
                </button>
              </div>
            </div>

            <div className="blog-detail-body">
              {blog.excerpt && (
                <div className="blog-detail-intro-card">
                  <strong>Overview</strong>
                  <p>{blog.excerpt}</p>
                </div>
              )}

              <div className="blog-detail-content">
                {contentHtml ? (
                  <div className="article-body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                ) : (
                  <div className="blog-detail-empty-copy">
                    <span>Content coming soon.</span>
                  </div>
                )}
              </div>
            </div>

            <div className="blog-detail-bottom-actions">
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="blog-detail-primary-action">
                Share article
                <ChevronRightIcon />
              </a>
              <button type="button" onClick={handleCopyLink} className="blog-detail-secondary-action">
                <LinkIcon />
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>

            {(previousArticle || nextArticle) && (
              <div className="blog-detail-nav-cards">
                {previousArticle ? (
                  <ArticlePreview blog={previousArticle} compact />
                ) : (
                  <Link href="/blog" className="blog-detail-nav-placeholder">
                    <ChevronLeftIcon />
                    <span>Browse all posts</span>
                  </Link>
                )}
                {nextArticle ? (
                  <ArticlePreview blog={nextArticle} compact />
                ) : (
                  <Link href="/blog" className="blog-detail-nav-placeholder right">
                    <span>Browse all posts</span>
                    <ChevronRightIcon />
                  </Link>
                )}
              </div>
            )}
          </main>

          <aside className="blog-detail-sidebar">
            <div className="blog-detail-card blog-detail-toc-card">
              <h2>Table of Contents</h2>
              <nav className="blog-detail-toc-list">
                {(tocItems.length ? tocItems : [{ id: "overview", title: "Overview", level: 2 as const }]).map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`blog-detail-toc-link level-${item.level}${activeSection === item.id ? " active" : ""}`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="blog-detail-card blog-detail-summary-card">
              <h2>On this page</h2>
              <div className="blog-detail-summary-metric">
                <strong>{readTime}</strong>
                <span>Reading time</span>
              </div>
              <div className="blog-detail-summary-grid">
                <div>
                  <EyeIcon />
                  <strong>{stats.sections}</strong>
                  <span>Sections</span>
                </div>
                <div>
                  <ClockIcon />
                  <strong>{stats.words || 0}</strong>
                  <span>Words</span>
                </div>
              </div>
            </div>

            {relatedBlogs.length > 0 && (
              <div className="blog-detail-card blog-detail-related-card">
                <h2>Related Articles</h2>
                <div className="blog-detail-related-list">
                  {relatedBlogs.map((item) => (
                    <ArticlePreview key={item._id} blog={item} />
                  ))}
                </div>
                <Link href="/blog" className="blog-detail-view-all">
                  View all articles
                  <ChevronRightIcon />
                </Link>
              </div>
            )}

            <div className="blog-detail-card blog-detail-newsletter-card">
              <div className="blog-detail-newsletter-icon">
                <span>@</span>
              </div>
              <h2>Join My Newsletter</h2>
              <p>Get the latest articles and updates straight to your inbox.</p>
              <form className="blog-detail-newsletter-form" onSubmit={(event) => event.preventDefault()}>
                <input type="email" placeholder="Enter your email" aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </aside>
        </section>
      </article>
    </PageShell>
  );
}



