import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ViewLeaveDetails() {

  const [leaves, setLeaves] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/leave/all")
      .then(res => setLeaves(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const updateStatus = (id, status) => {
    axios.put(`http://localhost:8080/leave/status?id=${id}&status=${status}`)
      .then(() => {
        alert("Status Updated ✅");
        fetchData(); // refresh table
      })
      .catch(err => {
        console.log(err);
        alert("Error updating status ❌");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Manage Leave Requests</h2>

      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>EmpID</th>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map(l => (
            <tr key={l.leaveid}>
              <td>{l.leaveid}</td>
              <td>{l.empid}</td>
              <td>{l.firstname} {l.lastname}</td>
              <td>{l.fromdate}</td>
              <td>{l.todate}</td>

              {/* STATUS COLOR */}
              <td>
                <span className={
                  l.status === "Approved" ? "text-success fw-bold" :
                  l.status === "Rejected" ? "text-danger fw-bold" :
                  "text-warning fw-bold"
                }>
                  {l.status}
                </span>
              </td>

              {/* 🔥 FIXED ACTION COLUMN */}
              <td>
                {l.status === "Pending" ? (
                  <>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => updateStatus(l.leaveid, "Approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => updateStatus(l.leaveid, "Rejected")}
                    >
                      Reject
                    </button>
                  </>
                ) : (
                  <span className="fw-bold">
                    No Action
                  </span>
                )}
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}