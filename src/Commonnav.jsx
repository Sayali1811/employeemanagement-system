import React from 'react'
import { Link } from 'react-router-dom'

export default function Commonnav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        {/* LOGO + TITLE */}
        <span className="navbar-brand d-flex align-items-center">
          <img 
            src="https://img.icons8.com/ios-filled/50/ffffff/conference-call.png"
            alt="EMS Logo"
            className="logo-img me-2"
          />
          <span className="fw-bold">EMS System</span>
        </span>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#commonNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="commonNavbar">

          {/* LEFT SIDE */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* 🔥 FIXED: Home now points to /ems */}
            <li className="nav-item">
              <Link to="/ems" className="nav-link">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </li>

          </ul>

          {/* RIGHT SIDE */}
          <div className="d-flex">

            <Link to="/login" className="btn btn-warning fw-bold">
              Register / Login
            </Link>

          </div>

        </div>
      </div>
    </nav>
  )
}