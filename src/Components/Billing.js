import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Billing = () => {
  const [products, setProducts] = useState([]);

  // Function to handle product scan
  const handleScan = (product) => {
    setProducts((prevProducts) => {
      // Check if the product with the same ID already exists
      const existingProduct = prevProducts.find((p) => p.id === product.id);

      if (existingProduct) {
        // Update the quantity and total price if the product already exists
        return prevProducts.map((p) =>
          p.id === product.id
            ? {
                ...p,
                quantity: p.quantity + 1,
                total_price: (p.quantity + 1) * p.price, // Update total price
              }
            : p
        );
      } else {
        // Add the new product if it doesn't exist
        return [...prevProducts, product];
      }
    });
  };

  // Simulating product scan
  const scanProduct = () => {
    const newProduct = {
      id: Date.now(), // Example unique ID (use same ID to simulate scanning the same product)
      name: 'Product Name', // Replace with actual product name
      quantity: 1, // Initial quantity
      price: 10, // Replace with actual price
      total_price: 10, // Initially quantity * price
    };
    handleScan(newProduct);
  };

  // Function to increment quantity
  const incrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + 1,
              total_price: (product.quantity + 1) * product.price, // Recalculate total price
            }
          : product
      )
    );
  };

  // Function to decrement quantity or remove product
  const decrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts
        .map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: product.quantity - 1,
                total_price: (product.quantity - 1) * product.price, // Recalculate total price
              }
            : product
        )
        .filter((product) => product.quantity > 0) // Remove if quantity is 0
    );
  };

  return (
    <div>
      <Button onClick={scanProduct} variant="primary" className="mb-3">
        Scan Product
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.total_price}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => incrementQuantity(product.id)}
                  className="me-2"
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  onClick={() => decrementQuantity(product.id)}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Billing;
