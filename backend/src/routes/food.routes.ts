import express from "express";
import {
  getAllFoods,
  getFoodByid,
  createFood,
  updateFood,
  deleteFood,
} from "../controllers/food.controller.js";
import verifyToken from "../middleware/auth.js";

const foodsRouter = express.Router();

foodsRouter.get("/", getAllFoods);
foodsRouter.post("/", verifyToken, createFood);
foodsRouter.patch("/:foodId", verifyToken, updateFood);
foodsRouter.delete("/:foodId", verifyToken, deleteFood);
foodsRouter.get("/:foodId", getFoodByid);

export default foodsRouter;
