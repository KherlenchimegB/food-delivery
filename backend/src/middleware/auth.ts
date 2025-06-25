import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = async (request: Request, response: Response, next: any) => {
  const token = request.header("Authorization");

  if (!token) return response.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, "pinecone-test");
    request.userId = decoded.userId;
    next();
  } catch (error) {
    response.status(401).json({ error: error });
  }
};

export default verifyToken;
