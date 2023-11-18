import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// type ValuePiece = Date | null;
import './DoctorCalendar.css'
import UserForm from './UserForm';
import { isLoggedIn } from '../../Utils/isLoggedIn';
// type Value = ValuePiece | [ValuePiece, ValuePiece];

function DoctorCalendar({ specialist, appointmentAvailableDay, appointmentSlots }) {
    const [value, onChange] = useState(new Date());
    const [isSlotAvailable, setIsSlotAvailable] = useState(false);
    const [user,setUser]=useState({});
   
    const uid=isLoggedIn();
      // Handle form field changes
      
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:5000/users/${uid}`);
            const data = await response.json();
    
            setUser(data); // Assuming your data structure has a property named 'healthcareServices'
          } catch (error) {
            console.error('Error fetching healthcare data:', error);
          }
        };
    
        fetchData();
      }, [uid]);

    // console.log(value.getDay())
    const handleSelectingAppointment = () => {
        // console.log(value.getDay())
        if (appointmentAvailableDay.includes(value.getDay()) || (appointmentAvailableDay.includes(7) && value.getDay() === 0)) {
            setIsSlotAvailable(true);
        }
        else {
            setIsSlotAvailable(false)
        }
    }
    
    // console.log(isSlotAvailable)
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
                                    type="button" class="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    
                                >
                                    {slot.time}
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <UserForm user={user} specialist={specialist} date={value} slot={slot}/>
                                            </div>
                                            {/* <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div> */}
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
                  class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
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