import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Dashboard from "../Components/Dashboard";
import Inventory from "../Components/Inventory";
import AddInventory from "../Components/AddInventory";
import Category from "../Components/Category";
import Billing from "../Components/Billing";
import Sidebar from "../Components/Sidebar";
import Login from "../Pages/Loginpage";
import Calculator from "../Components/Calculator";

const AppRoutes = () => {
 return (
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar/>} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/AddInventory" element={<AddInventory />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/Billing" element={<Billing />} />
          </Routes>
          </Router>

  );
};

export default AppRoutes;
