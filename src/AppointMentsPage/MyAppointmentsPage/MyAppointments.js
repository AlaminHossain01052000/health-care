import React, { useEffect, useState } from 'react';
// import MyAppointment from './MyAppointment';
import './MyAppointments.css'
import useAuth from '../../hooks/useAuth';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const {user}=useAuth();
    const uid=user.uid
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/appointments');
        const data = await response.json();

        setAppointments(data); // Assuming your data structure has a property named 'healthcareServices'
      } catch (error) {
        console.error('Error fetching healthcare data:', error);
      }
    };

    fetchData();
  }, [uid]);
  const deleteAppointment=(id)=>{
    const userDecision = window.confirm("Do you want to proceed?");
    if (userDecision) {
        // User clicked OK
        fetch(`http://localhost:5000/appointments/${id}`, {
             method: "Delete"
         })
             .then(res => res.json())
             .then(data => {

                 if (data?.deletedCount) {
                     alert("Data Deleted Succussfully");
                     window.location.reload();

                 }
             })
    } else {
        // User clicked Cancel
        
    }
     
    
         
     
 }
    return (
        <div className='table-container'>
          <table className='appointment-table'>
          <thead>
          <tr>
            <th className='appointment-th'>Doctor Name</th>
            <th className='appointment-th'>Doctor Specialization</th>
            <th className='appointment-th'>Appointment Date</th>
            <th className='appointment-th'>Appointment Time</th>
            <th className='appointment-th'>Building No</th>
            <th className='appointment-th'>Room No</th>
            <th className='appointment-th'>Cancel</th>
          </tr>
        </thead>
        <tbody>
          { appointments?.filter(appointment=>appointment.user.uid===user.uid)?.map((appointment, index) => (
            <tr key={index}>
              <td className='appointment-td'>{appointment.specialist.name}</td>
              <td className='appointment-td'>{appointment.specialist.specialistSection}</td>
              <td className='appointment-td'>{appointment.appointmentDate}</td>
              <td className='appointment-td'>{appointment.slot.time}</td>
              <td className='appointment-td'>{appointment.specialist.healthcareBuildingNo}</td>
              <td className='appointment-td'>{appointment.specialist.roomNo}</td>
              <td className='appointment-td'>
                <button className='appointment-button' onClick={()=>deleteAppointment(appointment._id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
            
        </div>
    );
};

export default MyAppointments;