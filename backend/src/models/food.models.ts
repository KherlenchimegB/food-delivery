import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const food = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    ingredients: String,
    category: { type: Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);

export const Food = model("Food", food);
