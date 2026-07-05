import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (e) {
    user = null;
  }

  // ❌ Not logged in → redirect
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Normalize role (VERY IMPORTANT for your EMP issue)
  const cleanRole = user.role
    ?.replace("ROLE_", "")   // removes Spring Security prefix
    ?.trim()                 // removes spaces
    ?.toLowerCase();         // makes it uniform

  // ❌ Role mismatch → redirect
  if (role && cleanRole !== role.toLowerCase()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}