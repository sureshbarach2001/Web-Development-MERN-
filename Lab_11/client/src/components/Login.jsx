/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../CSS/Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('student'); // Default user type
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post("http://localhost:3040/auth/login", { username, password, userType })
            .then(() => {
                // If login successful, navigate to a different page
                navigate("./AddStudent.jsx");
            })
            .catch(error => {
                // Handle login error
                console.error("Login failed:", error);
                // You can show a message to the user indicating login failed
            });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login Page</h2><br />
                <div className="form-group">
                    <label htmlFor='username'>Username:</label>
                    <input type="text" placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='userType'>User Type:</label>
                    <select
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button className="btn-login" onClick={handleSubmit}>Login</button>
                <p></p>
            </div>
        </div>
    );
};

export default Login;
