"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import BlogForm from "@/components/Admin/BlogForm";
import "@/styles/admin/new-blog.css";

export default function EditBlogPostPage() {
  const params = useParams();
  const id = params.id as string;
  
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
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

  // Fetch blog data
  useEffect(() => {
    if (!id) return;
    
    fetch(`/api/blogs/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success && result.data) {
          const blog = result.data;
          setFormData({
            title: blog.title || "",
            slug: blog.slug || "",
            excerpt: blog.excerpt || "",
            content: blog.content || "",
            category: blog.category || "",
            tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : (blog.tags || ""),
            featuredImage: blog.featuredImage || "",
            status: blog.status || "draft",
            readTime: blog.readTime || "",
          });
        } else {
          alert("Failed to load blog for editing");
          router.push("/admin/blogs");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error loading blog");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, router]);

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

  const handleSave = async (status: "draft" | "published") => {
    if (!formData.title.trim()) {
      alert("Please enter a post title");
      return;
    }
    if (status === "published" && !formData.content.trim()) {
      alert("Please enter post content before publishing");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          status,
          ...(status === "published" ? { publishedAt: new Date().toISOString() } : {}),
        }),
      });

      if (response.ok) {
        alert(`Blog ${status === "published" ? "published" : "draft saved"} successfully!`);
        if (status === "published") {
          router.push("/admin/blogs");
        }
      } else {
        const error = await response.json();
        alert(`Failed to save: ${error.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert("An error occurred while saving the blog.");
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

  if (loading) {
    return (
      <div style={{ padding: "3rem", textAlign: "center", color: "#fff" }}>
        Loading blog data...
      </div>
    );
  }

  return (
    <BlogForm
      formData={formData}
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      handleContentChange={handleContentChange}
      handleImageUpload={handleImageUpload}
      handleImageClick={handleImageClick}
      fileInputRef={fileInputRef}
      onSaveDraft={() => handleSave("draft")}
      onPublish={() => handleSave("published")}
      isSubmitting={isSubmitting}
      title="Edit Blog"
      draftButtonText="Save Changes (Draft)"
      publishButtonText="Update & Publish"
    />
  );
}
