import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; // Ensure this file has your custom styles
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login, register } from '../../action/userActions.jsx';
import { useAlert } from "react-alert";
import {useNavigate} from "react-router-dom"
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated, user } = useSelector(
      (state) => state.user
  )

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  useEffect(() => {
    if (error) {
        alert.error(error);
        dispatch(clearErrors())
    }

    if (isAuthenticated) {
        if(user.role==="admin"){
          navigate("/admin")
        }
        if(user.role==="trainer"){
          navigate("/trainer")
        }
    }
}, [dispatch, error, alert, navigate, isAuthenticated])

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
