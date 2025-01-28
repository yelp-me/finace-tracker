import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import expenseRoutes from './routes/expenses.js';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/expenses", expenseRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
