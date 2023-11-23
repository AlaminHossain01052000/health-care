import {  useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// type ValuePiece = Date | null;
import './DoctorCalendar.css'
import UserForm from './UserForm';

import useAuth from '../../hooks/useAuth';
import {  useNavigate } from 'react-router-dom';
// type Value = ValuePiece | [ValuePiece, ValuePiece];

function DoctorCalendar({ specialist, appointmentAvailableDay, appointmentSlots }) {
  const [value, onChange] = useState(new Date());
  const [isSlotAvailable, setIsSlotAvailable] = useState(false);
  const { user } = useAuth();
const navigate=useNavigate();



  
  const handleSelectingAppointment = () => {
    
    if (appointmentAvailableDay.includes(value.getDay()) || (appointmentAvailableDay.includes(7) && value.getDay() === 0)) {
      setIsSlotAvailable(true);
    }
    else {
      setIsSlotAvailable(false)
    }
  }

  
  return (
    <div>
      <Calendar className='mx-auto my-5' onChange={onChange} value={value} onClickDay={handleSelectingAppointment} />
      <div className="d-flex flex-column w-25 mx-auto">
        {
          isSlotAvailable ?
            appointmentSlots.map((slot) => (
              <>
                <button
                  key={slot.appointmentNo}
                  type="button"
                  className="btn btn-primary mb-4"
                  data-bs-toggle="modal"
                  data-bs-target={user.email ? `#exampleModal` : "#exampleModal2"}
                >


                  {slot.time}
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <UserForm specialist={specialist} date={value} slot={slot} />
                      </div>

                    </div>
                  </div>
                </div>
                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">You must logged in to book an appointment</h1>
                      </div>
                      <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>navigate('/login')}>
                        Login
                      </button>
                       
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                      </div>

                    </div>
                  </div>
                </div>

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