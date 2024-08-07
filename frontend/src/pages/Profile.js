import React, { useState } from 'react';
import '../css/Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: 'Kavya',
    lastName: 'S',
    email: 'kavya.s@gmail.com',
    profilePicture: 'https://via.placeholder.com/150', // Default profile picture URL
    currentCourses: [
      { id: 1, name: 'React for Beginners', rating: '' },
      { id: 2, name: 'Advanced JavaScript', rating: '' },
      { id: 3, name: 'Data Structures and Algorithms', rating: '' }
    ],
    interests: ['Web Development', 'Machine Learning', 'Data Science']
  });

  const [passwordDetails, setPasswordDetails] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [feedback, setFeedback] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('');

  const [announcements] = useState([
    'New course "React for Beginners" starting next week.',
    'Webinar on "AI in Web Development" on August 15th.',
    'Final project submission deadline is approaching.'
  ]);

  const [recentPayments] = useState([
    { id: 1, date: 'July 15, 2024', amount: '$100', description: 'Course purchase: React for Beginners' },
    { id: 2, date: 'June 20, 2024', amount: '$50', description: 'Course purchase: Advanced JavaScript' }
  ]);

  const [recentActivity] = useState([
    { id: 1, activity: 'Last accessed: React for Beginners - Module 3' },
    { id: 2, activity: 'Last accessed: Data Structures and Algorithms - Quiz 2' }
  ]);

  const [progress] = useState([
    { course: 'React for Beginners', completion: 75 },
    { course: 'Advanced JavaScript', completion: 50 },
    { course: 'Data Structures and Algorithms', completion: 90 }
  ]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordDetails({
      ...passwordDetails,
      [name]: value
    });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordDetails.newPassword === passwordDetails.confirmPassword) {
      // Call API to update the password
      console.log('Password changed successfully');
      setIsChangingPassword(false);
    } else {
      console.error('Passwords do not match');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload the file and get the URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserDetails({
          ...userDetails,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (courseId, rating) => {
    setUserDetails({
      ...userDetails,
      currentCourses: userDetails.currentCourses.map(course =>
        course.id === courseId ? { ...course, rating } : course
      )
    });
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    // Logic to submit feedback (e.g., API call)
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setFeedbackStatus('Feedback submitted successfully!');
    setTimeout(() => setFeedbackStatus(''), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="profile-container">
      <div className="main-content">
        <section className="profile-header">
          <div className="profile-picture-container">
            <img src={userDetails.profilePicture} alt="Profile" className="profile-picture" />
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </div>
          <div className="profile-info">
            <h1>{userDetails.firstName} {userDetails.lastName}</h1>
            <p><strong>Email:</strong> {isEditing ? <input name="email" value={userDetails.email} onChange={handleChange} /> : userDetails.email}</p>
            <button onClick={handleEditToggle}>{isEditing ? 'Save' : 'Edit'}</button>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <h3>Personal Information</h3>
          </div>
          <div className="section-content">
            <p><strong>First Name:</strong> {isEditing ? <input name="firstName" value={userDetails.firstName} onChange={handleChange} /> : userDetails.firstName}</p>
            <p><strong>Last Name:</strong> {isEditing ? <input name="lastName" value={userDetails.lastName} onChange={handleChange} /> : userDetails.lastName}</p>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <h3>Current Courses</h3>
          </div>
          <div className="section-content">
            <ul>
              {userDetails.currentCourses.map(course => (
                <li key={course.id}>
                  {course.name}
                  <div>
                    <label>
                      Rate this course:
                      <select value={course.rating} onChange={(e) => handleRatingChange(course.id, e.target.value)}>
                        <option value="">Select rating</option>
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                      </select>
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <h3>Interests</h3>
          </div>
          <div className="section-content">
            <ul>
              {userDetails.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <h3>Announcements</h3>
          </div>
          <div className="section-content">
            <ul>
              {announcements.map((announcement, index) => (
                <li key={index}>{announcement}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="profile-section">
          <div className="section-header">
            <h3>Progress Overview</h3>
          </div>
          <div className="section-content">
            <ul>
              {progress.map((item, index) => (
                <li key={index}>
                  <span>{item.course}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${item.completion}%` }}>
                      {item.completion}%
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {isChangingPassword && (
          <section className="profile-section">
            <div className="section-header">
              <h3>Change Password</h3>
              <button onClick={() => setIsChangingPassword(false)}>✖</button>
            </div>
            <div className="section-content">
              <form onSubmit={handlePasswordSubmit}>
                <label>
                  New Password:
                  <input type="password" name="newPassword" value={passwordDetails.newPassword} onChange={handlePasswordChange} required />
                </label>
                <label>
                  Confirm Password:
                  <input type="password" name="confirmPassword" value={passwordDetails.confirmPassword} onChange={handlePasswordChange} required />
                </label>
                <button type="submit">Update Password</button>
              </form>
            </div>
          </section>
        )}
      </div>

      <div className="sidebar">
        <div className="sidebar-section">
          <h3>Recent Payments</h3>
          <ul>
            {recentPayments.map(payment => (
              <li key={payment.id}>
                <strong>{payment.date}</strong>: {payment.description} - {payment.amount}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Recent Activity</h3>
          <ul>
            {recentActivity.map(activity => (
              <li key={activity.id}>{activity.activity}</li>
            ))}
          </ul>
        </div>

        <div className="sidebar-section">
          <h3>Feedback</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your feedback here"
              rows="4"
              required
            ></textarea>
            <button type="submit">Submit Feedback</button>
            {feedbackStatus && <p>{feedbackStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
