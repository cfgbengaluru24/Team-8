import React, { useEffect, useState, useRef } from 'react'
import webFont from "webfontloader"
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom'
import LoginForm from './components/login/LoginForm'
import Dashboard from './components/admin/Dashboard/Dashboard'
import TrainerDashboard from './components/trainer/dashboard/TrainerDashboard'
import store from "./store/store.js"
import { loadUser } from './action/trainerAction'
import TrainerR from './components/admin/trainerRegistration/TrainerR.js'
import TrainerA from './components/admin/trainerAcceptance/TrainerA.js'
import SHGs from './components/admin/SHGs/SGHs.jsx'
import Home from './components/home/Home.js'
import SHGSurvey from './components/trainer/survey shg/SHGsurvey.js'
import SurveyForm from "./components/trainer/surveyForm/SurveyForm.js"
import TrainerDetailsForm from './components/trainer/trainerProfile/TrainerDetailsForm.js'
import TestComponent from './components/trainer/TestComponent/TestComponent.jsx'


const App = () => {useEffect(() => {
  store.dispatch(loadUser());
}, [])


  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<LoginForm/>}></Route>
          <Route path="/admin" element={<Dashboard />}></Route>
          <Route exact path="/trainer" element={<TrainerDashboard />}></Route>
          <Route exact path="/trainer/courses" element={<TestComponent />}></Route>
          <Route exact path="/trainer/surveyshv" element={<SHGSurvey />}></Route>
          <Route exact path="/trainer/surveyform" element={<SurveyForm />}></Route>
          <Route exact path="/trainer/trainerprofile" element={<TrainerDetailsForm />}></Route>
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