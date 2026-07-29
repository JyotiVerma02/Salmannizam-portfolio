"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import BlogForm from "@/components/Admin/BlogForm";
import "@/styles/admin/new-blog.css";

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(true);
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

  useEffect(() => {
    if (!id) {
      return;
    }

    let cancelled = false;

    const loadBlog = async () => {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const result = await res.json();

        if (cancelled) {
          return;
        }

        if (result.success) {
          setFormData({
            ...result.data,
            tags: result.data.tags ? result.data.tags.join(", ") : "",
            readTime: result.data.readTime || "",
            featuredImage: result.data.featuredImage || "",
          });
        } else {
          alert(`Failed to load blog: ${result.message}`);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Error fetching blog:", error);
          alert("An error occurred while loading the blog.");
        }
      }
    };

    void loadBlog();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "slug") {
      setSlugManuallyEdited(true);
    }

    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

      setFormData((prev) => ({
        ...prev,
        [name]: value,
        slug: slugManuallyEdited ? prev.slug : generatedSlug,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          status: "draft",
        }),
      });

      if (response.ok) {
        alert("Changes saved successfully!");
      } else {
        const error = await response.json();
        alert(`Failed to save changes: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("An error occurred while saving changes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateBlog = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
          status: "published",
        }),
      });

      if (response.ok) {
        alert("Blog updated successfully!");
        router.push("/admin/blogs");
      } else {
        const error = await response.json();
        alert(`Failed to update post: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error updating post:", error);
      alert("An error occurred while updating the post.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image: reader.result }),
        });
        const result = await response.json();
        if (result.success) {
          setFormData((prev) => ({ ...prev, featuredImage: result.url }));
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
    fileInputRef.current?.click();
  };

  return (
    <BlogForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      handleContentChange={handleContentChange}
      handleImageUpload={handleImageUpload}
      handleImageClick={handleImageClick}
      fileInputRef={fileInputRef}
      onSaveDraft={handleSaveChanges}
      onPublish={handleUpdateBlog}
      isSubmitting={isSubmitting}
      title="Edit Blog"
      draftButtonText="Save Changes"
      publishButtonText="Update Blog"
    />
  );
}