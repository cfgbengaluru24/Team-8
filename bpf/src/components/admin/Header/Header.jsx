import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const userName = "User";

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
  };

  return (
    <header className="header">
      <div className="header-left">
        Best Practices Foundation
      </div>
      <div className="header-right">
        <div className="profile" onClick={handleProfileClick}>
          <FaUserCircle size={24} />
          <span className="profile-name">{userName}</span>
          {showDropdown && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
