import React, { useEffect, useState } from 'react';
import Specialist from './Specialist';


const Specialists = () => {
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
            <header>
                <h1 className='services-heading'>Our Specialists</h1>
            </header> 
          
                <div>
                {
                    specialists.map(eachSpecialist=>
                        <Specialist eachSpecialist={eachSpecialist}/>
                    )
                }    
                </div>
        
        </div>
    );
};

export default Specialists;