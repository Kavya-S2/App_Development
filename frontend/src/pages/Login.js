import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css/login.css";

const ADMIN_CREDENTIALS = {
  email: 'admin@gmail.com',
  password: 'admin'
};

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loginType, setLoginType] = useState('user'); // 'user' or 'admin'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.password) formErrors.password = 'Password is required';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      if (loginType === 'admin') {
        if (
          formData.email === ADMIN_CREDENTIALS.email &&
          formData.password === ADMIN_CREDENTIALS.password
        ) {
          alert('Admin login successful!');
          navigate('/admin/dashboard'); // Redirect to admin dashboard
        } else {
          alert('Invalid email or password for admin');
        }
      } else {
        // Handle user login (assuming you have user login logic elsewhere)
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (
          storedUser &&
          storedUser.email === formData.email &&
          storedUser.password === formData.password
        ) {
          alert('User login successful!');
          navigate('/home'); // Redirect to user home page
        } else {
          alert('Invalid email or password for user');
        }
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="animated-background">
      <div className="center-container">
        <div className="left-container">
          <div className="content">
            <h1>Welcome Back to ByteLearn</h1>
            <p>Continue your learning journey with us. Log in to access your courses, track your progress, and explore new opportunities.</p>
            <img src="assets/img/login-1.jpg" alt="E-learning illustration" />
          </div>
        </div>
        <div className="form-container">
          <h2>{loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? 
            <Link to="/">Register</Link>
          </p>
          <div className="toggle-buttons">
          
          </div>
          <p className="admin-login-link">
            If you are an admin, <span onClick={() => setLoginType('admin')} style={{ cursor: 'pointer', color: '#2e2d4c', textDecoration: 'underline' }}>log in here</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
