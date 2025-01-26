import React, { useState } from 'react';
import SingleSelect from './SingleSelect';
import OutlinedTextField from './OutlinedTextField';
import BasicButton from './BasicButton';

const AddExpense = ({ onAddExpense }) => {
  const expenseTypes = ['Leisure', 'Rent', 'Groceries', 'Investments', 'Travel', 'Clothes'];
  const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'UPI'];

  const [formState, setFormState] = useState({
    description: '',
    amount: '',
    category: '',
    paymentMethod: '',
  });

  const handleInputChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (formState.description && formState.amount && formState.category && formState.paymentMethod) {
      onAddExpense({ ...formState, amount: parseFloat(formState.amount) });
      setFormState({ description: '', amount: '', category: '', paymentMethod: '' });
    }
  };

  return (
    <div>
      <OutlinedTextField label="Description" value={formState.description} onChange={(e) => handleInputChange('description', e.target.value)} />
      <SingleSelect data={expenseTypes} label="Category" value={formState.category} onChange={(value) => handleInputChange('category', value)} />
      <OutlinedTextField label="Amount" value={formState.amount} onChange={(e) => handleInputChange('amount', e.target.value)} />
      <SingleSelect data={paymentMethods} label="Payment Method" value={formState.paymentMethod} onChange={(value) => handleInputChange('paymentMethod', value)} />
      <BasicButton onClick={handleSubmit} />
    </div>
  );
};

export default AddExpense;
