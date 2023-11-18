import React, { useState, useEffect } from 'react';
import './ScrollToTop.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down more than 100 pixels
    const scrolled = document.documentElement.scrollTop;
    setIsVisible(scrolled > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use smooth scrolling behavior
    });
  };

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount/unmount

  return (
    <button
      className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
