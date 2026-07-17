import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    excerpt: {
      type: String,
    },

    content: {
      type: String,
    },

   featuredImage: {
  type: String,
},

    category: {
      type: String,
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    readTime: {
      type: String,
    },

    publishedAt: {
      type: Date,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: true
  }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;