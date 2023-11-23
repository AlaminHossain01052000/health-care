import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// Import the Firebase Authentication module


// Assuming you have already initialized Firebase with your configuration

// Get the authentication instance

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  // const uid=isLoggedIn();
  const handleLogout= ()=>{
    try {
      // Sign out the user
      logoutUser();

      // Redirect to a different page or perform other actions as needed
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    {/* <a className="navbar-brand" href="/">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        </li>
        <li className="nav-item">
        <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li className="nav-item">
        <Link to="/specialists" className="nav-link">Specialists</Link>
        </li>
        {
          user.email
          ?
          <li className="nav-item">
          <Link to="/" className="nav-link" onClick={handleLogout}>Logout</Link>
          </li>

          :

          <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
        }
        
        <li className="nav-item">
        <Link to="/myAppointments" className="nav-link">My Appointments</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;