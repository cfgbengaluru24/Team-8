import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SHGDetails.css';
import axios from 'axios';
import MapComponent from './MapComponent';

const SHGDetails = () => {
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

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredMembers(members);
    } else {
      const filtered = members.filter(member =>
        Object.values(member).some(value =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredMembers(filtered);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mx-auto">
        <h2 className="text-center text-primary mb-4">SHG Details</h2>
        <div className="mb-3 row">
          <div className="col-md-3 mb-2">
            <h5 className="mb-0">SHG Name: Example SHG</h5>
          </div>
          <div className="col-md-3 mb-2">
            <h5 className="mb-0">SHG ID: SHG001</h5>
          </div>
          <div className="col-md-3 mb-2">
            <h5 className="mb-0">Number of People: 10</h5>
          </div>
          <div className="col-md-3 mb-2">
            <h5 className="mb-0">Savings: $5000</h5>
          </div>
        </div>
        <div className="mb-3 d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Member Name</th>
              <th>Type of Business</th>
              <th>Income</th>
              <th>Number of Children</th>
              <th>Languages</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map(member => (
              <tr key={member.memberId}>
                <td>{member.memberId}</td>
                <td>{member.memberName}</td>
                <td>{member.businessType}</td>
                <td>{member.income}</td>
                <td>{member.numberOfChildren}</td>
                <td>{member.languages}</td>
                <td>{member.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SHGDetails;
