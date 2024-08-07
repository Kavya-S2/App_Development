import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SideNavbar.css'; // Import the CSS file for SideNavbar

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-navbar ${isOpen ? 'open' : 'closed'}`}>
      <div className="navbar-header">
        <h2 className="navbar-title"></h2>
        <button className="toggle-btn" onClick={toggleNavbar}>
          {isOpen ? '←' : '→'}
        </button>
      </div>
      <nav className="navbar-menu">
        <Link to="/admin/dashboard" className="navbar-item">
          <div className="item-icon">🏠</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>Dashboard</div>
        </Link>
        <Link to="/admin/users" className="navbar-item">
          <div className="item-icon">👤</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>User Management</div>
        </Link>
        <Link to="/admin/courses" className="navbar-item">
          <div className="item-icon">📚</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>Course Management</div>
        </Link>
        <Link to="/admin/activity" className="navbar-item">
          <div className="item-icon">📊</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>User Activity</div>
        </Link>
        <Link to="/admin/progress" className="navbar-item">
          <div className="item-icon">📈</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>User Progress</div>
        </Link>
        <Link to="/admin/reports" className="navbar-item">
          <div className="item-icon">📑</div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>Reports</div>
        </Link>
        <Link to="/admin/settings" className="navbar-item">
          <div className="item-icon"></div>
          <div className={`item-text ${!isOpen ? 'hidden' : ''}`}>Settings</div>
        </Link>
      </nav>
    </div>
  );
};

export default SideNavbar;
