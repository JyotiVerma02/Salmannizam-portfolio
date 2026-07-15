import Link from "next/link";
import Image from "next/image";
import "@/styles/admin/blogs.css";

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
);
const ArchiveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
);

const ViewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
);
const DeleteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
);

export default function AdminBlogsPage() {
  const dummyBlogs: any[] = [];

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
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
          New Blog Post
        </Link>
      </div>

      <div className="admin-filters-row">
        <div className="admin-search-input">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input type="text" placeholder="Search blogs by title, category or tag..." />
        </div>
        <button className="admin-dropdown-btn">
          All Categories
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <button className="admin-dropdown-btn">
          All Status
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <button className="admin-dropdown-btn">
          Sort: Newest
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <button className="admin-icon-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>
        </button>
      </div>

      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-blue">
            <DocumentIcon />
          </div>
          <div className="admin-stat-info">
            <strong>0</strong>
            <span>Total Posts</span>
            <small>All time blog posts</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-green">
            <CheckIcon />
          </div>
          <div className="admin-stat-info">
            <strong>0</strong>
            <span>Published</span>
            <small>Live on website</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-yellow">
            <EditIcon />
          </div>
          <div className="admin-stat-info">
            <strong>0</strong>
            <span>Drafts</span>
            <small>Not published yet</small>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon stat-gray">
            <ArchiveIcon />
          </div>
          <div className="admin-stat-info">
            <strong>0</strong>
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
            {dummyBlogs.length > 0 ? dummyBlogs.map(blog => (
              <tr key={blog.id}>
                <td>
                  <div className="admin-table-post">
                    <div className="admin-table-post-img" style={{background: blog.iconBg, color: blog.iconColor}}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </div>
                    <div className="admin-table-post-info">
                      <strong>{blog.title}</strong>
                      <span>{blog.description}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`admin-badge ${blog.color}`}>{blog.category}</span>
                </td>
                <td>
                  <span className={`admin-status ${blog.status === 'Published' ? 'status-published' : 'status-draft'}`}>
                    {blog.status}
                  </span>
                </td>
                <td>
                  <div className="admin-date">
                    <strong>{blog.date}</strong>
                    <span>{blog.readTime}</span>
                  </div>
                </td>
                <td>
                  <div className="admin-actions">
                    <button className="admin-action-btn"><EditIcon /></button>
                    <button className="admin-action-btn"><ViewIcon /></button>
                    <button className="admin-action-btn delete"><DeleteIcon /></button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 24, background: '#f1f5f9', display: 'grid', placeItems: 'center' }}>
                      <DocumentIcon />
                    </div>
                    <div>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: 15, marginBottom: 4 }}>No blog posts yet</strong>
                      <span style={{ fontSize: 13 }}>Click the "New Blog Post" button to get started.</span>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-pagination">
        <span className="admin-pagination-text">Showing 0 to 0 of 0 results</span>
        <div className="admin-pagination-controls">
          <button className="admin-page-btn">&lt;</button>
          <button className="admin-page-btn active">1</button>
          <button className="admin-page-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
}
