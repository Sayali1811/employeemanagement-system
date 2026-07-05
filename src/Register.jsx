import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contactno, setContactno] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [empid, setEmpid] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // 🔹 TRIM VALUES
    const f = firstname.trim();
    const l = lastname.trim();
    const u = username.trim();

    // 🔹 VALIDATION
    if (!f || !l || !email || !contactno || !u || !password || !confirmpassword || !empid || !role || !gender) {
      alert("Please fill all fields");
      return;
    }

    if (role === "") {
      alert("Please select role");
      return;
    }

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    if (contactno.length !== 10) {
      alert("Enter valid 10-digit contact number");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/register", {
        firstname: f,
        lastname: l,
        email,
        contactno,
        username: u,
        password,
        role,
        gender,
        empid: Number(empid) // ✅ important
      });

      alert(res.data);

      // 🔹 RESET FORM
      setFirstname("");
      setLastname("");
      setEmail("");
      setContactno("");
      setUsername("");
      setPassword("");
      setConfirmpassword("");
      setRole("");
      setGender("");
      setEmpid("");

    } catch (err) {
      console.log(err.response?.data || err);

      alert(
        typeof err.response?.data === "string"
          ? err.response.data
          : "Something went wrong"
      );
    }
  };

  return (
    <div className="register-box">
      <form className="form-container" onSubmit={handleRegister}>
        <h2>Registration</h2>

        <label>First Name</label>
        <input className="form-control" value={firstname}
          onChange={(e) => setFirstname(e.target.value)} />

        <label>Last Name</label>
        <input className="form-control" value={lastname}
          onChange={(e) => setLastname(e.target.value)} />

        <label>Email</label>
        <input type="email" className="form-control" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label>Contact No</label>
        <input type="number" className="form-control" value={contactno}
          onChange={(e) => setContactno(e.target.value)} />

        <label>Username</label>
        <input className="form-control" value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label>Password</label>
        <input type="password" className="form-control" value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <label>Confirm Password</label>
        <input type="password" className="form-control" value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)} />

        <label>Employee ID</label>
        <input type="number" className="form-control" value={empid}
          onChange={(e) => setEmpid(e.target.value)} />

        <label>Role</label>
        <select className="form-control" value={role}
          onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option>Admin</option>
          <option>Employee</option>
        </select>

        <div className="mt-2">
          <label>Gender: </label>

          <input type="radio" name="gender" value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)} /> Male

          <input type="radio" name="gender" value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
            className="ms-3" /> Female
        </div>

        <button className="btn btn-success mt-3">Register</button>
      </form>
    </div>
  );
}