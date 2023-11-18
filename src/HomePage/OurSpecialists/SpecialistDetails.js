import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import DoctorCalendar from './DoctorCalendar';

const SpecialistDetails = () => {
    const [specialist,setSpecialist]=useState({});
    
    const [appointmentAvailableDay,setAppointmentAvailableDay]=useState([]);
    const [appointmentSlots,setAppointmentSlots]=useState([]);
    const params=useParams();
    useEffect(() => {
      if(!specialist?._id){
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/specialists/${params.id}`);
            const data = await response.json();
    
            setSpecialist(data);
            
            setAppointmentAvailableDay(data.appointmentAvailableDay) // Assuming your data structure has a property named 'healthcareServices'
            setAppointmentSlots(data.appointmentSlots) // Assuming your data structure has a property named 'healthcareServices'
          } catch (error) {
            console.error('Error fetching healthcare data:', error);
          }
        };
    
        fetchData();
      }
     
        
      }, [params,specialist]);
    // console.log(param)
    const {image,name,linkedinProfile,whatsapp,educationalQualification,specialistSection,healthcareBuildingNo,roomNo}=specialist||{};
      console.log(image,name,linkedinProfile,whatsapp,educationalQualification,specialistSection,healthcareBuildingNo,roomNo)
    return (
        <div className='container'>
           <div class="card">
  <img src={image} class="card-img-top mx-auto p-5" style={{"width":"50%","height":"50%"}} alt="..."/>
  <div class="card-body">
    <h1 class="card-text">{name}</h1>
    <h2 class="card-text">{specialistSection}</h2>
    <h3 class="card-text">{educationalQualification}</h3>
    <h2 className='card-text mt-5'>Contact Details</h2>
    
    <div className="social-links mb-4">
              
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/demo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/demo" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-whatsapp"></i>
                  Whatsapp ({specialist.whatsapp})
                </a>
              </div>
            </div>
    <h2 className='card-text mt-5'>Appointment Details</h2>
    <h4 class="card-text">Bulding No : {healthcareBuildingNo}</h4>
    <h4 class="card-text">Room No: {roomNo}</h4>
    <div className='d-flex mb-3'>
    <h4 class="card-text">Available in : </h4>
    {
    ['Temp', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'].map((day,index)=>
      
        
        appointmentAvailableDay.includes(index)&&<h5 className='card-text ms-2'>{day},</h5>
      
    )
    
    }
    </div>
    <div className='d-flex'>
    <h4 class="card-text">Appointment Slots : </h4>
    <div className='d-flex flex-column mb-3'>
    {
    appointmentSlots.map((obj,index)=>
      
        <button className="btn btn-primary mb-3 ms-2"> {obj.time} </button>
        
      
    )
    
    }
    </div>
    
    </div>
    
    {/* <DoctorCalendar/> */}
    <DoctorCalendar specialist={specialist} appointmentAvailableDay={appointmentAvailableDay} appointmentSlots={appointmentSlots}/>
    {/* <p className='card-text'>Availabe in {appointmentAvailableDay?.map(dayNo=><p>{dayNo} </p>)}</p>
    <p className='card-text'>Appointment slots {appointmentSlots?.map(slot=><p>{slot?.time} </p>)}</p> */}
    {/* <Link to="/booking" className='btn btn-primary' type='button'>Book an Appointment Now</Link> */}
  </div>
</div>
        </div>
    );
};

export default SpecialistDetails;