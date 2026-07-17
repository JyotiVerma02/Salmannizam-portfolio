"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import BlogForm from "@/components/Admin/BlogForm";
import RichTextEditor from "@/components/editor/RichTextEditor";
import "@/styles/admin/new-blog.css";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    featuredImage: "",
    status: "draft",
    readTime: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title) {
      const generatedSlug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
      }));
    }
  }, [formData.title]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({
      ...prev,
      content: content,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveDraft = async () => {
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
            .map((tag) => tag.trim())
            .filter(Boolean),
          status: "draft",
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Draft saved successfully!");
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
            .map((tag) => tag.trim())
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

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }

    const validTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only PNG and JPG files are allowed");
      return;
    }

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: reader.result,
          }),
        });

        const result = await response.json();

        if (result.success) {
          setFormData((prev) => ({
            ...prev,
            featuredImage: result.url,
          }));
        } else {
          alert(result.message);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <BlogForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      handleContentChange={handleContentChange} // ✅ ADD THIS LINE
      handleImageUpload={handleImageUpload}
      handleImageClick={handleImageClick}
      fileInputRef={fileInputRef}
      onSaveDraft={handleSaveDraft}
      onPublish={handlePublish}
      isSubmitting={isSubmitting}
      title="Create New Blog"
      draftButtonText="Save Draft"
      publishButtonText="Publish"
    />
  );
}