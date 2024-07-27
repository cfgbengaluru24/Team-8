import React, { useEffect, useState, useRef } from 'react'
import webFont from "webfontloader"
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import Dashboard from './components/admin/Dashboard/Dashboard'
import TrainerDashboard from './components/trainer/dashboard/TrainerDashboard'
import store from "./store/store.js"
import { loadUser } from './action/trainerAction'
import TrainerR from './components/admin/trainerRegistration/TrainerR.js'
import SurveyForm from './components/trainer/surveyForm/SurveyForm.js'
import Home from './components/home/Home.js'


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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App