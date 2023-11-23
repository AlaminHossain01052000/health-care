import React, { useEffect, useState } from 'react';
import OurSpecialist from './OurSpecialist';

const OurSpecialists = () => {
    const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/specialists');
        const data = await response.json();

        setSpecialists(data); // Assuming your data structure has a property named 'healthcareServices'
      } catch (error) {
        console.error('Error fetching healthcare data:', error);
      }
    };

    fetchData();
  }, []);
    return (
        <div className='container'>
            <div>
              <h1 className="services-heading">Our Specialists</h1>
      
          </div>
          
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    specialists.map(eachSpecialist=>
                        <OurSpecialist eachSpecialist={eachSpecialist}/>
                    )
                }    
                </div>
        
        </div>
    );
};

export default OurSpecialists;