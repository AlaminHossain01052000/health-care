import React, { useState } from 'react';
import  {auth} from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css'
import { Link } from 'react-router-dom';

const Signup = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
      // console.log(userCredential);
      if(userCredential?.user?.uid){
        const user = userCredential.user;
        try {
          const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          localStorage.setItem('authToken',user.uid);
          console.log('Data created successfully:', data);
        } catch (error) {
          console.error('Error creating data:', error.message);
        }
      }
      
      // console.log('User created successfully:', user);
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

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
        <button type="submit" className='signup-button'>Sign Up</button>
      </form>
      <h4 className='mt-4'>Already have an account? <Link to="/login">Login</Link> Now</h4>
    </div>
  );
};

export default Signup;
