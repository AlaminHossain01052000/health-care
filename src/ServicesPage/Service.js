import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({eachHealthcareData}) => {
  const {_id,details,image}=eachHealthcareData;
    
    const navigate=useNavigate();
  const navageToServiceDetails=()=>{
    navigate(`/services/${_id}`)
  }
    

    return (
        <div>
    <div className="card my-5" onClick={navageToServiceDetails}>
      <img src={image} className="card-img-top mx-auto my-4" style={{"height":"350px","width":"350px","borderRadius":"25px"}}  alt="..."/>
      <div className="card-body mt-4">
        <h1 className="card-title text-center">{details.title}</h1>
        <h4 className="card-tex mt-3" style={{"textAlign":'justify','lineHeight':'1.5'}}>{details.description}</h4>
      </div>
      </div>
  </div>
    );
};

export default Service;