import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../Utils/isLoggedIn';
import { auth } from '../../firebase/firebase';
import { signOut } from 'firebase/auth';
// Import the Firebase Authentication module


// Assuming you have already initialized Firebase with your configuration

// Get the authentication instance

const Navbar = () => {
  const uid=isLoggedIn();
  const handleLogout=async ()=>{
    try {
      // Sign out the user
      await signOut(auth);
      console.log("User signed out");
      localStorage.removeItem('authToken');

      // Redirect to a different page or perform other actions as needed
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container">
    {/* <a class="navbar-brand" href="/">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/" class="nav-link active">Home</Link>
          {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li class="nav-item">
        <Link to="/services" class="nav-link">Services</Link>
        </li>
        <li class="nav-item">
        <Link to="/specialists" class="nav-link">Specialists</Link>
        </li>
        <li class="nav-item">
          {
            uid?<button className="btn btn-primary" onClick={handleLogout}>Logout</button>:<Link to="/login" class="nav-link">Login</Link>
          }
        
        </li>
        <li class="nav-item">
        <Link to="/myAppointments" class="nav-link">My Appointments</Link>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;