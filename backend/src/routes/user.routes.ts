import express from "express";
import {
  refresh,
  signIn,
  signUp,
  updateUser,
  resetPasswordRequest,
  verifyResetPasswordRequest,
  resetPassword,
} from "../controllers/user.controller.js";
import verifyToken from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.get("/refresh", refresh);
userRouter.post("/sign-in", signIn);
userRouter.post("/sign-up", signUp);
userRouter.post("/:userId", updateUser);
userRouter.post("/reset-password-request", resetPasswordRequest);
userRouter.get("/verify-reset-password-request", verifyResetPasswordRequest);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
