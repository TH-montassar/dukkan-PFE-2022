import React from "react";
import Spinner from "../shared/Spinner";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const RequiredAuth = () => {
  const { isLoading, isAuthenticated, isError, isSuccess } = useSelector(
    (state) => {
      return state.authReducers;
    }
  );
  const location = useLocation();
  if (isError && !isSuccess && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isSuccess && !isLoading && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (isSuccess && isAuthenticated) {
    return <Outlet />;
  }
  return <Spinner />;
};

export default RequiredAuth;
