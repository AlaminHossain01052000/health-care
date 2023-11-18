import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call, authentication, etc.)
    console.log('Form submitted:', formData);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      // const user = userCredential.user;
      localStorage.setItem('authToken', userCredential.user.uid);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
    // Reset the form after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <label className="login-label">
          Email:
          <input className="login-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="login-label">
          Password:
          <input className="login-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit" className='login-button'>Submit</button>
      </form>
      <h4 className='mt-4'>Do not have an account? <Link to="/signup">Sign up</Link> Now</h4>
      
    </div>
  );
};

export default Login;
