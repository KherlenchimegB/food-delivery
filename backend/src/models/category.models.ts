import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const category = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = model("Category", category);
