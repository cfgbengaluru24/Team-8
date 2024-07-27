import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trainerA.css';

const TrainerA = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrainers, setFilteredTrainers] = useState([]);

  const trainers = [
    {
      id: '12345',
      name: 'John Doe',
      contact: '123-456-7890',
      language: 'English',
      location: 'New York, USA',
      email: 'johndoe@example.com'
    },
    {
      id: '67890',
      name: 'Jane Smith',
      contact: '098-765-4321',
      language: 'Spanish',
      location: 'Los Angeles, USA',
      email: 'janesmith@example.com'
    }
    // Add more trainers as needed
  ];

  useEffect(() => {
    setFilteredTrainers(trainers);
  }, []);

  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredTrainers(trainers);
    } else {
      const filtered = trainers.filter(trainer =>
        Object.values(trainer).some(value =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredTrainers(filtered);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mx-auto">
        <h2 className="text-center text-primary mb-4">Trainer Details</h2>
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
              <th>ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Language</th>
              <th>Location</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainers.map(trainer => (
              <tr key={trainer.id}>
                <td>{trainer.id}</td>
                <td>{trainer.name}</td>
                <td>{trainer.contact}</td>
                <td>{trainer.language}</td>
                <td>{trainer.location}</td>
                <td>{trainer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainerA;
