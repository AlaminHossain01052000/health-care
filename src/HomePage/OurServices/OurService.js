import React from 'react';
import { useNavigate } from 'react-router-dom';

const OurService = ({eachHealthcareData}) => {
    const {_id,details,image}=eachHealthcareData;
    // console.log(details)
    const navigate=useNavigate();
  const navageToServiceDetails=()=>{
    navigate(`/services/${_id}`)
  }
    return (
        <div class="col" >
    <div class="card" style={{'height':'40rem'}} onClick={navageToServiceDetails}>
      <img src={image} class="card-img-top" style={{'height':'20rem','padding':'20px','borderRadius':"100px"}}  alt="..."/>
      <div class="card-body mt-4">
        <h4 class="card-title">{details.title}</h4>
        <h6 class="card-tex mt-3" style={{"textAlign":'justify','lineHeight':'1.5'}}>{details.description}</h6>
      </div>
    </div>
  </div>
    );
};

export default OurService;