import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser";
import transactionRoutes from "./routes/transaction";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5050", 
    credentials: true,               
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);

export default app;
