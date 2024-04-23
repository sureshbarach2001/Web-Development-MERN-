/* eslint-disable no-unused-vars */
import React, { useState  } from 'react'
import axios from "axios"
import "../CSS/Login.css"
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const navigate = useNavigate();
    const handlesubmit=()=>{
       axios.post("http://localhost:3040/auth/signup" , {username , password , email})
       navigate("/login")
    }
    return (
    <div className="login-page">
    <div className="login-container">
        <h2>Signup Page</h2><br/>
        <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input type = "email" placeholder = "Enter Email"
            onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor='username'>Username:</label>
            <input type = "text" placeholder = "Enter Username"
            onChange={(e)=>setUsername(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor='password'>Password:</label>
            <input type = "password" placeholder = "Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
           />
        </div>
        <button className = "btn-login" onClick={handlesubmit}>Sign Up</button>
        <p></p>
    </div>
    </div>
  )
}

export default Signup
