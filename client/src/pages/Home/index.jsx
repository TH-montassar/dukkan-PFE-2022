import React from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const { isLoading, isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  if (user?.role === "merchant") {
    return <Navigate to={"/dashboard"} />;
  }

  return <div>home</div>;
};

export default Home;
