import React from 'react'
import LoginPage from './components/LoginPage/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import HorizontalNonLinearStepper from './components/Stepper/StepperTest'
import HorizontalNonLinearStepperTest from './components/Stepper/StepperTest'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="" element={<LoginPage />} />
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/steppertest' element={<HorizontalNonLinearStepperTest/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App