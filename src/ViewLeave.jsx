import axios from 'axios';
import React, { useState } from 'react';

export default function ViewLeave() {

  const [empid, setEmpid] = useState("");
  const [leaves, setLeaves] = useState([]);

  const search = () => {

    if (!empid) {
      alert("Please enter Employee ID ❗");
      return;
    }

    axios.get(`http://localhost:8080/leave/emp?empid=${empid}`) // ✅ FIXED
      .then(res => {
        setLeaves(res.data);

        if (res.data.length === 0) {
          alert("No records found ❌");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error fetching data ❌");
      });
  };

  return (
    <div className="container mt-4">

      <h2>Search Employee Leave</h2>

      <input
        placeholder="Enter Emp ID"
        className="form-control w-25 mb-2"
        value={empid}
        onChange={(e) => setEmpid(e.target.value)}
      />

      <button className="btn btn-primary mb-3" onClick={search}>
        Search
      </button>

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
            leaves.map(l => (
              <tr key={l.leaveid}>
                <td>{l.leaveid}</td>
                <td>{l.fromdate}</td>
                <td>{l.todate}</td>
                <td>{l.reason}</td>
                <td>
                  <span className={
                    l.status === "Approved" ? "text-success fw-bold" :
                    l.status === "Rejected" ? "text-danger fw-bold" :
                    "text-warning fw-bold"
                  }>
                    {l.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No Data</td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  );
}