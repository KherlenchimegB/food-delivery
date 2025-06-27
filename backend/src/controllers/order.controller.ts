import { Request, Response } from "express";
import { Order } from "../models/order.models.js";

export const getAllOrder = async (request: Request, response: Response) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("foodOrderItems.food")
      .populate("category");
    response.json({ success: true, data: orders });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const getOrderByUserId = async (
  request: Request,
  response: Response
) => {
  try {
    const { foodOrderId } = request.params;
    const orderById = await Order.findById(foodOrderId);
    response.json({ success: true, data: orderById });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const createOrder = async (request: Request, response: Response) => {
  try {
    const createdOrder = request.body;
    const orders = await Order.create({
      ...createdOrder,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    response.json({ success: true, data: orders });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateOrderById = async (request: Request, response: Response) => {
  try {
    const updatedOrder = request.body;
    const { foodOrderId } = request.params;
    const order = await Order.findByIdAndUpdate(foodOrderId, updatedOrder, {
      new: true,
    });
    response.json({ success: true, data: order });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const deleteOrder = async (request: Request, response: Response) => {
  try {
    const deletedOrder = request.body;
    const { foodOrderId } = request.params;
    const order = await Order.findByIdAndDelete(foodOrderId, deletedOrder);
    response.json({ success: true, data: order });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
