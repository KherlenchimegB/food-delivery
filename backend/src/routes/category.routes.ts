import express from "express";
import {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory);
categoryRouter.post("/", createCategory);
categoryRouter.patch("/:foodCategoryId", updateCategory);
categoryRouter.delete("/:foodCategoryId", deleteCategory);

export default categoryRouter;
