import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: "super_admin",
      enum: ["super_admin"],
    },
  },
  { timestamps: true }
);

export type AdminDocument = InferSchemaType<typeof adminSchema> & {
  _id: mongoose.Types.ObjectId;
};

const Admin: Model<AdminDocument> =
  mongoose.models.Admin || mongoose.model<AdminDocument>("Admin", adminSchema);

export default Admin;