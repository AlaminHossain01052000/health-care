import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurService = ({eachHealthcareData}) => {
    const {_id,details,image}=eachHealthcareData;
    
    const navigate=useNavigate();
  const navageToServiceDetails=()=>{
    navigate(`/services/${_id}`)
  }
    return (
        <div className="col" >
    <div className="card" style={{'height':'40rem'}} onClick={navageToServiceDetails}>
      <img src={image} className="card-img-top" style={{'height':'20rem','padding':'20px','borderRadius':"100px"}}  alt="..."/>
      <div className="card-body mt-4">
        <h4 className="card-title">{details.title}</h4>
        <h6 className="card-tex mt-3" style={{"textAlign":'justify','lineHeight':'1.5'}}>{details.description}</h6>
      </div>
    </div>
  </div>
    );
};

export default OurService;