import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/admin-header.css"; // Import CSS for styling

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data
    localStorage.removeItem('admin');
    // Redirect to login page
    navigate('/login');
  };

  return (
    <header className="admin-header">
      <div className="header-content">
        <div className="website-name">ByteLearn</div>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default AdminHeader;
