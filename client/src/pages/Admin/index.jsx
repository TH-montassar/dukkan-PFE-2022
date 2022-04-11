import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Login from "./Login";
const Admin = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.adminReducers;
  });

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
