import express from "express";
import dotenv from "dotenv";
import "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AdminRouter } from "./Routess/auth.js";
const app = express();
app.use(
  cors({
    origin: ["http://localhost:5176"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use("/auth", AdminRouter);
app.listen(process.env.PORT, () => {
  console.log("Server connected");
});
