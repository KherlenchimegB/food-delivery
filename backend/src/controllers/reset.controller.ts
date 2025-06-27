import { Request, Response } from "express";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const resetPasswordRequest = (request: Request, response: Response) => {
  response.send("auth/resetPassword huselt irlee");
};

export const verifyResetPasswordRequest = async (
  request: Request,
  response: Response
) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });

    const validPassword = await bcrypt.compare(password, user?.password || "");

    if (!validPassword) {
      response.status(200).json({
        success: false,
        message: "Not authenticated",
        isVerified: false,
      });
    } else {
      const token = jwt.sign({ userId: user?._id || "" }, "pinecone-test", {
        expiresIn: "24h",
      });
      response.status(200).json({
        success: true,
        message: "Authenticated",
        token: token,
        isVerified: true,
      });
    }
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }
};

export const resetPassword = async (request: Request, response: Response) => {
  try {
    const { email, password, newPassword, confirmPassword } = request.body;
    const user = await User.findOne({ email });

    const comparedPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!comparedPassword) {
      response.status(200).json({
        success: false,
        message: "not authenticated",
      });
    } else {
      if (newPassword === confirmPassword) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        const updatedUser = User.updateOne({ password: hashedNewPassword });

        response.status(200).json({
          success: true,
          message: "New password not match",
          data: updatedUser,
        });
      }
    }
  } catch (error) {
    response.status(444).json({
      success: false,
      error: error,
    });
  }

  response.send("auth/ resetPassword huselt irlee");
};
