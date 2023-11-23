// UserForm.js

import React, { useState } from 'react';
import './UserForm.css';
import useAuth from '../../hooks/useAuth';

const UserForm = ({specialist,date,slot}) => {
 const {user}=useAuth();
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    height: '',
    weight: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    const uid=user.uid
    const appointment={
      user:{
        _id:user._id,
        uid:uid,
        email:user.email,
        ...formData
      },
      specialist:{
        _id:specialist._id,
        id:specialist.id,
        name:specialist.name,
        contactNumber:specialist.contactNumber,
        image:specialist.image,
        educationalQualification:specialist.educationalQualification,
        specialistSection:specialist.specialistSection,
        healthcareBuildingNo: specialist.healthcareBuildingNo,
        roomNo: specialist.roomNo,
        linkedHealthcareServiceId:specialist.linkedHealthcareServiceId
      },
      appointmentDate:date,
      slot,
      date:new Date()
    }
  
    if(appointment?.user?.uid){
      
      try {
        const response = await fetch('http://localhost:5000/appointments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(appointment),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        // const data = await response.json();
        
        alert("Appointment is booked successfully");
      } catch (error) {
        console.error('Error creating data:', error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='userform-form'>
      <label className="userform-label">
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>

      <label className="userform-label">
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          required
          className="userform-input"
        />
      </label>

      <label className="userform-label">
        Height (optional):
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
          className="userform-input"
        />
      </label>

      <label className="userform-label">
        Weight (optional):
        <input
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          className="userform-input"
        />
      </label>

      <label className="userform-label userform-textarea">
        Comments:
        <textarea
          name="comments"
          rows="4"
          value={formData.comments}
          onChange={handleChange}
          className="userform-textarea"
        />
      </label>

      <button className='userform-button' type="submit" data-bs-dismiss="modal" aria-label="Close">Submit</button>
    </form>
  );
};

export default UserForm;
