import React, { useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyCarts } from "../../../../redux/Actions/cart.action";
import logoStore from "../../../../assets/logo/logostore.svg";
import Spinner from "../../../../shared/Spinner";
const Carts = () => {
  const { isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyCarts());
  }, [isAuthenticated]);

  const { carts, isLoading } = useSelector((state) => state.cartReducers);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <div className=" flex justify-between pt-5 px-5 sm:flex-col text-3xl md:text-2xl">
        <h1 className=" "> My Carts </h1>
        <h1 className=" "> number of carts :{carts?.length}</h1>
      </div>
      <div className=" font-Roboto  mx-auto w-[90%]  px-10 py-10 rounded-lg gird grid-flow-col">
        {carts?.carts?.length > 0 &&
          carts.carts?.map((cart) => {
            return (
              <Link
                to={`/home/${cart.store?._id}`}
                key={cart._id}
                className="flex flex-col items-center transition  ease-in-out duration-500 hover:rounded-lg hover:scale-110 bg-white w-1/5 h-max"
              >
                <img
                  className="object-contain"
                  // src={cart.store.logo}
                  src={logoStore}
                  alt={cart.store.title}
                />
                <p className="h-1/2"> {cart.store.title} title</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Carts;
