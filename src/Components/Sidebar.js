import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import MenuIcon from '@mui/icons-material/Menu';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CategoryIcon from '@mui/icons-material/Category';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Menu icon to toggle sidebar */}
      <IconButton onClick={toggleSidebar} sx={{ position: 'absolute', top: 10, left: 10 }}>
        <MenuIcon style={{ color: '#000' }} />
      </IconButton>

      {/* Drawer component that shows or hides based on isOpen */}
      <Drawer
        variant="persistent"
        open={isOpen}
        sx={{
          '& .MuiDrawer-paper': {
            width: isOpen ? '250px' : '80px',  // Sidebar full width when open, 80px when closed
            transition: 'width 0.3s ease-in-out',
            overflow: 'hidden',
            backgroundColor: '#263238',
            color: '#fff'
          }
        }}
      >
        <div className="sidebar">
          {/* Sidebar header, only visible when sidebar is open */}
          <h2 style={{ padding: '16px', color: '#fff', display: isOpen ? 'block' : 'none' }}>
          Parchoon ki Dukaan
          </h2>

          <List>
            {/* Dashboard Link */}
            <ListItem button component={Link} to="/" onClick={toggleSidebar}>
              <ListItemIcon>
                <DashboardIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Dashboard" />} 
            </ListItem>

            {/* Inventory Link */}
            <ListItem button component={Link} to="/Inventory" onClick={toggleSidebar}>
              <ListItemIcon>
                <StoreIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Inventory" />} 
            </ListItem>

            {/* Add Inventory Link */}
            <ListItem button component={Link} to="/AddInventory" onClick={toggleSidebar}>
              <ListItemIcon>
                <AddBusinessIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Add Inventory" />} 
            </ListItem>

            {/* Category Link */}
            <ListItem button component={Link} to="/Category" onClick={toggleSidebar}>
              <ListItemIcon>
                <CategoryIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Category" />} 
            </ListItem>

            {/* Billing Link */}
            <ListItem button component={Link} to="/Billing" onClick={toggleSidebar}>
              <ListItemIcon>
                <ReceiptIcon style={{ color: '#fff' }} />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Billing" />} 
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
