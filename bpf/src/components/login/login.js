import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Ensure this file has your custom styles

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    // Handle login logic here (e.g., call an API)

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-center text-primary mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-3 col-form-label">Email Address</label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
