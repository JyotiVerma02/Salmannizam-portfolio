import Link from "next/link";
import "@/styles/admin/new-blog.css";

export default function NewBlogPostPage() {
  return (
    <div className="admin-content-wrapper new-blog-container">
      <div className="admin-page-header">
        <div className="admin-page-header-text">
          <div>
            <Link href="/admin/blogs" className="new-blog-back-link">
              &larr; Back to Blogs
            </Link>
            <h1>Create New Post</h1>
            <p>Write and publish a new blog post to your portfolio.</p>
          </div>
        </div>
        <div className="new-blog-header-actions">
          <button className="admin-dropdown-btn new-blog-draft-btn">
            Save Draft
          </button>
          <button className="admin-primary-btn">
            Publish Post
          </button>
        </div>
      </div>

      <div className="new-blog-grid">
        <div className="new-blog-col">
          <div className="admin-stat-card new-blog-card">
            <div>
              <label className="new-blog-label">Post Title</label>
              <input 
                type="text" 
                placeholder="e.g. Authentication in Next.js with JWT" 
                className="new-blog-input"
              />
            </div>
            
            <div>
              <label className="new-blog-label">Slug</label>
              <div className="new-blog-slug-wrapper">
                <span className="new-blog-slug-prefix">salmannizam.com/blog/</span>
                <input 
                  type="text" 
                  placeholder="authentication-in-nextjs" 
                  className="new-blog-slug-input"
                />
              </div>
            </div>

            <div>
              <label className="new-blog-label">Content</label>
              <div className="new-blog-editor-wrapper">
                <div className="new-blog-editor-toolbar">
                  {['B', 'I', 'U', 'Link', 'Image', 'Code'].map(tool => (
                    <button key={tool} className="new-blog-editor-tool">
                      {tool}
                    </button>
                  ))}
                </div>
                <textarea 
                  placeholder="Write your post content here... Markdown is supported." 
                  className="new-blog-editor-textarea"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="new-blog-col">
          <div className="admin-stat-card new-blog-card">
            <h3 className="new-blog-card-title">Settings</h3>
            
            <div>
              <label className="new-blog-label">Category</label>
              <select className="new-blog-select">
                <option>Select Category...</option>
                <option>Web Dev</option>
                <option>DevOps</option>
                <option>Database</option>
                <option>System Design</option>
              </select>
            </div>

            <div>
              <label className="new-blog-label">Tags</label>
              <input 
                type="text" 
                placeholder="React, Next.js, Auth" 
                className="new-blog-tag-input"
              />
            </div>
          </div>

          <div className="admin-stat-card new-blog-card">
            <h3 className="new-blog-card-title">Featured Image</h3>
            <div className="new-blog-image-upload">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#94a3b8" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <strong>Click to upload image</strong>
              <span>PNG, JPG up to 5MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
