import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
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
         
            <header>
                <h1 className='services-heading'>Our Services</h1>
            </header> 
          
                <div>
                {
                    healthcareData.map(eachHealthcareData=>
                        <Service eachHealthcareData={eachHealthcareData}/>
                    )
                }    
                </div>
        
        </div>
                  
              
    );
};

export default Services;