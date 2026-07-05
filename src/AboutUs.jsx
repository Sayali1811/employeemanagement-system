import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mt-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="text-primary">About Our Platform</h1>
        <p className="lead">
          Transforming the way organizations manage their workforce.
        </p>
      </div>

      {/* Description */}
      <div className="mb-5">
        <p>
          Our Employee Management System is designed to help organizations streamline
          their HR operations by providing a centralized platform to manage employee data,
          track performance, and improve overall productivity.
        </p>

        <p>
          We understand the challenges faced by HR teams in handling large volumes of data.
          Our solution simplifies these processes through automation, accuracy, and
          user-friendly design.
        </p>
      </div>

      {/* Who We Serve */}
      <div className="mb-5">
        <h3>Who We Serve</h3>
        <ul>
          <li>Small and Medium Businesses (SMBs)</li>
          <li>HR Departments</li>
          <li>Startups and Growing Organizations</li>
        </ul>
      </div>

      {/* Value Section */}
      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Efficiency</h5>
            <p>Reduce manual work and improve operational speed.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Accuracy</h5>
            <p>Maintain consistent and error-free employee records.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Security</h5>
            <p>Protect sensitive employee information with secure systems.</p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-4">
        <h4>Our Mission</h4>
        <p>
          To empower organizations with reliable and scalable solutions
          that simplify workforce management.
        </p>
      </div>

      {/* Closing */}
      <div className="text-center mt-4">
        <p className="text-muted">
          Helping businesses grow through smarter employee management.
        </p>
      </div>

    </div>
  );
}