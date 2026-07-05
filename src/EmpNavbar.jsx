import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmpNavbar() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // ✅ LOAD USER SAFELY
  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("user");

        if (!storedUser || storedUser === "null") {
          navigate("/login");
          return;
        }

        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

      } catch (error) {
        console.log("User parsing error:", error);
        localStorage.removeItem("user");
        navigate("/login");
      }
    };

    loadUser();
  }, [navigate]);

  // ✅ LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
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
          data-bs-target="#empNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="empNavbar">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link to="/emp" className="nav-link active">Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/emp/show" className="nav-link">Show Employee</Link>
            </li>

            {/* Leave */}
            <li className="nav-item">
              <Link to="/emp/leave" className="nav-link">Apply Leave</Link>
            </li>

            <li className="nav-item">
              <Link to="/emp/myleaves" className="nav-link">My Leaves</Link>
            </li>

            <li className="nav-item">
              <Link to="/emp/about" className="nav-link">About Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/emp/contact" className="nav-link">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link to="/emp/services" className="nav-link">Services</Link>
            </li>

            {/* USER */}
            <li className="nav-item ms-3">
              <span className="nav-link fw-bold text-dark">
                Welcome, {user?.firstname || user?.name || user?.username || "User"}
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
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button type="button" className="btn btn-outline-success">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  )
}