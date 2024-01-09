import {  useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// type ValuePiece = Date | null;
import './DoctorCalendar.css'

import {  useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// type Value = ValuePiece | [ValuePiece, ValuePiece];
function month_abbr_to_num(month_abbr) {
  const month_map = {
    "jan": "01",
    "feb": "02",
    "mar": "03",
    "apr": "04",
    "may": "05",
    "jun": "06",
    "jul": "07",
    "aug": "08",
    "sep": "09",
    "oct": "10",
    "nov": "11",
    "dec": "12",
  };

  month_abbr = month_abbr.toLowerCase(); // Case-insensitive comparison

  if (!month_map[month_abbr]) {
    throw new Error(`Invalid month abbreviation: ${month_abbr}`);
  }

  return month_map[month_abbr];
}
function DoctorCalendar({ specialist, appointmentAvailableDay, appointmentSlots }) {
  
  const [value, onChange] = useState(new Date());
  const [isSlotAvailable, setIsSlotAvailable] = useState(false);
  const {user}=useAuth()
  
const navigate=useNavigate();
const tileDisabled = ({ activeStartDate, date, view }) => {
  const today = new Date();

  // Disable dates before today, but include today as an enabled date
  return date < today.setHours(0, 0, 0, 0); // Set time to midnight for precise comparison
};
const [allAppointments,setAllAppointments]=useState([]);
useEffect(()=>{
  fetch("http://localhost:5000/appointments").then(res=>res.json()).then(data=>setAllAppointments(data))
},[])

  
  const handleSelectingAppointment = () => {
    
    if (appointmentAvailableDay.includes(value.getDay()) || (appointmentAvailableDay.includes(7) && value.getDay() === 0)) {
      setIsSlotAvailable(true);
    }
    else {
      setIsSlotAvailable(false)
    }
  }
 
  
const navigatingToUserFormPage=(slot)=>{
  
  if(!user.uid){
    navigate('/login')
    return
  }
  const dateString = value;

  // Extract year, month, and day parts
  const year = dateString.toString().substring(11, 15);
  const month = dateString.toString().substring(4, 7).toUpperCase();
  const day = dateString.toString().substring(8, 10);
  
  // Build the formatted date string
  const formattedDate = `${year}-${month_abbr_to_num(month)}-${day}`;
  
  const appNo=slot.appointmentNo;
    const spId=specialist._id;
    for(const i of allAppointments){
      const string1 = i.appointmentDate;
      const string2 = formattedDate;
      


      if(i.specialist._id===spId&&i.slot.appointmentNo===appNo&&string1===string2){
        
        alert("Sorry the Doctor is busy in that slot. Try another one!");
        return;
      }
    }
    
  const appointmentDetails={
    slot,
    specialist,
    value:formattedDate
  }
  navigate("/userForm", {
    state:{
        
       
       appointmentDetails
      },
  });
}
  return (
    <div>
      <Calendar className='mx-auto my-5' onChange={onChange} value={value} onClickDay={handleSelectingAppointment} tileDisabled={tileDisabled}/>
      <div className="d-flex flex-column w-25 mx-auto">
        {
          isSlotAvailable ?
            appointmentSlots.map((slot) => (
              <>
                <button
                  key={slot.appointmentNo}
                  type="button"
                  className="btn btn-primary mb-4"
                  onClick={()=>navigatingToUserFormPage(slot)}
                  
                >


                  {slot.time}
                </button>
                {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel" style={{textAlign:'center'}}>Book an Appointment Now!</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        
                          <UserForm specialist={specialist} date={value} slot={slot} />
                        
                        
                      </div>

                    </div>
                  </div>
                </div> */}

                
              </>




            ))
            :
            <div></div>
        }
        {/* <h3>Select an Available Slot:</h3>
          {appointmentSlots.map((slot) => (
            <button
                  key={slot.appointmentNo}
                  // onClick={() => handleSlotClick(slot)}
                  // className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
                  className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                  onClick={handleBookingAppointment}
                >
                  {slot.time}
                </button>
              <button
                key={slot.appointmentNo}
                // onClick={() => handleSlotClick(slot)}
                // className={`time-slot ${selectedSlot === slot ? 'selected' : ''}`}
                className={`${isSlotAvailable}?"red-color":"cyan-color"`}
              >
                {slot.time}
              </button>
            
          ))} */}
      </div>
    </div>
  );
}
export default DoctorCalendar