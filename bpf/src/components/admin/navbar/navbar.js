import React, { useState } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially closed

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="toggle-button" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`vertical-navbar ${isOpen ? 'open' : 'closed'}`}>
        <a href="#dashboard" className="nav-link">Dashboard</a>
        <a href='#trainer-registration' className='nav-link'>Trainer registration</a>
        <a href="#trainer-details" className="nav-link">Trainer details</a>
        <a href="#shgs" className="nav-link">SHGs</a>
      </div>
    </div>
  );
};

export default VerticalNavbar;
