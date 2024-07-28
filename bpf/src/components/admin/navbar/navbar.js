import React, { useState } from 'react';
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        
        <Link to="/admin" className='nav-link'>Dashboard</Link>
        <Link to="/trainer/registration" className='nav-link'>Trainer registration</Link>
        <Link to="/trainer/details" className='nav-link'>Trainer details</Link>
        <Link to="/trainer/SHGs" className='nav-link'>SHGs</Link>
      </div>
    </div>
  );
};

export default Navbar;
