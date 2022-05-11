// import React, { ReactElement } from "react";
// import Spinner from "../shared/Spinner";
// import { useAppSelector } from "../redux/store";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// const RequiredAuth = (): ReactElement => {
//   const { isLoading, isAuthenticated, isError, isSuccess } = useAppSelector(
//     (state) => {
//       return state.authReducers;
//     }
//   );
//   const location = useLocation();
//   if (isError && !isSuccess && !isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   if (isSuccess && !isLoading && !isAuthenticated) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }
//   if (isSuccess && isAuthenticated) {
//     return <Outlet />;
//   }
//   return <Spinner />;
// };

// export default RequiredAuth;
