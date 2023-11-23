import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, loading, error } = useAuth();
  
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
    loginUser(formData.email, formData.password, navigate, location)

    setFormData({
      email: '',
      password: '',
    });
  };

  return (

    loading
      ?
      <div className='d-flex justify-content-center align-items-center'>
  <div className="spinner-border text-warning mt-5" role="status">
    
    
  </div>
</div>
        
      :
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
          {error&&<h6 style={{"color":"red"}} className='mt-4'>{error}</h6>}
        </form>
        <h4 className='mt-4'>Do not have an account? <Link to="/signup">Sign up</Link> Now</h4>

      </div>


  );
};

export default Login;
