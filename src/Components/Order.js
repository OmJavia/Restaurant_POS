import React from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Orders = () => {
  const orders = [
    { id: 1, customer: 'John Doe', total: '$150', status: 'Pending' },
    { id: 2, customer: 'Jane Smith', total: '$200', status: 'Completed' },
  ];

  return (
    <div className="orders">
      <h2>Order Management</h2>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Orders;
