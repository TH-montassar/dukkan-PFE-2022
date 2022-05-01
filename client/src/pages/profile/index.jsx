import React from "react";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import { Link, Navigate, Routes, Route } from "react-router-dom";
import PersonnelInformation from "./components/PersonnelInformation";
import Orders from "./components/Orders";
import Wishlist from "./components/Wishlist";
import Address from "./components/Address";
import Carts from "./components/Carts";
const Profile = () => {
  return (
    <div>
      <Header />

      <div className="pt-20 w-full h-screen mx-auto">
        <h1 className="mx-auto w-max text-2xl font-semibold ">My account </h1>
        <article className="w-[85%] flex flex-row m-auto h-full justify-center gap-4">
          <aside className=" bg-white w-1/5  rounded-lg h-[85%]  m-auto flex flex-col justify-around  ">
            <Link
              to="/profile/"
              className="    hover:bg-info   rounded-lg  hover:text-white flex flex-col gap-2 items-center justify-center h-1/5 px-5"
            >
              <i className="    transition  ease-in-out duration-3000  hover:scale-110 text-5xl sm:text-xl fa-solid fa-user"></i>
              <h3 className="sm:truncate sm:w-0 sm:h-0">
                personnel information
              </h3>
            </Link>
            <Link
              to="/profile/orders"
              className="    hover:bg-info   rounded-lg  hover:text-white flex flex-col gap-2 items-center w-full justify-center  h-1/5  px-5"
            >
              <i className="    transition  ease-in-out duration-3000  hover:scale-110 text-5xl sm:text-xl fa-solid fa-arrow-down-short-wide"></i>
              <h3 className="sm:truncate sm:w-0 sm:h-0">my orders</h3>
            </Link>
            <Link
              to="/profile/wishlist"
              className="    hover:bg-info   rounded-lg  hover:text-white flex flex-col gap-2 items-center justify-center h-1/5 px-5"
            >
              <i className="    transition  ease-in-out duration-3000  hover:scale-110 text-5xl sm:text-xl fa-solid fa-heart-circle-check"></i>
              <h3 className="sm:truncate sm:w-0 sm:h-0">my Wishlist</h3>
            </Link>
            <Link
              to="/profile/address"
              className="    hover:bg-info   rounded-lg  hover:text-white flex flex-col gap-2 items-center justify-center h-1/5 px-5"
            >
              <i className="    transition  ease-in-out duration-3000  hover:scale-110 text-5xl sm:text-xl fa-solid fa-location-dot"></i>
              <h3 className="sm:truncate sm:w-0 sm:h-0">my address</h3>
            </Link>
            <Link
              to="/profile/carts"
              className="  hover:bg-info   rounded-lg  hover:text-white  flex flex-col gap-2 items-center justify-center h-1/5 px-5"
            >
              <i className="    transition  ease-in-out duration-3000  hover:scale-110 text-5xl sm:text-xl  fa-solid fa-cart-arrow-down"></i>
              <h3 className="sm:truncate sm:w-0 sm:h-0 ">my carts</h3>
            </Link>
          </aside>
          <section className="w-4/5  rounded-lg h-[85%]  m-auto flex flex-col bg-white">
            <Routes>
              <Route path="/" element={<PersonnelInformation />}></Route>
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
              <Route path="/address" element={<Address />}></Route>
              <Route path="/carts" element={<Carts />}></Route>
            </Routes>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
