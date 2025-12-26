import { Router } from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactioncontroller";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// Create income / expense
router.post("/", authMiddleware, createTransaction);

// Get all transactions (optionally filter by month later)
router.get("/", authMiddleware, getTransactions);

export default router;
