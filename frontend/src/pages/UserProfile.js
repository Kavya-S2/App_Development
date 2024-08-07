import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    bio: '',
    interests: [],
    participation: [],
    recentActivity: []
  });

  useEffect(() => {
    // Fetch user data from backend
    axios.get('/api/user/profile')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, []);

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="personal-details">
        <h3>Personal Details</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
      <div className="interests">
        <h3>Interests</h3>
        <ul>
          {user.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="participation">
        <h3>Participation</h3>
        <ul>
          {user.participation.map((participation, index) => (
            <li key={index}>{participation}</li>
          ))}
        </ul>
      </div>
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {user.recentActivity.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
