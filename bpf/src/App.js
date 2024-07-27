import React, { useEffect, useState, useRef } from 'react'
import webFont from "webfontloader"
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import Dashboard from './components/admin/Dashboard/Dashboard'
import TrainerDashboard from './components/trainer/dashboard/TrainerDashboard'
import store from "./store/store.js"
import { loadUser } from './action/trainerAction'
import TrainerR from './components/admin/trainerRegistration/TrainerR.js'
import TrainerA from './components/admin/trainerAcceptance/trainerA.js'
import SHGs from './components/admin/SHGs/SGHs.jsx'


const App = () => {useEffect(() => {
  store.dispatch(loadUser());
}, [])


  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route exact path="/trainer" element={<TrainerDashboard />}></Route>
          {/* <Route exact path="/trainer/profile" element={<TrainerDetailsForm />}></Route> */}
          <Route exact path="/trainer/registration" element={<TrainerR/>}></Route>
          <Route exact path="/trainer/details" element={<TrainerA/>}></Route>
          <Route exact path="/trainer/SHGs" element={<SHGs/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App