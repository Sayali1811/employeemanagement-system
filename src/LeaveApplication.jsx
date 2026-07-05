import axios from 'axios';
import React, { useState } from 'react';

export default function LeaveApplication() {

  const [leave, setLeave] = useState({
    empid: "",
    firstname: "",
    lastname: "",
    fromdate: "",
    todate: "",
    reason: ""
  });

  // handle input
  const handleChange = (e) => {
    setLeave({
      ...leave,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ validation
    if (!leave.empid || isNaN(leave.empid)) {
      alert("Enter valid Employee ID ❌");
      return;
    }

    const payload = {
      ...leave,
      empid: Number(leave.empid)
    };

    console.log("Sending Data:", payload);

    axios.post("http://localhost:8080/leave/apply", payload)
      .then((res) => {
        console.log("SUCCESS:", res.data);

        alert("Leave Applied Successfully ✅");

        // reset form
        setLeave({
          empid: "",
          firstname: "",
          lastname: "",
          fromdate: "",
          todate: "",
          reason: ""
        });
      })
      .catch((err) => {
        console.log("FULL ERROR:", err);
        console.log("RESPONSE DATA:", err.response?.data);

        let message = "Something went wrong ❌";

        if (err.response?.data) {
          if (typeof err.response.data === "string") {
            message = err.response.data;
          } else if (err.response.data.message) {
            message = err.response.data.message;
          } else {
            message = JSON.stringify(err.response.data);
          }
        }

        alert(message);
      });
  };

  return (
    <div className="container mt-4">
      <h2>Apply Leave</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="empid"
          placeholder="Employee ID"
          className="form-control mb-2"
          value={leave.empid}
          onChange={handleChange}
          required
        />

        <input
          name="firstname"
          placeholder="First Name"
          className="form-control mb-2"
          value={leave.firstname}
          onChange={handleChange}
          required
        />

        <input
          name="lastname"
          placeholder="Last Name"
          className="form-control mb-2"
          value={leave.lastname}
          onChange={handleChange}
          required
        />

        <label>From Date</label>
        <input
          type="date"
          name="fromdate"
          className="form-control mb-2"
          value={leave.fromdate}
          onChange={handleChange}
          required
        />

        <label>To Date</label>
        <input
          type="date"
          name="todate"
          className="form-control mb-2"
          value={leave.todate}
          onChange={handleChange}
          required
        />

        <textarea
          name="reason"
          placeholder="Reason"
          className="form-control mb-2"
          value={leave.reason}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-success">
          Apply Leave
        </button>

      </form>
    </div>
  );
}