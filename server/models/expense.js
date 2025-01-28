import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const expenseSchema = new Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default model('Expense', expenseSchema);
