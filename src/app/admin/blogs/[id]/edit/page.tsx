"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchBlog();
  }, []);

  async function fetchBlog() {
    const res = await fetch(`/api/blogs/${id}`);
    const data = await res.json();

    console.log(data);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Blog</h1>
    </div>
  );
}