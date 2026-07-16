import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

// GET all blogs
export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find().sort({ createdAt: -1 });
  

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Get Blogs Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
}

// POST new blog
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const blog = await Blog.create(body);

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        data: blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Blog Create Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
      },
      { status: 500 }
    );
  }
}