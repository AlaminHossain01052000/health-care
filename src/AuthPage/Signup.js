import React, { useState } from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Signup = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repassword:''
  });
  const navigate=useNavigate();
  const { registerNewUser } = useAuth();
  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit =  (e) => {
    e.preventDefault();
    if(formData.password!==formData.repassword){
      alert("Password didn't matched.Try again")
    }
    else{
      registerNewUser(formData.firstName+' '+formData.lastName, formData.email, formData.password,navigate);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    }
    

    }
      
      
    
    // Reset the form after submission
    


  return (
    <div className='signup-container'>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit} className='signup-form'>
        <label className='signup-label'>
          First Name:
          <input className="signup-input"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className='signup-label'>
          Last Name:
          <input className="signup-input"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className='signup-label'>
          Email:
          <input className="signup-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className='signup-label'>
          Password:
          <input className="signup-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className='signup-label'>
          Confirm Password:
          <input className="signup-input"
            type="password"
            name="repassword"
            value={formData.repassword}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit" className='signup-button'>Sign Up</button>
      </form>
      <h4 className='mt-4'>Already have an account? <Link to="/login">Login</Link> Now</h4>
    </div>
  );
};

export default Signup;
