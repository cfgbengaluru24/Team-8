import React, { useState } from 'react';
import './SHGs.css';

const locations = ['Select Location','Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Dehradun'];
const languages = ['Select language','English', 'Hindi', 'Bengali', 'Kannada', 'Malyalam', 'Telugu', 'Urdu'];

const SHGs = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="shgs">
      <div className="filters">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="filter-dropdown"
        >
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="filter-dropdown"
        >
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <table className="shg-table">
        <thead>
          <tr>
            <th>SHG Id</th>
            <th>SHG Name</th>
            <th>SHG Location</th>
            <th>Trainee Name</th>
            <th>Trainee Contact</th>
            <th>Trainee Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>SHG Alpha</td>
            <td>Mumbai</td>
            <td>John Doe</td>
            <td>123-456-7890</td>
            <td>sgh1example@gmail.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>SHG Beta</td>
            <td>Bangalore</td>
            <td>Jane Smith</td>
            <td>098-765-4321</td>
            <td>sgh2example@gmail.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default SHGs;
