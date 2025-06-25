import { Request, Response } from "express";
import { Category } from "../models/category.models.js";

export const getAllCategory = async (request: Request, response: Response) => {
  try {
    const category = await Category.find();
    response.json({ success: true, data: category });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const createCategory = async (request: Request, response: Response) => {
  try {
    const createdCategory = request.body;
    const category = await Category.create({
      ...createdCategory,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    response.json({ success: true, data: category });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const updateCategory = async (request: Request, response: Response) => {
  try {
    const updatedCategory = request.body;
    const { foodCategoryId } = request.params;
    const category = await Category.findByIdAndUpdate(
      foodCategoryId,
      updatedCategory,
      {
        new: true,
      }
    );

    response.json({ success: true, data: category });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const deleteCategory = async (request: Request, response: Response) => {
  try {
    const deletedCategory = request.body;
    const { foodCategoryId } = request.params;
    const category = await Category.findByIdAndDelete(
      foodCategoryId,
      deletedCategory
    );
    response.json({ success: true, data: category });
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};
