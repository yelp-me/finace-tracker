import React from 'react';
import TextField from '@mui/material/TextField';

export default function OutlinedTextField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      variant="outlined" // Ensures the text field is outlined
      fullWidth // Optional: makes the text field take full width of its container
    />
  );
}
