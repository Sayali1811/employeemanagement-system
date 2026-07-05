import React from "react";
import EmpNavbar from "./EmpNavbar";

export default function EmpLayout({ children }) {
  return (
    <>
      <EmpNavbar />
      <div className="container mt-3">
        {children}
      </div>
    </>
  );
}