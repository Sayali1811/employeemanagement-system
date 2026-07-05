import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ShowEmployee() {

  let [employees, setemployees] = useState([]);
  let [searchby, setsearchby] = useState("");
  let [keyword, setkeyword] = useState("");
  let [searchresult, setsearchresult] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/findAllEmployees")
      .then((response) => {
        setemployees(response.data);
      })
      .catch(() => {
        alert("Error in get operation")
      });
  }, [])

  let searchemployee = () => {
    let url;

    if (searchby == "firstname") {
      url = `http://localhost:8080/findByFirstname?firstname=${keyword}`;
    }
    else if (searchby == "lastname") {
      url = `http://localhost:8080/findByLastname?lastname=${keyword}`;
    }
    else if (searchby == "department") {
      url = `http://localhost:8080/findByDepartment?dept=${keyword}`;
    }
    else if (searchby == "designation") {
      url = `http://localhost:8080/findByDesignation?desig=${keyword}`;
    }
    else if (searchby == "empid") {
      let keyword1 = parseInt(keyword);
      url = `http://localhost:8080/findById?empid=${keyword1}`;

      axios.get(url)
        .then((response) => {
          if (response.data) {
            setsearchresult([response.data]);
          } else {
            alert("No record found");
            setsearchresult([]);
          }
        })
        .catch(() => {
          alert("error in search operation");
        });

      return;
    }
    else {
      alert("Please select valid search option");
      return;
    }

    axios.get(url)
      .then((response) => {
        if (response.data.length == 0) {
          alert("No matching record found");
          setsearchresult([]);
        } else {
          setsearchresult(Array.isArray(response.data) ? response.data : [response.data]);
        }
      })
      .catch(() => {
        alert("error in search operation");
      });
  };

  return (
    <div>

      {/* SEARCH */}
      <div className='d-flex gap-2 mb-3'>
        Select Searchby:
        <select onChange={(e) => setsearchby(e.target.value)}>
          <option>Select Searchby</option>
          <option value="firstname">firstname</option>
          <option value="lastname">lastname</option>
          <option value="department">department</option>
          <option value="designation">designation</option>
          <option value="empid">empid</option>
        </select>

        {searchby && (
          <div>
            <input
              type="text"
              placeholder={`enter ${searchby}`}
              onChange={(e) => setkeyword(e.target.value)}
            />
            <button className='btn btn-warning' onClick={searchemployee}>
              Search
            </button>
          </div>
        )}
      </div>

      {/* EMPLOYEE CARDS */}
      <div className='container-fluid'>
        <div className='row mb-4 gy-4'>

          {(searchresult.length > 0 ? searchresult : employees).map((emp, index) => (

            <div className='col-3' key={index}>

              <div className="card" style={{ width: "18rem" }}>

                {/* ✅ FIXED IMAGE HANDLING */}
             <img
  src={
    emp.profile
      ? emp.profile.includes("http")
        ? emp.profile
        : `/assets/img/${emp.profile.split("/").pop()}`
      : "https://via.placeholder.com/150"
  }
  className="card-img-top"
  alt="employee"
  style={{
    height: "350px",
    objectFit: "cover",
    objectPosition: "center"
  }}
/>

                <div className="card-body">

                  <h5 className="card-title">
                    {emp.firstname} {emp.middlename} {emp.lastname}
                  </h5>

                  <p className="card-text">

                    <p>Empid: <strong>{emp.empid}</strong></p>
                    <p>Email: <strong>{emp.email}</strong></p>
                    <p>Contactno: <strong>{emp.contactno}</strong></p>
                    <p>Department: <strong>{emp.department}</strong></p>
                    <p>Designation: <strong>{emp.designation}</strong></p>
                    <p>DOB: <strong>{emp.dob}</strong></p>
                    <p>Joiningdate: <strong>{emp.joiningdate}</strong></p>

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>

    </div>
  )
}