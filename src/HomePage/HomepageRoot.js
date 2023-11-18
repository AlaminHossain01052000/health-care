import React from 'react';
import Slider from './Navbar/Slider';
import OurServices from './OurServices/OurServices';
import OurSpecialists from './OurSpecialists/OurSpecialists';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';

const HomepageRoot = () => {
    return (
        <div>
            
            <Slider/>
            <OurServices/>
            <OurSpecialists/>
            
            <ContactUs/>
            <ScrollToTopButton/>
            <Footer/>
           
        </div>
    );
};

export default HomepageRoot;