import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainerDashboard.css';
import profileIcon from '../../../assets/images/profile.png';
import { Link } from 'react-router-dom';

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
        <Link to="/trainer">Home</Link>
        <Link to="/trainer/trainerprofile">Profile</Link>
        <Link to="/trainer/surveyshv">SHG Survey</Link>
        <Link to="/trainer/surveyform">Member Survey</Link>
        {/* <a href="profile-dashboard.html">Profile</a>
        <a href="shg-survey.html">SHG Survey</a>
        <a href="member-survey.html">Member Survey</a> */}
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
            <Link to="/trainer/courses" className="btn btn-primary">Courses</Link>
            <Link to="/trainer/surveyshv" className="btn btn-primary">SHG Survey</Link>
            <Link to="/trainer/surveyform" className="btn btn-primary">Member Survey</Link>
            <Link to="https://www.google.com/maps/search/banks+near+me/" target='_blank' className="btn btn-primary">Banks Near Me</Link>
            <Link to="https://forms.gle/a7M89MYhodNqqHCTA" className="btn btn-primary" target='_blank'>Certification Link</Link>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  );
};

export default TrainerDashboard;
