import React, { useState, useEffect } from 'react';
import AddExpense from '../components/AddExpense';
import DenseTable from '../components/DenseTable';
import { getExpenses, addExpense } from '../api';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (err) {
        console.error("Error fetching expenses:", err);
      }
    };
    fetchExpenses();
  }, []);

  const handleAddExpense = async (newExpense) => {
    try {
      const savedExpense = await addExpense(newExpense);
      setExpenses((prev) => [...prev, savedExpense]);
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  return (
    <div>
      <AddExpense onAddExpense={handleAddExpense} />
      <DenseTable expenses={expenses} />
    </div>
  );
};

export default Dashboard;
