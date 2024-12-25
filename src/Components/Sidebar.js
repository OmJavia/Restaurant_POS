import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../Assests/Images/grocery-store.jpg';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showOrdersDropdown, setShowOrdersDropdown] = useState(false); 

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleOrdersDropdown = () => {
    setShowOrdersDropdown(!showOrdersDropdown);  
  };

  return (
    <>
    
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Logo" className={`logo ${isCollapsed ? 'collapsed-logo' : ''}`} />
        {!isCollapsed && <h1 className="logo-text">Foody</h1>}
      </div>

      <button
        className={`toggle-btn ${isCollapsed ? 'collapsed-btn' : ''}`}
        type="button"
        onClick={toggleSidebar}>
          
        <div className={`hamburger-icon ${isCollapsed ? 'rotate' : ''}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </button>

      <ul>
        <li className="admin-panel-title">{!isCollapsed && 'Admin Panel'}</li>
        <li><Link to="/Dashboard"><i className="fas fa-tachometer-alt"></i> {!isCollapsed && 'Dashboard'}</Link></li>
        <li><Link to="/Inventory"><i className="fas fa-box"></i> {!isCollapsed && 'Inventory'}</Link></li>
        <li><Link to="/AddInventory"><i className="fas fa-users"></i> {!isCollapsed && 'Add Inventory'}</Link></li>
        <li><Link to="/Category"><i className="fas fa-store"></i> {!isCollapsed && 'Category'}</Link></li>
        <li><Link to="/Calculator"><i className="fas fa-utensils"></i> {!isCollapsed && 'Calculator'}</Link></li>
        <li><Link to="/Billing"><i className="fas fa-wallet"></i> {!isCollapsed && 'Billing'}</Link></li>
        <li><Link to="/settings"><i className="fas fa-cogs"></i> {!isCollapsed && 'Settings'}</Link></li>
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
