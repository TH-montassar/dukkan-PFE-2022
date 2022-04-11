import React from "react";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Login from "./Login";
const Admin = () => {
  return (
    <div>
      <Routes>
   
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Admin;
