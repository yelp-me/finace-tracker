import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/Finance_Tracker';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

const { Schema, model } = mongoose;

// Expense Schema
const expenseSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Expense = model('Expense', expenseSchema);

// API Endpoints
app.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find().exec();
    res.json(expenses);
  } catch (err) {
    res.status(500).send("Error fetching expenses:", err);
  }
});

app.post("/expenses", async (req, res) => {
  const { description, amount, category, paymentMethod } = req.body;
  const newExpense = new Expense({ description, amount, category, paymentMethod });
  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(500).send("Error adding expense:", err);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
