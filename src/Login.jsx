import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      alert("Please enter username and password");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/login", {
        username: username.trim(),
        password
      });

      console.log("LOGIN RESPONSE:", res.data);

      const user = res.data;

      // ✅ STORE FULL USER OBJECT
      localStorage.setItem("user", JSON.stringify(user));

      // 🔥 SAFE EMPID EXTRACTION (handles all backend variations)
      const empid =
        user.empid ||
        user.empId ||
        user.employeeId ||
        user.id;

      if (empid) {
        localStorage.setItem("empid", empid);
        console.log("EMPID STORED:", empid);
      } else {
        console.warn("❌ EMPID NOT FOUND IN RESPONSE:", user);
      }

      // Optional but useful
      if (user.role) {
        localStorage.setItem("role", user.role);
      }

      alert("Login Successful");

      // ✅ ROUTING FIX (clean & safe)
      navigate(user.role === "Admin" ? "/admin" : "/emp");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        err.response?.data ||
        "Invalid username or password"
      );
    }
  };

  return (
    <div className="register-box">
      <form className="form-container" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          placeholder="Enter username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-warning mt-3">
          Login
        </button>
      </form>
    </div>
  );
}