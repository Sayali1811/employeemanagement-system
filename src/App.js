import './App.css';

import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Services from './Services';
import AdminDashboard from './AdminDashboard';
import Home from './Home';
import ShowEmployee from './ShowEmployee';
import RegisterUser from './RegisterUser';
import EmployeeDashboard from './EmployeeDashboard';

// ✅ LEAVE MODULE
import LeaveApplication from './LeaveApplication';
import ViewLeave from './ViewLeave';
import ViewLeaveDetails from './ViewLeaveDetails';
import MyLeaves from './MyLeaves';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import AdminLayout from './AdminLayout';
import EmpLayout from './EmpLayout';
import CommonLayout from './CommonLayout';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= HOME ================= */}
        <Route path="/" element={
          <CommonLayout>
            <Home />
          </CommonLayout>
        } />

        {/* ================= EMS ENTRY PAGE (NEW SAFE ADDITION) ================= */}
        <Route path="/ems" element={
          <CommonLayout>
            <Home />
          </CommonLayout>
        } />

        {/* ================= PUBLIC ================= */}
        <Route path="/about" element={
          <CommonLayout>
            <AboutUs />
          </CommonLayout>
        } />

        <Route path="/services" element={
          <CommonLayout>
            <Services />
          </CommonLayout>
        } />

        <Route path="/contact" element={
          <CommonLayout>
            <ContactUs />
          </CommonLayout>
        } />

        {/* ================= AUTH ================= */}
        <Route path="/login" element={
          <CommonLayout>
            <RegisterUser />
          </CommonLayout>
        } />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/home" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <Home />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/add" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AddEmployee />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/view" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ViewEmployee />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* ================= ADMIN EXTRA ================= */}
        <Route path="/admin/about" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <AboutUs />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin/services" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <Services />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin/contact" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ContactUs />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* ================= ADMIN LEAVE ================= */}

        <Route path="/admin/leave" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ViewLeaveDetails />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin/leave/search" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ViewLeave />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin/leave/byemp" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ViewLeave />
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="/admin/leave/manage" element={
          <ProtectedRoute role="admin">
            <AdminLayout>
              <ViewLeaveDetails />
            </AdminLayout>
          </ProtectedRoute>
        } />

        {/* ================= EMPLOYEE ================= */}
        <Route path="/emp" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <EmployeeDashboard />
            </EmpLayout>
          </ProtectedRoute>
        } />

        <Route path="/emp/dashboard" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <EmployeeDashboard />
            </EmpLayout>
          </ProtectedRoute>
        } />

        <Route path="/emp/show" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <ShowEmployee />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* Apply Leave */}
        <Route path="/emp/leave" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <LeaveApplication />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* My Leaves */}
        <Route path="/emp/myleaves" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <MyLeaves />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* Summary */}
        <Route path="/emp/summary" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <MyLeaves />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* All Leaves */}
        <Route path="/emp/all-leaves" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <MyLeaves />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* EMPLOYEE PUBLIC */}
        <Route path="/emp/about" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <AboutUs />
            </EmpLayout>
          </ProtectedRoute>
        } />

        <Route path="/emp/services" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <Services />
            </EmpLayout>
          </ProtectedRoute>
        } />

        <Route path="/emp/contact" element={
          <ProtectedRoute role="employee">
            <EmpLayout>
              <ContactUs />
            </EmpLayout>
          </ProtectedRoute>
        } />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;