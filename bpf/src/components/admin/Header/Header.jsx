import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login, register, logout } from '../../../action/userActions.jsx';
import { useAlert } from "react-alert";
import {useNavigate} from "react-router-dom"

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const userName = "User";

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const alert = useAlert()

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    // Add your logout logic here
    dispatch(logout())
    alert.success("Logout Successfully");
    navigate("/")
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
