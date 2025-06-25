import express, { response } from "express";
import foodsRouter from "./routes/food.routes.js";
import categoryRouter from "./routes/category.routes.js";
import orderRouter from "./routes/order.routes.js";
import mongoose from "mongoose";
import { request } from "http";
import userRouter from "./routes/user.routes.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string);

const server = express();
server.use(express.json());

const port = process.env.PORT;

server.use("/food", foodsRouter);
server.use("/user", userRouter);
server.use("/food-category", categoryRouter);
server.use("/food-order", orderRouter);

server.listen(port, () => {
  console.log("Server aslaa");
});
