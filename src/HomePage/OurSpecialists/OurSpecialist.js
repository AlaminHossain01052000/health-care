import React from 'react';
import {  useNavigate } from 'react-router-dom';

const OurSpecialist = ({eachSpecialist}) => {
    const {_id,name,specialistSection,image,educationalQualification}=eachSpecialist;
    // console.log(eachSpecialist)
  const navigate=useNavigate();
    return (
        <div class="col">
    <div class="card" onClick={()=>navigate(`/specialists/${_id}`)}>
      <div className='specialist-image-container'>
        <div className='specialist-frame'>
          <img src={image} class="specialist-img" alt="..."/>
        </div>
      
      </div>
      
      <div class="card-body mb-3">
        <h4 class="card-title">{name}</h4>
        <h5 class="card-text">{specialistSection}</h5>
        <h6 class="card-text">{educationalQualification}</h6>
      </div>
    </div>
  </div>
    );
};

export default OurSpecialist;