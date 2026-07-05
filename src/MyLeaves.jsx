import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyLeaves() {

  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));
    const empid = user?.empid || localStorage.getItem("empid");

    console.log("USER:", user);
    console.log("EMPID:", empid);

    if (!empid) {
      console.warn("❌ EMPID NOT FOUND");
      navigate("/login"); // better UX than alert
      return;
    }

    axios.get(`http://localhost:8080/leave/emp?empid=${empid}`)
      .then(res => {
        console.log("Leaves:", res.data);
        setLeaves(res.data || []);
      })
      .catch(err => {
        console.log("ERROR:", err);
        alert("Error loading leaves");
      });

  }, [navigate]);

  return (
    <div className="container mt-4">

      <h2>My Leaves</h2>

      <table className="table table-bordered text-center">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leaves.length > 0 ? (
            leaves.map((l) => (
              <tr key={l.leaveid}>
                <td>{l.leaveid}</td>
                <td>{l.fromdate}</td>
                <td>{l.todate}</td>
                <td>{l.reason}</td>
                <td>{l.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Leave Records Found</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
}