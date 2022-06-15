import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Navbar} from './components/Navbar'
import { AllRoutes } from './routes/AllRoutes'

function App() {
 
  return (
    <div className="App">
      <Navbar/><br /><br /><br />
     <AllRoutes/>
    </div>
  )
}

export default App
