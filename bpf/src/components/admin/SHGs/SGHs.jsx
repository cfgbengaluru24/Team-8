import React, { useEffect, useState } from 'react';
import './SHGs.css';
import MapComponent from '../shgDetails/MapComponent';

const locations = ['Select Location','Mumbai', 'Bangalore', 'Pune', 'Hyderabad', 'Chennai', 'Dehradun'];
const languages = ['Select language','English', 'Hindi', 'Bengali', 'Kannada', 'Malyalam', 'Telugu', 'Urdu'];

const SHGs = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [locationCoordinates, setLocationCoordinates] = useState({});

  // Example data with location names
  const members = [
    {
      memberId: 'M123',
      memberName: 'Alice Johnson',
      businessType: 'Tailoring',
      income: '20000',
      numberOfChildren: '2',
      languages: 'English, Spanish',
      location: 'Bengaluru'
    },
    {
      memberId: 'M456',
      memberName: 'Bob Smith',
      businessType: 'Farming',
      income: '30000',
      numberOfChildren: '3',
      languages: 'English',
      location: 'Mysuru'
    },
    {
      memberId: 'M789',
      memberName: 'Charlie Brown',
      businessType: 'Retail',
      income: '15000',
      numberOfChildren: '1',
      languages: 'English',
      location: 'mangalore'
    }
    // Add more members with location names as needed
  ];

  useEffect(() => {
    setFilteredMembers(members);
    fetchCoordinatesForLocations(members);
  }, []);

  const fetchCoordinatesForLocations = async (members) => {
    const uniqueLocations = [...new Set(members.map(member => member.location))];
    const coordinates = {};

    for (const location of uniqueLocations) {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
          params: {
            q: location,
            format: 'json',
            limit: 1
          }
        });
        const result = response.data[0];
        if (result) {
          coordinates[location] = [parseFloat(result.lat), parseFloat(result.lon)];
        }
      } catch (error) {
        console.error(`Error fetching coordinates for location: ${location}`, error);
      }
    }

    setLocationCoordinates(coordinates);
  };

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
      <MapComponent
          locations={filteredMembers.map(member => member.location)}
          locationCoordinates={locationCoordinates}
        />
    </div>
  );
};

export default SHGs;
