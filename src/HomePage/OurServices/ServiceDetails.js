import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const [service,setService]=useState({});
    const params=useParams();
    const navigate=useNavigate();
    const navigateToDetailsOfSpecialist=async (id)=>{
      
        try {
          const response = await fetch(`http://localhost:5000/specialists/byTid/${id}`);
          const data = await response.json();
          navigate(`/specialists/${data._id}`)
          
        } catch (error) {
          console.error('Error fetching healthcare data:', error);
        }
      
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/services/${params.id}`);
            const data = await response.json();
    
            setService(data); // Assuming your data structure has a property named 'healthcareServices'
          } catch (error) {
            console.error('Error fetching healthcare data:', error);
          }
        };
    
        fetchData();
      }, [params]);
    
    return (
      <div className="card w-50 mx-auto my-5">
      <img src={service.image} className="card-img-top h-75 w-75 mx-auto my-5" alt="..."/>
      <div className="card-body">
        <h1 className="card-title text-center">{service?.details?.title}</h1>
        <h5 className="card-text my-5">{service?.details?.description}</h5>
        <div className='d-flex justify-content-around mt-5'>
        {
          service?.relatedSpecialists?.map(specialist=>
            <div>
            <div className='specialist-frame'onClick={()=>navigateToDetailsOfSpecialist(specialist.id)}>
              <img src={specialist.image} className="specialist-img" alt="..."/>
            </div>
            <p className='text-center mt-3'>{specialist.name}</p>
            </div>
          )
        }
        </div>
        
         
      </div>
    </div>
    );
};

export default ServiceDetails;