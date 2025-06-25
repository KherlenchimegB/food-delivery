import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const order = new Schema({
  user: { type: Types.ObjectId, ref: "User" },
  totalPrice: Number,
  foodOrderItems: [
    {
      food: { type: Types.ObjectId, ref: "Food" },
      quantity: Number,
    },
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const Order = model("Order", order);
