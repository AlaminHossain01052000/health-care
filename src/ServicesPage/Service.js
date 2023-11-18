import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({eachHealthcareData}) => {
  const {_id,details,image}=eachHealthcareData;
    // console.log(details)
    const navigate=useNavigate();
  const navageToServiceDetails=()=>{
    navigate(`/services/${_id}`)
  }
    // console.log(details)

    return (
        <div>
    <div class="card my-5" onClick={navageToServiceDetails}>
      <img src={image} class="card-img-top mx-auto my-4" style={{"height":"350px","width":"350px","borderRadius":"25px"}}  alt="..."/>
      <div class="card-body mt-4">
        <h1 class="card-title text-center">{details.title}</h1>
        <h4 class="card-tex mt-3" style={{"textAlign":'justify','lineHeight':'1.5'}}>{details.description}</h4>
      </div>
      </div>
  </div>
    );
};

export default Service;