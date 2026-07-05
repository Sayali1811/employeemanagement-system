import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {

    let[firstname,setfirstname]=useState("");
    let[middlename,setmiddlename]=useState("");
    let[lastname,setlastname]=useState("");
    let[email,setemail]=useState("");
    let[gender,setgender]=useState("");
    let[profile,setprofile]=useState("");
    let[contactno,setcontactno]=useState(0);
    let[adharno,setadharno]=useState(0);
    let[panno,setpanno]=useState("");
    let[dob,setdob]=useState("");

    let[department,setdepartment]=useState("");
    let[designation,setdesignation]=useState("");
    let[salary,setsalary]=useState(0.0);
    let[joiningdate,setjoiningdate]=useState("");
    let[exp,setexp]=useState(0);
    let[reportingmanager,setreportingmanager]=useState("");
    let[worklocation,setworklocation]=useState("");
    let[status,setstatus]=useState("");
    let[edu,setedu]=useState("");
    let[address,setaddress]=useState("");
               
// ✅ ADDED VALIDATION FUNCTION
let validate=()=>{

    let nameRegex=/^[A-Za-z]+$/;
    let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex=/^[0-9]{10}$/;
    let aadharRegex=/^[0-9]{12}$/;

    if(!firstname){
        alert("First Name is required");
        return false;
    }
    if(!nameRegex.test(firstname)){
        alert("First Name must contain only alphabets");
        return false;
    }

    if(!middlename){
        alert("Middle Name is required");
        return false;
    }
    if(!nameRegex.test(middlename)){
        alert("Middle Name must contain only alphabets");
        return false;
    }

    if(!lastname){
        alert("Last Name is required");
        return false;
    }
    if(!nameRegex.test(lastname)){
        alert("Last Name must contain only alphabets");
        return false;
    }

    if(!email){
        alert("Email is required");
        return false;
    }
    if(!emailRegex.test(email)){
        alert("Enter valid email format");
        return false;
    }

    if(!contactno){
        alert("Contact number is required");
        return false;
    }
    if(!phoneRegex.test(contactno)){
        alert("Contact number must be exactly 10 digits");
        return false;
    }

    if(!adharno){
        alert("Aadhar number is required");
        return false;
    }
    if(!aadharRegex.test(adharno)){
        alert("Aadhar must be exactly 12 digits");
        return false;
    }

    if(!panno){
        alert("PAN number is required");
        return false;
    }

    if(!dob){
        alert("Date of Birth is required");
        return false;
    }

    if(!gender){
        alert("Please select gender");
        return false;
    }

    if(!edu){
        alert("Education is required");
        return false;
    }

    if(!address){
        alert("Address is required");
        return false;
    }

    if(!designation){
        alert("Designation is required");
        return false;
    }

    if(!department){
        alert("Department is required");
        return false;
    }

    if(!salary){
        alert("Salary is required");
        return false;
    }
    if(salary<=0){
        alert("Salary must be greater than 0");
        return false;
    }

    if(!worklocation){
        alert("Work location is required");
        return false;
    }

    if(!reportingmanager){
        alert("Reporting Manager is required");
        return false;
    }

    if(!status){
        alert("Please select status");
        return false;
    }

    if(!joiningdate){
        alert("Joining Date is required");
        return false;
    }

    if(!profile){
        alert("Please upload profile image");
        return false;
    }

    return true;
}

let handleprofile=(event)=>
{
   let file= event.target.files[0];
   let filepath=`./assets/img/${file.name}`
   setprofile(filepath);

}

let addemp=(event)=>{
    event.preventDefault();

    // ✅ ADDED VALIDATION CALL
    if(!validate()){
        return;
    }

    let employee={firstname,lastname,middlename,dob,email,gender,contactno,profile,edu,
        status,worklocation,designation,department,address,reportingmanager,exp,joiningdate,salary,adharno,panno};

    axios.post(`http://localhost:8080/addEmployee`,employee)
    .then((response)=>{
        if(response.data=="Employee record added successfully"){
            alert(response.data);
              window.location.reload();

        }
    })
    .catch((error)=>{
        alert("Error in post operation");
    }
    )
}

  return (
    <div>
        <form onSubmit={addemp}>

          {/* Main Title */}
          <h2 className="text-center text-danger bg-info  mb-4">
            Employee Registration Form
          </h2>

          {/* Personal Info */}
          <h5 className="text-dark border-bottom pb-2 mb-3">
            Personal Details
          </h5>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setfirstname(event.target.value)}} />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Middle Name</label>
              <input type="text" className="form-control" 
              onChange={(event)=>{setmiddlename(event.target.value)}}/>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setlastname(event.target.value)}} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" 
              onChange={(event)=>{setemail(event.target.value)}}/>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Date of Birth</label>
              <input type="date" className="form-control"
              onChange={(event)=>{setdob(event.target.value)}} />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Contact No</label>
              <input type="number" className="form-control"
              onChange={(event)=>{setcontactno(event.target.value)}} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Gender</label>
              <select 
                   className="form-control"
                   value={gender}
                   onChange={(event)=>{setgender(event.target.value)}}
    >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Education</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setedu(event.target.value)}} />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" 
              onChange={(event)=>{setaddress(event.target.value)}}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Aadhar No</label>
              <input type="number" className="form-control" 
              onChange={(event)=>{setadharno(event.target.value)}}/>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">PAN No</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setpanno(event.target.value)}} />
            </div>
          </div>

          {/* Work Info */}
          <h5 className="text-dark border-bottom pb-2 mt-4 mb-3">
            Work Details
          </h5>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Designation</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setdesignation(event.target.value)}} />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Department</label>
              <input type="text" className="form-control" 
              onChange={(event)=>{setdepartment(event.target.value)}}/>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Experience (Years)</label>
              <input type="number" className="form-control" 
              onChange={(event)=>{setexp(event.target.value)}}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-3">
              <label className="form-label">Salary</label>
              <input type="number" className="form-control" 
              onChange={(event)=>{setsalary(event.target.value)}}/>
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Work Location</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setworklocation(event.target.value)}} />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label">Reporting Manager</label>
              <input type="text" className="form-control"
              onChange={(event)=>{setreportingmanager(event.target.value)}} />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select 
              className="form-control"
              value={status}
             onChange={(event)=>{setstatus(event.target.value)}} >
             <option value="">Select Status</option>
             <option value="Active">Active</option>
             <option value="Inactive">Inactive</option>
             </select>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input type="date" className="form-control"
              onChange={(event)=>{setjoiningdate(event.target.value)}} />
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-3">
            <label className="form-label">Profile Image</label>
            <input type="file" className="form-control"
            onChange={(event)=>{handleprofile(event)}}
             accept="image/*" />
          </div>

          <div className="mb-3">
            <label className="form-label">Profile preview</label>
           <img src={profile} width="120" alt="preview" />
          </div>
 
          <div className="text-center">
            <button className="btn btn-primary px-4">Submit</button>
          </div>

        </form>
    </div>
  )
}