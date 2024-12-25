import React from 'react';
import './Dashboardcard.css';

const DashboardCard = ({ icon, title, subtitle, color }) => {
  return (
    <div className="dashboard-card">
      <div className="icon-container" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  );
};

export default DashboardCard;
