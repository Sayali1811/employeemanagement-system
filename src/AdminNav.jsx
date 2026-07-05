import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminNav() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "null");

 
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");   // better + consistent with your app
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">

          {/* Logo */}
          <span className="navbar-brand d-flex align-items-center">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/conference-call.png"
              alt="EMS Logo"
              className="logo-img"
            />
          </span>

          {/* Toggle */}
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/home" className="nav-link active">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/add" className="nav-link">Add Employee</Link>
              </li>

              <li className="nav-item">
                <Link to="/view" className="nav-link">View Employee</Link>
              </li>

              {/* LEAVE MODULE */}
              <li className="nav-item">
                <Link to="/admin/leave" className="nav-link">All Leaves</Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/leave/search" className="nav-link">Search Leave</Link>
              </li>

              {/* PUBLIC PAGES */}
              <li className="nav-item">
                <Link to="/admin/about" className="nav-link">About Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/contact" className="nav-link">Contact Us</Link>
              </li>

              <li className="nav-item">
                <Link to="/admin/services" className="nav-link">Services</Link>
              </li>

              {/* USER */}
              <li className="nav-item ms-3">
                <span className="nav-link fw-bold">
                  Welcome, {user?.firstname || "Admin"}
                </span>
              </li>

              {/* LOGOUT */}
              <li className="nav-item">
                <button
                  className="btn btn-danger ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>

            </ul>

            {/* SEARCH */}
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button type="button" className="btn btn-outline-success">
                Search
              </button>
            </form>

          </div>
        </div>
      </nav>
    </div>
  )
}