import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

const verifyToken = async (request: Request, response: Response, next: any) => {
  const token = request.header("Authorization");
  // const { email, password } = request.body;
  const user = await User.findOne(request.userId);

  console.log("user", user);

  if (!token) return response.status(401).json({ error: "Access denied" });

  if (user?.role === "Admin") {
    try {
      const decoded = jwt.verify(token, "pinecone-test");
      request.userId = decoded.userId;
      next();
    } catch (error) {
      response.status(401).json({ error: error });
    }
  } else {
    response.status(401).json({ error: "Access denied!" });
  }
};

export default verifyToken;
