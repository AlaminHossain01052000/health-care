import HomepageRoot from "./HomePage/HomepageRoot";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import ServicesRoot from "./ServicesPage/ServicesRoot";
import Navbar from "./HomePage/Navbar/Navbar";
import SpecialistsRoot from "./SpecialistsPage/SpecialistsRoot";
import SpecialistDetails from "./HomePage/OurSpecialists/SpecialistDetails";
import ServiceDetails from "./HomePage/OurServices/ServiceDetails";
import Booking from "./AppointMentsPage/BookingPage/Booking";
import MyAppointments from "./AppointMentsPage/MyAppointmentsPage/MyAppointments";
import './App.css'
import Login from "./AuthPage/Login";
import Signup from "./AuthPage/Signup";
import AuthProvider from "./Shared/AuthProvider/AuthProvider";
import UserForm from "./HomePage/OurSpecialists/UserForm";
function App() {
  
  
  return (
    <AuthProvider>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomepageRoot />} />
        <Route path="/services" element={<ServicesRoot />} />
        <Route path="/specialists" element={<SpecialistsRoot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/specialists/:id" element={<SpecialistDetails />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/myAppointments" element={<MyAppointments />} />
        <Route path="/userForm" element={<UserForm />} />
        
        
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
