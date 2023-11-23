import React from 'react';

const MyAppointment = ({appointment}) => {
    
    const deleteAppointment=()=>{
       if(appointment?._id){
        fetch(`http://localhost:5000/appointments/${appointment._id}`, {
                method: "Delete"
            })
                .then(res => res.json())
                .then(data => {

                    if (data?.deletedCount) {
                        alert("Data Deleted Succussfully");

                    }
                })
       }
            
        
    }
    return (
        <div>
            {appointment._id}
            <button onClick={deleteAppointment}>delete</button>
        </div>
    );
};

export default MyAppointment;