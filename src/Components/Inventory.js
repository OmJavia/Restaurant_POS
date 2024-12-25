// import React from 'react';
// import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
// import Sidebar from './Sidebar';
// import './Inventory.css';
// const Inventory  = () => {
//   const products = [
//     { id: 1, name: 'Product 1', price: '$50', stock: 100 },
//     { id: 2, name: 'Product 2', price: '$30', stock: 200 },
//   ];

//   return (
//     <div className="products">
//       <div className='sidebar-container'>
//           <Sidebar />
//         </div>
//       <h2>Product Management</h2>
//       <Paper elevation={3}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Product Name</TableCell>
//               <TableCell>Price</TableCell>
//               <TableCell>Stock</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {products.map((product) => (
//               <TableRow key={product.id}>
//                 <TableCell>{product.name}</TableCell>
//                 <TableCell>{product.price}</TableCell>
//                 <TableCell>{product.stock}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
//   );
// };

// export default Inventory  ;









import React, { useState } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Sidebar from './Sidebar';
import './Inventory.css';

const Inventory = () => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const products = [
    { id: 1, name: 'Product 1', price: '$50', stock: 100 },
    { id: 2, name: 'Product 2', price: '$30', stock: 200 },
  ];

  return (
    <div className={`products ${isSidebarExpanded ? 'sidebar-expanded' : ''}`}>
      <div
        className={`sidebar-container ${isSidebarExpanded ? 'expanded' : ''}`}
        onClick={toggleSidebar} // Example to toggle the sidebar
      >
        <Sidebar />
      </div>
      <h2>Product Management</h2>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Inventory;
