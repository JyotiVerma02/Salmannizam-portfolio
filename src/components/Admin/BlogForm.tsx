"use client";

import { Bold, Italic, Link, List, Code, UploadCloud } from "lucide-react";
import RichTextEditor from "@/components/editor/RichTextEditor"; // ← ADD THIS

export type BlogFormProps = {
  formData: any;
  handleInputChange: any;
  handleSelectChange: any;
  handleContentChange: (content: string) => void; // ← ADD THIS
  handleImageUpload: any;
  handleImageClick: any;
  fileInputRef: any;
  onSaveDraft: () => void;
  onPublish: () => void;
  isSubmitting: boolean;
  title: string;
  publishButtonText: string;
  draftButtonText: string;
};

export default function BlogForm({
  formData,
  handleInputChange,
  handleSelectChange,
  handleContentChange, // ← ADD THIS
  handleImageUpload,
  handleImageClick,
  fileInputRef,
  onSaveDraft,
  onPublish,
  isSubmitting,
  title,
  publishButtonText,
  draftButtonText,
}: BlogFormProps) {
  const isPublishing = isSubmitting && publishButtonText.includes("Publish");
  const isSaving = isSubmitting && draftButtonText.includes("Save");

  return (
    <div className="new-blog-container">
      <div className="new-blog-header-actions">
        <button
          type="button"
          onClick={onSaveDraft}
          disabled={isSubmitting}
          className="admin-primary-btn new-blog-draft-btn"
        >
          {isSaving ? "Saving..." : draftButtonText}
        </button>
        <button
          type="button"
          onClick={onPublish}
          disabled={isSubmitting}
          className="admin-primary-btn"
        >
          {isPublishing ? "Publishing..." : publishButtonText}
        </button>
      </div>

      <div className="new-blog-grid">
        {/* Main Content Column */}
        <div className="new-blog-col">
          <div className="new-blog-card">
            <div>
              <label htmlFor="title" className="new-blog-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title || ""}
                onChange={handleInputChange}
                className="new-blog-input"
                placeholder="Enter post title"
              />
            </div>
            <div>
              <label htmlFor="slug" className="new-blog-label">
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug || ""}
                onChange={handleInputChange}
                className="new-blog-input"
                placeholder="enter-blog-slug"
              />
            </div>
          </div>

          <div className="new-blog-card">
            <h3 className="new-blog-card-title">Content</h3>
            {/* REPLACE the entire editor wrapper with this */}
            <div className="new-blog-editor-wrapper">
              <RichTextEditor
                value={formData.content || ""}
                onChange={handleContentChange}
              />
            </div>
          </div>

          <div className="new-blog-card">
            <h3 className="new-blog-card-title">Excerpt</h3>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt || ""}
              onChange={handleInputChange}
              rows={4}
              className="new-blog-input"
              placeholder="Brief summary of your blog post..."
            />
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="new-blog-col">
          <div className="new-blog-card">
            <h3 className="new-blog-card-title">Featured Image</h3>
            <div
              className={`new-blog-image-upload${formData.featuredImage ? " has-image" : ""}`}
              onClick={handleImageClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              {formData.featuredImage ? (
                <>
                  <img
                    src={formData.featuredImage}
                    alt="Featured"
                  />
                  <div className="new-blog-image-overlay">
                    <UploadCloud size={28} />
                    <span>Change Image</span>
                  </div>
                </>
              ) : (
                <>
                  <UploadCloud size={32} />
                  <strong>Click to upload</strong>
                  <span>PNG, JPG, or WEBP (max 5MB)</span>
                </>
              )}
            </div>
          </div>

          <div className="new-blog-card">
            <h3 className="new-blog-card-title">Details</h3>
            <div>
              <label htmlFor="category" className="new-blog-label">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category || ""}
                onChange={handleSelectChange}
                className="new-blog-select"
              >
                <option value="">Select Category</option>
                <option value="web-dev">Web Development</option>
                <option value="devops">DevOps</option>
                <option value="database">Database</option>
                <option value="system-design">System Design</option>
              </select>
            </div>
            <div>
              <label htmlFor="tags" className="new-blog-label">
                Tags
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags || ""}
                onChange={handleInputChange}
                placeholder="React, Next.js, MongoDB"
                className="new-blog-input"
              />
            </div>
            <div>
              <label htmlFor="readTime" className="new-blog-label">
                Reading Time
              </label>
              <input
                type="text"
                id="readTime"
                name="readTime"
                value={formData.readTime || ""}
                onChange={handleInputChange}
                placeholder="e.g., 5 min read"
                className="new-blog-input"
              />
            </div>
            <div>
              <label htmlFor="status" className="new-blog-label">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status || "draft"}
                onChange={handleSelectChange}
                className="new-blog-select"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}