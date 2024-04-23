//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar2 from './components/Navbar2'
import Home from './components/Home'
import AddStudent from './components/AddStudent'

function App() {


  return (
    <>
    
      <BrowserRouter>
      <Navbar2/>
        <Routes>
          <Route path = "/" element={<Home/>}></Route>
          <Route path = "/addstudent" element={<AddStudent/>}></Route>
          <Route path = "/signup" element={<Signup/>}></Route>
          <Route path = "/Login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>     
   </>
  )
}

export default App
