import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const Signup = ({ closeSignUp, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let validationErrors = {};

    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      validationErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setGeneralError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/signup/', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        password2: formData.confirmPassword,
      });

      if (response.status === 201 || response.status === 200) {
        // هنا سنقوم بتخزين بيانات المستخدم في localStorage بدلاً من التوكن
        const user = {
          username: formData.username,
          email: formData.email,
        };
        localStorage.setItem('user', JSON.stringify(user));

        onLoginSuccess(formData.username); // نمرر اسم المستخدم فقط هنا
        closeSignUp(); // إغلاق نافذة التسجيل بعد النجاح
      } else {
        setGeneralError('Unexpected response from the server.');
      }
    } catch (error) {
      console.log('Error:', error.response ? error.response.data : error.message);
      setGeneralError('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-overlay">
      <div className="form-container-signup">
        <button className="close-buttons" onClick={closeSignUp}>
          &times;
        </button>
        <p className="title-signup">Create an Account</p>
        <form className="form-signup" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-signup"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <p className="error-messagesi">{errors.username}</p>}
          <input
            type="email"
            className="input-signup"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error-messagesi">{errors.email}</p>}
          <input
            type="password"
            className="input-signup"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <p className="error-messagesi">{errors.password}</p>}
          <input
            type="password"
            className="input-signup"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {errors.confirmPassword && <p className="error-messagesi">{errors.confirmPassword}</p>}
          <button className="form-btn-signup" type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        {generalError && <p className="general-error-messagesi">{generalError}</p>}
        <p className="login-label">
          Already have an account?{' '}
          <span className="login-link" onClick={closeSignUp}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
