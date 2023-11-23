import React, { useEffect, useState } from 'react';
import './OurServices.css'
import OurService from './OurService';
const OurServices = () => {
    const [healthcareData, setHealthcareData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/services');
        const data = await response.json();

        setHealthcareData(data); // Assuming your data structure has a property named 'healthcareServices'
      } catch (error) {
        console.error('Error fetching healthcare data:', error);
      }
    };

    fetchData();
  }, []);
    return (
        <div className='container'>
            <div>
              <h1 className='services-heading'>Our Services</h1>
            </div>
          
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    healthcareData.map(eachHealthcareData=>
                        <OurService eachHealthcareData={eachHealthcareData}/>
                    )
                }    
                </div>
        
        </div>
                  
              
    );
};

export default OurServices;