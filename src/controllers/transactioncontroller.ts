import { Request, Response } from "express";
import * as transactionService from "../services/transactionService";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const transaction = await transactionService.createTransaction(
      req.user.id,
      req.body
    );
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Failed to create transaction" });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    const transactions = await transactionService.getUserTransactions(
      req.user.id
    );
    res.json(transactions);
  } catch {
    res.status(500).json({ message: "Failed to fetch transactions" });
  }
};
