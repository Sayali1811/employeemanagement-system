import React, { useState } from 'react'

export default function ContactUs() {

  let[name,setname]=useState("");
  let[email,setemail]=useState("");
  let[message,setmessage]=useState("");

  // ✅ Validation Function
  let validate=()=>{
    let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!name){
      alert("Name is required");
      return false;
    }

    if(!email){
      alert("Email is required");
      return false;
    }

    if(!emailRegex.test(email)){
      alert("Enter valid email");
      return false;
    }

    if(!message){
      alert("Message is required");
      return false;
    }

    return true;
  }

  let handlesubmit=(e)=>{
    e.preventDefault();

    if(!validate()){
      return;
    }

    alert("Your message has been submitted successfully!");

    // clear form
    setname("");
    setemail("");
    setmessage("");
  }

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-primary">Contact Us</h2>
        <p>We are here to help you. Reach out for any queries or support.</p>
      </div>

      <div className="row">

        {/* Contact Info */}
        <div className="col-md-5 mb-4">
          <div className="card shadow p-3 h-100">
            <h4 className="text-success">Get in Touch</h4>

            <p><strong>Company:</strong> Employee Management System</p>
            <p><strong>Email:</strong> support@ems.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> Pune, Maharashtra, India</p>

            <p className="mt-3 text-muted">
              Our support team is available Monday to Friday, 9 AM to 6 PM.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow p-4">

            <h4 className="mb-3 text-success">Send Message</h4>

            <form onSubmit={handlesubmit}>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={message}
                  onChange={(e)=>setmessage(e.target.value)}
                ></textarea>
              </div>

              <div className="text-center">
                <button className="btn btn-primary px-4">
                  Submit
                </button>
              </div>

            </form>

          </div>
        </div>

      </div>

    </div>
  )
}