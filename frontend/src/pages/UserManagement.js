import React, { useState } from 'react';
import "../css/user-management.css";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', password: 'password123', address: '123 Elm Street', loginTime: '2024-07-27 08:30:00', role: 'student' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', password: 'password456', address: '456 Oak Avenue', loginTime: '2024-07-27 09:00:00', role: 'teacher' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'password789', address: '789 Pine Road', loginTime: '2024-07-27 09:30:00', role: 'student' },
  ]);

  const [filter, setFilter] = useState('all');
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    loginTime: '',
    role: 'student'
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addUser = () => {
    const updatedUsers = [...users, { ...newUser, id: users.length + 1 }];
    setUsers(updatedUsers);
    setNewUser({
      name: '',
      email: '',
      password: '',
      address: '',
      loginTime: '',
      role: 'student'
    });
    setIsFormVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const filteredUsers = filter === 'all' ? users : users.filter(user => user.role === filter);

  return (
    <div className="user-management">
      <div className="dashboard-header">
        <h1>User Management Dashboard</h1>
        <div className="header-actions">
          <button className="add-user-btn" onClick={() => setIsFormVisible(!isFormVisible)}>Add New User</button>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="all">All</option>
            <option value="student">Students</option>
            <option value="teacher">Teachers</option>
          </select>
        </div>
      </div>
      {isFormVisible && (
        <div className="add-user-form">
          <h2>Add New User</h2>
          <label>Name:</label>
          <input type="text" name="name" value={newUser.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={newUser.email} onChange={handleChange} />
          <label>Password:</label>
          <input type="password" name="password" value={newUser.password} onChange={handleChange} />
          <label>Address:</label>
          <input type="text" name="address" value={newUser.address} onChange={handleChange} />
          <label>Role:</label>
          <select name="role" value={newUser.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
          <button onClick={addUser}>Save</button>
        </div>
      )}
      <div className="dashboard-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>Login Time</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.address}</td>
                <td>{user.loginTime}</td>
                <td>{user.role}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
