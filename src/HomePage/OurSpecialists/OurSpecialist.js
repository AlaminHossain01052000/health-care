import React from 'react';
import {  useNavigate } from 'react-router-dom';

const OurSpecialist = ({eachSpecialist}) => {
    const {_id,name,specialistSection,image,educationalQualification}=eachSpecialist;
    
  const navigate=useNavigate();
    return (
        <div className="col">
    <div className="card" onClick={()=>navigate(`/specialists/${_id}`)}>
      <div className='specialist-image-container'>
        <div className='specialist-frame'>
          <img src={image} className="specialist-img" alt="..."/>
        </div>
      
      </div>
      
      <div className="card-body mb-3">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-text">{specialistSection}</h5>
        <h6 className="card-text">{educationalQualification}</h6>
      </div>
    </div>
  </div>
    );
};

export default OurSpecialist;