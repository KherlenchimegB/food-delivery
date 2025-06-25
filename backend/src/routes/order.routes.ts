import express from "express";
import {
  getAllOrder,
  getOrderByUserId,
  createOrder,
  updateOrderById,
  deleteOrder,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.get("/", getAllOrder);
orderRouter.get("/:userId", getOrderByUserId);
orderRouter.post("/", createOrder);
orderRouter.patch("/:foodOrderId", updateOrderById);
orderRouter.delete("/:foodOrderId", deleteOrder);

export default orderRouter;
