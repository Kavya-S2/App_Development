import React, { useState } from 'react';
import '../css/user-activity.css'; // Ensure this CSS file exists or adjust the path

const UserActivity = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      course: 'React Basics',
      percent: 75,
      score: 80,
      activities: [
        { date: '2024-07-25', activity: 'Completed Module 1' },
        { date: '2024-07-26', activity: 'Started Module 2' },
        { date: '2024-07-27', activity: 'Participated in Discussion Forum' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'Spring Boot Introduction',
      percent: 50,
      score: 70,
      activities: [
        { date: '2024-07-22', activity: 'Completed Module 1' },
        { date: '2024-07-23', activity: 'Started Module 2' },
      ],
    },
    {
      id: 3,
      name: 'Alice Johnson',
      course: 'Node.js Fundamentals',
      percent: 90,
      score: 95,
      activities: [
        { date: '2024-07-20', activity: 'Completed Module 1' },
        { date: '2024-07-21', activity: 'Completed Module 2' },
        { date: '2024-07-22', activity: 'Passed Quiz' },
      ],
    },
    // Add more users as needed
  ]);

  return (
    <div className="user-activity-page">
      <h2>User Activity</h2>
      <div className="user-activity-container">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-header">
              <h4>{user.name}</h4>
              <p>Course: {user.course}</p>
            </div>
            <div className="user-stats">
              <p><strong>Percent Completed:</strong> {user.percent}%</p>
              <p><strong>Score:</strong> {user.score}</p>
            </div>
            <h5>Recent Activities:</h5>
            <div className="activity-list">
              {user.activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <span className="activity-date">{activity.date}</span>
                  <span className="activity-description">{activity.activity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserActivity;
