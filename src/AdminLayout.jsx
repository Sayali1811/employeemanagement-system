import React from "react";
import AdminNav from "./AdminNav";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNav />
      <div className="container mt-3">
        {children}
      </div>
    </>
  );
}