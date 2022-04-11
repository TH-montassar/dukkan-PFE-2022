import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Routes, Route } from "react-router-dom";
const Dashboard = () => {
  const { isAuthenticated } = useSelector((state) => {
    return state.adminReducers;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/admin/login"} />;
  }
  return <div>Dashboard admin</div>;
};

export default Dashboard;
