import express from "express";
import {
  refresh,
  signIn,
  signUp,
  resetPasswordRequest,
  verifyResetPasswordRequest,
  resetPassword,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/refresh", refresh);
userRouter.post("/sign-in", signIn);
userRouter.post("/sign-up", signUp);
userRouter.post("/reset-password-request", resetPasswordRequest);
userRouter.get("/verify-reset-password-request", verifyResetPasswordRequest);
userRouter.post("/reset-password", resetPassword);

export default userRouter;
