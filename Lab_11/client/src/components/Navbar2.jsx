/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import "../CSS/Navbar.css"
const Navbar2 = () => {
  return (
    <div className="navbar">
    <div className="navbar-left">
        <span className = "navbar-brand">FAST-NU Book Shop</span>
    </div>
    <div className="navbar-right">
        <Link to = "/books" className = "navbar-link">Books</Link>
          <Link to = "/addbook" className = "navbar-link">AddBook</Link>
          <Link to = "/addstudent" className = "navbar-link">Add Student</Link>
          <Link to = "/dashboard" className = "navbar-link">Dashboard</Link>
          <Link to = "/signup" className = "navbar-link">Sign Up</Link>
          <Link to = "/login" className = "navbar-link">Login</Link>
          <Link to = "/logout" className = "navbar-link">Logout</Link>
    </div>
</div>
  )
}

export default Navbar2