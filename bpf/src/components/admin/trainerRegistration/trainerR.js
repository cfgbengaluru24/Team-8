import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TrainerR.css';

const TrainerR = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mx-auto">
        <h2 className="text-center text-primary mb-4">Trainer Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-4 col-form-label text-sm-end">Name:</label>
            <div className="col-sm-6">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-4 col-form-label text-sm-end">Email:</label>
            <div className="col-sm-6">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-4 col-form-label text-sm-end">Password:</label>
            <div className="col-sm-6">
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Complete Registration</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export  default TrainerR;
