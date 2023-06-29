import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";

config({ path: "./config/config.env" });

export const apps = express();

apps.use("/api", paymentRoute)
apps.use(cors());