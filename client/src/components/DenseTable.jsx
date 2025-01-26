import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DenseTable = ({ expenses }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Description</TableCell>
          <TableCell align="right">Amount</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Payment Method</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense._id}>
            <TableCell>{expense.description}</TableCell>
            <TableCell align="right">{expense.amount}</TableCell>
            <TableCell align="right">{expense.category}</TableCell>
            <TableCell align="right">{expense.paymentMethod}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default DenseTable;
