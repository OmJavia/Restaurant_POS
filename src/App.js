import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import AppRoutes from './Routers/AppRouters';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="app">
        {/* Sidebar with toggle functionality */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        {/* Main content area with conditional styling based on sidebar state */}
        <div className={`content ${isSidebarOpen ? 'content-open' : 'content-closed'}`}>
          {/* App routes are rendered here */}
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
