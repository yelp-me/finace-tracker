// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Adjust for production deployment

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/expenses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(`${BASE_URL}/expenses`, expense);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};
