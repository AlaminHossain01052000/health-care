import React, { useEffect, useState } from 'react';
import { isLoggedIn } from '../../Utils/isLoggedIn';

const Booking = () => {
    const [user,setUser]=useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    const uid=isLoggedIn();
      // Handle form field changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
          userInfo:user
        });
      };
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/users/${uid}`);
            const data = await response.json();
    
            setUser(data); // Assuming your data structure has a property named 'healthcareServices'
          } catch (error) {
            console.error('Error fetching healthcare data:', error);
          }
        };
    
        fetchData();
      }, [uid]);
      // Handle form submission
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5000/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({appointment_details:formData,user:user}),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const data = await response.json();
          console.log('Data created successfully:', data);
        } catch (error) {
          console.error('Error creating data:', error.message);
        }
      };
    return (
        <div>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    );
};

export default Booking;