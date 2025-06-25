import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const user = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: String,
    role: {
      type: String,
      enum: ["User", "Admin"],
      default: "User",
    },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const User = model("User", user);
