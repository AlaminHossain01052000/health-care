import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='container my-5'>
      <h1 className="services-heading">Contact us</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="contact-us-container">
            <div className="contact-info">
              <div className="location">
                <h3>Location</h3>
                <p>Demo Address, City, Country</p>
              </div>
              <div className="emergency-helpline mt-5">
                <h3>Emergency Helpline</h3>
                <p>Call: +1234567890</p>
              </div>
            </div>
            <div className="social-links mt-5">
              <h3>Connect with Us</h3>
              <div className="linkedin">
                <a href="https://www.linkedin.com/in/demo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </div>
              <div className="facebook">
                <a href="https://www.facebook.com/demo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          {/* Google Map Embed */}
          <iframe
            title="Google Map"
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE!2dYOUR_LONGITUDE!3dYOUR_ZOOM!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE%3AYOUR_LONGITUDE!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4vYOUR_API_KEY"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
