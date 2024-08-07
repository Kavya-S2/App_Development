import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone number is required';
    if (!formData.password) formErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      formErrors.confirmPassword = 'Passwords do not match';

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem('user', JSON.stringify(formData));
      alert('Registration successful!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/home');  // Redirect to home page after successful registration
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="animated-background">
      <div className="center-container">
        <div className="left-container">
          <div className="content">
            <h1>Welcome to ByteLearn</h1>
            <p>Join our community and start your learning journey with us. Explore courses, track your progress, and achieve your goals with ByteLearn.</p>
            <img src="assets/img/login-1.jpg" alt="E-learning illustration" />
          </div>
        </div>
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span>{errors.name}</span>}
            </div>
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
              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
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
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? 
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
