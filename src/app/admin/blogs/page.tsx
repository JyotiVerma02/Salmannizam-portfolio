"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import "@/styles/admin/blogs.css";

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
);
const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
    />
  </svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);
const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const CATEGORY_BADGE_CLASSES: Record<string, string> = {
  "web-dev": "badge-blue",
  devops: "badge-orange",
  database: "badge-purple",
  "system-design": "badge-green",
  cloud: "badge-cyan",
  "ai-ml": "badge-pink",
  backend: "badge-amber",
};

const FALLBACK_BADGE_CLASSES = [
  "badge-blue",
  "badge-orange",
  "badge-purple",
  "badge-green",
] as const;

function getCategoryBadgeClass(category?: string, index?: number) {
  if (category && CATEGORY_BADGE_CLASSES[category]) {
    return CATEGORY_BADGE_CLASSES[category];
  }

  if (typeof index === "number") {
    return FALLBACK_BADGE_CLASSES[index % FALLBACK_BADGE_CLASSES.length];
  }

  return "badge-gray";
}
export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [sortOrder, setSortOrder] = useState("newest");
  const [previewBlog, setPreviewBlog] = useState<any | null>(null);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  async function fetchBlogs() {
    try {
      const response = await fetch("/api/blogs");

      const result = await response.json();

      if (result.success) {
        setBlogs(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (previewBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [previewBlog]);

  const filteredAndSortedBlogs = useMemo(() => {
    return blogs
      .filter((blog) => {
        // Category filter
        if (
          selectedCategory !== "All Categories" &&
          blog.category !== selectedCategory
        ) {
          return false;
        }
        // Status filter
        if (
          selectedStatus !== "All Status" &&
          blog.status !== selectedStatus.toLowerCase()
        ) {
          return false;
        }
        // Search query filter
        const query = searchQuery.toLowerCase();
        return (
          blog.title.toLowerCase().includes(query) ||
          (blog.category && blog.category.toLowerCase().includes(query)) ||
          (blog.tags &&
            blog.tags.some((tag: string) => tag.toLowerCase().includes(query)))
        );
      })
      .sort((a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [blogs, searchQuery, selectedCategory, selectedStatus, sortOrder]);

  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleFilterSelect = (
    setter: Function,
    value: string,
    dropdownName: string,
  ) => {
    setter(value);
    setOpenDropdown(null);
  };
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result.success) {
        // Remove deleted blog from UI
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));

        alert("Blog deleted successfully");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Delete error:", error);

      alert("Failed to delete blog");
    }
  };

  // Calculate stats
  const totalPosts = filteredAndSortedBlogs.length;
  const publishedPosts = filteredAndSortedBlogs.filter(
    (blog) => blog.status === "published",
  ).length;
  const draftPosts = filteredAndSortedBlogs.filter(
    (blog) => blog.status === "draft",
  ).length;
  const archivedPosts = filteredAndSortedBlogs.filter(
    (blog) => blog.status === "archived",
  ).length;

  return (
    <div className="admin-content-wrapper">
      <div className="admin-page-header">
        <div className="admin-page-header-text">
          <div className="admin-page-icon">
            <DocumentIcon />
          </div>
          <div>
            <h1>Blog Posts</h1>
            <p>Manage, create and publish your blog posts.</p>
          </div>
        </div>
        <Link href="/admin/blogs/new" className="admin-primary-btn">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Blog Post
        </Link>
      </div>

      <div className="admin-filters-row">
        <div className="admin-search-input">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search blogs by title, category or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="admin-dropdown-wrapper">
          <button
            className="admin-dropdown-btn"
            onClick={() => handleDropdown("category")}
          >
            {selectedCategory}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openDropdown === "category" && (
            <div className="admin-dropdown-menu">
              <button
                onClick={() =>
                  handleFilterSelect(
                    setSelectedCategory,
                    "All Categories",
                    "category",
                  )
                }
              >
                All Categories
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(setSelectedCategory, "web-dev", "category")
                }
              >
                Web Development
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(setSelectedCategory, "devops", "category")
                }
              >
                DevOps
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(
                    setSelectedCategory,
                    "database",
                    "category",
                  )
                }
              >
                Database
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(
                    setSelectedCategory,
                    "system-design",
                    "category",
                  )
                }
              >
                System Design
              </button>
            </div>
          )}
        </div>
        <div className="admin-dropdown-wrapper">
          <button
            className="admin-dropdown-btn"
            onClick={() => handleDropdown("status")}
          >
            {selectedStatus}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openDropdown === "status" && (
            <div className="admin-dropdown-menu">
              <button
                onClick={() =>
                  handleFilterSelect(setSelectedStatus, "All Status", "status")
                }
              >
                All Status
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(setSelectedStatus, "Published", "status")
                }
              >
                Published
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(setSelectedStatus, "Draft", "status")
                }
              >
                Draft
              </button>
            </div>
          )}
        </div>
        <div className="admin-dropdown-wrapper">
          <button
            className="admin-dropdown-btn"
            onClick={() => handleDropdown("sort")}
          >
            Sort: {sortOrder === "newest" ? "Newest" : "Oldest"}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openDropdown === "sort" && (
            <div className="admin-dropdown-menu">
              <button
                onClick={() =>
                  handleFilterSelect(setSortOrder, "newest", "sort")
                }
              >
                Newest
              </button>
              <button
                onClick={() =>
                  handleFilterSelect(setSortOrder, "oldest", "sort")
                }
              >
                Oldest
              </button>
            </div>
          )}
        </div>
        <button className="admin-icon-btn">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
        </button>
      </div>

      {/* Step 9: Dynamic Stats */}
      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-blue">
            <DocumentIcon />
          </div>
          <div className="admin-stat-info">
            <strong>{totalPosts}</strong>
            <span>Total Posts</span>
            <small>All time blog posts</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-green">
            <CheckIcon />
          </div>
          <div className="admin-stat-info">
            <strong>{publishedPosts}</strong>
            <span>Published</span>
            <small>Live on website</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-yellow">
            <EditIcon />
          </div>
          <div className="admin-stat-info">
            <strong>{draftPosts}</strong>
            <span>Drafts</span>
            <small>Not published yet</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-gray">
            <ArchiveIcon />
          </div>
          <div className="admin-stat-info">
            <strong>{archivedPosts}</strong>
            <span>Archived</span>
            <small>Moved to archive</small>
          </div>
        </div>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>POST</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Loading state
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#64748b",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        background: "#f1f5f9",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          border: "3px solid #e2e8f0",
                          borderTop: "3px solid #4338ca",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#0f172a",
                          fontSize: 15,
                          marginBottom: 4,
                        }}
                      >
                        Loading blogs...
                      </strong>
                      <span style={{ fontSize: 13 }}>
                        Please wait while we fetch your posts.
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ) : filteredAndSortedBlogs.length > 0 ? (
              // Step 3: Use real blogs data
              filteredAndSortedBlogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td>
                    <div className="admin-table-post">
                      <div
                        className="admin-table-post-img"
                        style={{
                          background: blog.iconBg || "#f1f5f9",
                          color: blog.iconColor || "#64748b",
                        }}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <div className="admin-table-post-info">
                        <strong>{blog.title}</strong>

                        <span>
                          {blog.excerpt ||
                            blog.description ||
                            "No excerpt available"}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {/* Step 8: Category */}
                    <span className={`admin-badge ${getCategoryBadgeClass(blog.category, index)}`}>
                      {blog.category || "Uncategorized"}
                    </span>
                  </td>
                  <td>
                    {/* Step 7: Fix status */}
                    <span
                      className={`admin-status ${blog.status === "published" ? "status-published" : "status-draft"}`}
                    >
                      {blog.status === "published"
                        ? "Published"
                        : blog.status === "draft"
                          ? "Draft"
                          : blog.status || "Unknown"}
                    </span>
                  </td>
                  <td>
                    <div className="admin-date">
                      <strong>
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )
                          : "No date"}
                      </strong>
                      <span>{blog.readingTime}</span>
                    </div>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <Link
                        href={`/admin/blogs/${blog._id}/edit`}
                        className="admin-action-btn"
                      >
                        <EditIcon />
                      </Link>
                      <button
                        className="admin-action-btn"
                        onClick={() => setPreviewBlog(blog)}
                      >
                        <ViewIcon />
                      </button>
                      <button
                        className="admin-action-btn delete"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              // Empty state
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                    padding: "60px 20px",
                    color: "#64748b",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 24,
                        background: "#f1f5f9",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <DocumentIcon />
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#0f172a",
                          fontSize: 15,
                          marginBottom: 4,
                        }}
                      >
                        No blog posts yet
                      </strong>
                      <span style={{ fontSize: 13 }}>
                        Click the "New Blog Post" button to get started.
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <span className="admin-pagination-text">
          Showing 0 to 0 of 0 results
        </span>
        <div className="admin-pagination-controls">
          <button className="admin-page-btn">&lt;</button>
          <button className="admin-page-btn active">1</button>
          <button className="admin-page-btn">&gt;</button>
        </div>
      </div>

      {/* â”€â”€ Blog Preview Modal â”€â”€ */}
      {previewBlog && (
        <div
          className="blog-preview-backdrop"
          onClick={() => setPreviewBlog(null)}
        >
          <div
            className="blog-preview-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="blog-preview-header">
              <div className="blog-preview-header-left">
                <span
                  className={`admin-status ${
                    previewBlog.status === "published"
                      ? "status-published"
                      : "status-draft"
                  }`}
                >
                  {previewBlog.status === "published" ? "Published" : "Draft"}
                </span>
                <span className={`blog-preview-category ${getCategoryBadgeClass(previewBlog.category)}`}>
                  {previewBlog.category || "Uncategorized"}
                </span>
              </div>
              <button
                className="blog-preview-close"
                onClick={() => setPreviewBlog(null)}
                title="Close preview"
              >
                âœ•
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="blog-preview-scroll-area">
              {/* Featured image */}
              {previewBlog.featuredImage && (
                <div className="blog-preview-image-wrap">
                  <img
                    src={previewBlog.featuredImage}
                    alt={previewBlog.title}
                    className="blog-preview-image"
                  />
                </div>
              )}

              {/* Body */}
              <div className="blog-preview-body">
                <div className="blog-preview-meta">
                  {previewBlog.readTime && (
                    <span>â± {previewBlog.readTime}</span>
                  )}
                  <span>
                    ðŸ“…{" "}
                    {new Date(
                      previewBlog.publishedAt || previewBlog.createdAt
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="blog-preview-title">{previewBlog.title}</h2>

                {previewBlog.excerpt ? (
                  <p className="blog-preview-excerpt">{previewBlog.excerpt}</p>
                ) : previewBlog.content ? (
                  <p className="blog-preview-excerpt">
                    {previewBlog.content.substring(0, 120)}...
                  </p>
                ) : null}

                {previewBlog.tags && previewBlog.tags.length > 0 && (
                  <div className="blog-preview-tags">
                    {previewBlog.tags.map((tag: string) => (
                      <span key={tag} className="blog-preview-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Footer */}
            <div className="blog-preview-footer">
              <Link
                href={`/admin/blogs/${previewBlog._id}/edit`}
                className="admin-primary-btn"
                onClick={() => setPreviewBlog(null)}
              >
                Edit this post
              </Link>
              {previewBlog.status === "published" && (
                <a
                  href={`/blog/${previewBlog.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="admin-primary-btn blog-preview-open-btn"
                >
                  Open public page â†—
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




