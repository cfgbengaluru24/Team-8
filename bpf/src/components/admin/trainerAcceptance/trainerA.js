import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './trainerA.css';


const TrainerA = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [trainers, setTrainers] = useState([]);
  const [filteredTrainers, setFilteredTrainers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/trainer/all',{
        method :"get"
      }).then(
        data=>data.json()
    ).then((data)=>{
      console.log(data)
      if(data) {
        setTrainers(data.user);
        setFilteredTrainers(data.user);
      }
    })
  
      // const data = await response.json();
      // if (data.success) {
      //   setTrainers(data.user);
      //   setFilteredTrainers(data.user);
      // }
    } catch (error) {
      console.error('Error fetching trainer data:', error);
    }
  };



  const handleSearch = () => {
    if (searchTerm === '') {
      setFilteredTrainers(trainers);
    } else {
      const filtered = trainers.filter(trainer =>
        Object.values(trainer).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
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
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrainers.map(trainer => (
              <tr key={trainer._id}>
                <td>{trainer._id}</td>
                <td>{trainer.name}</td>
                <td>{trainer.email}</td>
                <td>{trainer.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainerA;
