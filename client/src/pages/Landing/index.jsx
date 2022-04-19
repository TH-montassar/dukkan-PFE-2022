import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, NavLink } from "react-router-dom";
const Landing = () => {
    const { isLoading, isAuthenticated, user } = useSelector((state) => {
        return state.authReducers;
      });
      if (user?.role === "merchant") {
        return <Navigate to={"/dashboard"} />;
      }
    return (
        <div className="bg-wave   bg-no-repeat	">
       <pre className='flex flex-col'>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
      <div>fff</div> <div>fff</div>
           gapg
           g
           g
           g
           g
           gapg
           g
           g
           g
           gapgg
           g
           gapg
       </pre>
        </div>
    );
}

export default Landing;
