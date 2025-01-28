import express from 'express';
import Expense from '../models/expense.js';

const router = express.Router();

// Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: "Error fetching expenses" });
  }
});

// Add a new expense
router.post("/", async (req, res) => {
  const { description, amount, category, paymentMethod } = req.body;
  const newExpense = new Expense({ description, amount, category, paymentMethod });

  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).json({ error: "Error adding expense" });
  }
});

export default router;
