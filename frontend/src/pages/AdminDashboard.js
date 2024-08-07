// src/pages/AdminDashboard.js

import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SideNavbar from './SideNavbar'; // Import the SideNavbar component
import '../css/admin-dashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'User Enrollments',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Course Completions',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['AI', 'ML', 'Data Science', 'Web Development', 'Cloud Computing'],
    datasets: [
      {
        data: [300, 50, 100, 40, 120],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const handleLogout = () => {
    // You can also clear user session or token here if needed
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="admin-dashboard">
      <SideNavbar /> {/* Render the side navbar */}
      <div className="dashboard-contentmain">
        <header className="dashboard-header">
          <div className="website-name">BYTELEARN</div>
          <div className="header-buttons">
          
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </header>
        <h2>Admin Dashboard</h2>
        <div className="card-container">
          <div className="card primary-card">
            <h3>Users</h3>
            <p>View Details</p>
          </div>
          <div className="card warning-card">
            <h3>Courses</h3>
            <p>View Details</p>
          </div>
          <div className="card success-card">
            <h3>Progress</h3>
            <p>View Details</p>
          </div>
          <div className="card danger-card">
            <h3>Analytics</h3>
            <p>View Details</p>
          </div>
        </div>
        <div className="charts-container">
          <div className="chart">
            <h3>User Enrollments</h3>
            <Line data={lineChartData} />
          </div>
          <div className="chart">
            <h3>Course Completions</h3>
            <Bar data={barChartData} />
          </div>
        </div>
        <div className="chart">
          <h3>Course Distribution</h3>
          <Pie data={pieChartData} />
        </div>
        <div className="datatable-container">
          <h3>Current Enrollments</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Course</th>
                <th>Enrolled on</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Airi Satou</td>
                <td>Software Development</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>Cloud Computing</td>
                <td>23/06/2024</td>
              </tr>
              <tr>
                <td>Angelica Ramos</td>
                <td>Cloud Architect</td>
                <td>London</td>
                <td>47</td>
                <td>Software Architect</td>
                <td>24/06/2024</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>Artificial Intelligence</td>
                <td>24/06/2024</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
