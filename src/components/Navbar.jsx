import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetY = window.scrollY;
      if (offsetY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

   <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
   <button 
        className="navbar-menu" 
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        {isMenuOpen && (
          <button 
            className="navbar-close" 
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        )}
        <div className="navbar-logo">
            <Link to="/SUKH-SAGAR/"><img src="images/resturant.png" alt="Logo" /></Link>
        </div>
        <Link to="/SUKH-SAGAR/about">About</Link>
        
        <div className="dropdown">
          <button className="room_suites" onClick={() => setShowDropdown(!showDropdown)}>
            Room & Suites
          </button>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/SUKH-SAGAR/room">Room</Link>
              <Link to="/SUKH-SAGAR/roomdetails">Room Details</Link>
            </div>
          )}
        </div>

        <Link to="/SUKH-SAGAR/resturant">Resturant</Link>
        <Link to="/SUKH-SAGAR/spa">SPA Wellness</Link>
        <Link to="/SUKH-SAGAR/blog">Blog</Link>
      </div>
      <Link to="/SUKH-SAGAR/contact" className="cta-button-link">
          <button className="cta-button">Enquire Now</button>
        </Link>
    </nav>
  );
}

export default Navbar;
