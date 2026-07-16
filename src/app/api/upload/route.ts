import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  try {
    const { image } = await req.json();

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          message: "Image is required",
        },
        { status: 400 }
      );
    }

    const uploaded = await cloudinary.uploader.upload(image, {
      folder: "portfolio/blogs",
    });

    return NextResponse.json({
      success: true,
      url: uploaded.secure_url,
    });
  } catch (error: unknown) {
    let errorMessage = "Upload failed";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Upload Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    );
  }
}