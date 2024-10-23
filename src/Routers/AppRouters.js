import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Inventory from '../Components/Inventory';
import AddInventory from '../Components/Add_Inventory';
import Category from '../Components/Category';
import Billing from '../Components/Billing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Inventory" element={<Inventory />} />
      <Route path="/AddInventory" element={<AddInventory />} />
      <Route path="/Category" element={<Category />} />
      <Route path="/Billing" element={<Billing />} />
    </Routes>
  );
};

export default AppRoutes;
