import React, { useState } from 'react';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' });

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement your logout logic here
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title={user.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
