import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainerDashboard.css';
import profileIcon from '../../../assets/images/profile.png';

const TrainerDashboard = () => {
  const openCourses = () => {
    window.open("https://www.example.com", "_blank");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Vertical Navbar */}
      <nav className="vertical-nav">
        <div className="profile-section">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="profile-icon"
            onError={(e) => { e.target.onerror = null; e.target.src = 'fallback_image_path'; }}
          />
          <h3>Trainer Name</h3>
        </div>
        <a href="index.html">Home</a>
        <a href="profile-dashboard.html">Profile</a>
        <a href="shg-survey.html">SHG Survey</a>
        <a href="member-survey.html">Member Survey</a>
      </nav>

      <div className="dashboard-content">
        <header className="bg-dark text-white p-3">
            <h1 className="mb-0">Trainer Dashboard</h1>
        </header>

        <div className="container mt-5">
          <div className="welcome-section">
            <h2>Welcome to the Trainer Dashboard</h2>
          </div>
          <div className="button-container">
            <button className="btn btn-primary" onClick={openCourses}>Courses</button>
            <a href="shg-survey.html" className="btn btn-primary">SHG Survey</a>
            <a href="member-survey.html" className="btn btn-primary">Member Survey</a>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center p-3">
          <div className="container">
            <p className="mb-0">&copy; 2024 Trainer Dashboard. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TrainerDashboard;
