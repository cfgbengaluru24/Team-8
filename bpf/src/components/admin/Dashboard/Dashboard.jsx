import React, { useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Header from "../Header/Header.jsx"
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../../action/trainerAction.jsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar.js';

// Registering the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  LineController,
  BarController,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const numberOfSHGs = Math.floor(Math.random() * 1000);
  const numberOfTrainers = Math.floor(Math.random() * 100);
  const successRate = (Math.random() * 100).toFixed(2);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
)

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'SHGs Created',
        backgroundColor: '#282042',
        borderColor: '#282042',
        borderWidth: 1,
        hoverBackgroundColor: '#E2CEC5',
        hoverBorderColor: '#E2CEC5',
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100))
      }
    ]
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Success Rate',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#282042',
        borderColor: '#282042',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#282042',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#E2CEC5',
        pointHoverBorderColor: '#E2CEC5',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Array.from({ length: 6 }, () => (Math.random() * 100).toFixed(2))
      }
    ]
  };

  useEffect(()=>{
    if(!isAuthenticated){
      navigate("/")
    }
  },[ dispatch, error, alert, navigate, isAuthenticated])


  return (
    <>
    <Header/>
    <Navbar/>
    <div className="dashboard">
    <div className="blocks">
      <div className="block">
        <h2>Number of SHGs</h2>
        <p>{numberOfSHGs}</p>
      </div>
      <div className="block">
        <h2>Number of Trainers</h2>
        <p>{numberOfTrainers}</p>
      </div>
      <div className="block">
        <h2>Success Rate</h2>
        <p>{successRate}%</p>
      </div>
    </div>
      <div className="graphs">
        <div className="graph">
          <Bar data={barData} />
          <p>Graph showing the number of SHGs created over the past six months.</p>
        </div>
        <div className="graph">
          <Line data={lineData} />
          <p>Graph showing the success rate(%) over the past six months.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
