import React from 'react'

export default function Services() {
  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-primary">Our Services</h2>
        <p>
          Our Employee Management System provides complete solutions to manage
          workforce data, streamline HR operations, and improve organizational efficiency.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mb-5">
        <h4 className="text-success">1. Employee Record Management</h4>
        <p>
          Manage complete employee information including personal details,
          job roles, salary, and joining date. Easily add, update, and delete records.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-5">
        <h4 className="text-success">2. Smart Search & Filtering</h4>
        <p>
          Search employees using multiple criteria such as employee ID,
          name, department, and designation for faster data access.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-5">
        <h4 className="text-success">3. Department & Role Management</h4>
        <p>
          Organize employees based on departments and designations.
          Helps in better workforce planning and reporting.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-5">
        <h4 className="text-success">4. Secure Data Handling</h4>
        <p>
          Employee data is stored securely using backend technologies
          ensuring data integrity and confidentiality.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-5">
        <h4 className="text-success">5. Performance & Data Tracking</h4>
        <p>
          Track employee experience, reporting manager, and work location
          to monitor workforce distribution and performance.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-5">
        <h4 className="text-success">6. Easy Integration</h4>
        <p>
          Designed to integrate with other HR modules like payroll,
          attendance, and reporting systems in the future.
        </p>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-5">
        <p className="text-muted">
          Our goal is to simplify employee data management and help organizations
          make faster and smarter decisions.
        </p>
      </div>

    </div>
  )
}