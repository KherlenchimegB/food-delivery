import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const order = new Schema(
  {
    user: { type: Types.ObjectId, ref: "User", required: true },
    totalPrice: Number,
    foodOrderItems: [
      {
        food: { type: Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true },
      },
    ],
    status: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = model("Order", order);
