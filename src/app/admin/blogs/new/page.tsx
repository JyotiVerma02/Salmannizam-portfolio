"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/styles/admin/new-blog.css";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    tags: "",
    featuredImage: null,
  });
  
  const fileInputRef = useRef(null);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special chars with hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
      
      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
      }));
    }
  }, [formData.title]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveDraft = async () => {
    // Validate required fields for draft
    if (!formData.title.trim()) {
      alert("Please enter a post title");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
  ...formData,
  tags: formData.tags
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean),

  status: "draft",
}),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Draft saved successfully!");
        // Redirect to edit page with correct ID
        router.push(`/admin/blogs/${result.data._id}/edit`);
      } else {
        const error = await response.json();
        alert(`Failed to save draft: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error saving draft:", error);
      alert("An error occurred while saving draft.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePublish = async () => {
    // Validate required fields
    if (!formData.title.trim()) {
      alert("Please enter a post title");
      return;
    }
    if (!formData.content.trim()) {
      alert("Please enter post content");
      return;
    }
    if (!formData.category) {
      alert("Please select a category");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
     body: JSON.stringify({
  ...formData,
  tags: formData.tags
    .split(",")
    .map(tag => tag.trim())
    .filter(Boolean),

  status: "published",
  publishedAt: new Date().toISOString(),
}),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Blog published successfully:", result);
        router.push("/admin/blogs");
      } else {
        const error = await response.json();
        alert(`Failed to publish post: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error publishing post:", error);
      alert("An error occurred while publishing the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      
      // Validate file type
      const validTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Only PNG and JPG files are allowed");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          featuredImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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
          <button 
            className="admin-dropdown-btn new-blog-draft-btn"
            onClick={handleSaveDraft}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Draft"}
          </button>
          <button 
            className="admin-primary-btn"
            onClick={handlePublish}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish Post"}
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
                name="title"
                value={formData.title}
                onChange={handleInputChange}
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
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  placeholder="authentication-in-nextjs" 
                  className="new-blog-slug-input"
                />
              </div>
              <small style={{ color: '#94a3b8', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                Slug is auto-generated from title. You can edit it manually.
              </small>
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
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
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
              <select 
                name="category"
                value={formData.category}
                onChange={handleSelectChange}
                className="new-blog-select"
              >
                <option value="">Select Category...</option>
                <option value="web-dev">Web Dev</option>
                <option value="devops">DevOps</option>
                <option value="database">Database</option>
                <option value="system-design">System Design</option>
              </select>
            </div>

            <div>
              <label className="new-blog-label">Tags</label>
              <input 
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                placeholder="React, Next.js, Auth" 
                className="new-blog-tag-input"
              />
            </div>
          </div>

          <div className="admin-stat-card new-blog-card">
            <h3 className="new-blog-card-title">Featured Image</h3>
            <div 
              className="new-blog-image-upload"
              onClick={handleImageClick}
            >
              {formData.featuredImage ? (
                <img 
                  src={formData.featuredImage} 
                  alt="Featured"
                  style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }}
                />
              ) : (
                <>
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#94a3b8" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <strong>Click to upload image</strong>
                  <span>PNG, JPG up to 5MB</span>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
            {formData.featuredImage && (
              <button 
                className="admin-dropdown-btn"
                style={{ marginTop: '12px', width: '100%' }}
                onClick={() => setFormData(prev => ({ ...prev, featuredImage: null }))}
              >
                Remove Image
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}