import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Specialist.css'
const Specialist = ({eachSpecialist}) => {
  const {_id,name,specialistSection,image,educationalQualification}=eachSpecialist;
  
const navigate=useNavigate();
    

    return (
      <div className='my-5'>
      <div className="card w-50 mx-auto" onClick={()=>navigate(`/specialists/${_id}`)}>
        <div className='specialist-image-container'>
          <div className='specialist-frame'>
            <img src={image} className="specialist-img" alt="..."/>
          </div>
        
        </div>
        
        <div className="card-body mb-3 mx-auto">
          <h1 className="card-title">{name}</h1>
          <h3 className="card-text">{specialistSection}</h3>
          <h5 className="card-text">{educationalQualification}</h5>
          <div className="social-links mt-5">
              
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/demo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/demo" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
                  Whatsapp
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Specialist;