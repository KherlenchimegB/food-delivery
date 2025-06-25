import mongoose from "mongoose";

const { Schema, model } = mongoose;

const food = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    ingredients: String,
  },
  { timestamps: true }
);

export const Food = model("Food", food);
