/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../CSS/AddStudent.css";

const AddStudent = () => {
    const [rollNo, setRollNo] = useState('');
    const [email, setEmail] = useState('');
    const [grade, setGrade] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post("http://localhost:3040/students/add", { rollNo, email, grade, password })
            .then(() => {
                // If student added successfully, navigate to a different page or show a success message
                navigate("/students"); // Navigate to a page displaying all students, for example
            })
            .catch(error => {
                // Handle error
                console.error("Error adding student:", error);
                // You can show an error message to the user
            });
    };

    return (
        <div className="student-form-container">
            <div className="student-form">
                <h2>Add Student</h2>
                <div className="form-group">
                    <label htmlFor='rollNo'>Roll No:</label>
                    <input type="text" placeholder="Enter Roll No"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="email" placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='grade'>Grade:</label>
                    <input type="text" placeholder="Enter Grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn-submit" onClick={handleSubmit}>Register Student</button>
            </div>
        </div>
    );
};

export default AddStudent;
