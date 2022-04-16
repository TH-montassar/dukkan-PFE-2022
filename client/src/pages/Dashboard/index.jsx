import React, { useState } from "react";
import logo from "../../assets/logo/logostore.svg";
import order from "../../assets/icon/order.svg";
import product from "../../assets/icon/product.svg";
import addProductIcon from "../../assets/icon/add.png";

import admin from "../../assets/icon/admin.png";
import goTo from "../../assets/icon/goto.svg";
import pendingOrder from "../../assets/icon/orderPending.svg";
import avatar from "../../assets/image/profilelINKDINE.png";

import { Link, Routes, Route } from "react-router-dom";

import AddProduct from "./components/AddProduct";
const Dashboard = () => {
  return (
    <div className="flex flex-row w-full font-sans	">
      <aside className="bg-info fixed  min-h-screen h-full overflow-y-auto  w-1/6 text-white font-medium">
        <i className="fa-solid fa-align-right pt-5 flex justify-end pr-2  text-lg lg:text-sm  "></i>
        <div className="pt-2 flex flex-row items-center justify-between pl-10 pr-12 lg:pl-4">
          <img
            className="max-w-[4rem] xl:max-w-[3rem]"
            src={logo}
            alt="logoStore"
          />
          <p className="text-white text-lg lg:text-sm">StoreName</p>
        </div>
        <div className="max-w-[90%] ml-16   pt-10 lg:ml-0">
          <h2 className="text-lg font-semibold tracking-widest text-[#a9e1f9]		">
            OPERATION
          </h2>
          <ul className="pl-2 pt-5">
            <div className="flex flex-row gap-3 ">
              <i className="fa-solid fa-house"></i>
              <li className="mb-3">Home</li>
            </div>
            <div className="flex flex-row gap-3 mt-1">
              <i className="fa-solid fa-user-group"></i>
              <li className="mb-3">customer</li>
            </div>
            <div className="flex flex-row gap-3 mt-1">
              <img className="max-w-[1.3rem]" src={order} alt="order" />
              <li>Orders</li>
            </div>
          </ul>
          <h2 className="mt-7 text-lg font-semibold tracking-widest text-[#a9e1f9]">
            SETUP
          </h2>
          <ul className="pl-2 pt-5">
            <div className="flex flex-row gap-3 ">
              <img className="max-w-[1.3rem]" src={product} alt="product" />
              <li className="mb-3">Products</li>
            </div>
            <Link
              to="/dashboard/addProduct"
              className="flex flex-row gap-3 mt-1 "
            >
              <img
                className="max-w-[1.3rem] max-h-[1.5rem]"
                src={addProductIcon}
                alt="addProductIcon"
              />
              <li className="mb-3">Add Product</li>
            </Link>
            <div className="flex flex-row gap-3 mt-1">
              <i className="fa-solid fa-cart-flatbed"></i>
              <li>Categories</li>
            </div>
          </ul>
        </div>

        <Link to="#" className="flex flex-row gap-3 ml-[4.57rem] lg:ml-2 mt-32">
          <img
            className="max-w-[1.3rem] max-h-[1.3rem]"
            src={admin}
            alt="addProduct"
          />
          <p>contact admin</p>
        </Link>
      </aside>
      <section className="w-5/6 pt-10 ml-64 pb-16">
        <div className="shadow-md rounded-xl	 w-[90%] m-auto min-h-max flex flex-row justify-between items-center px-5 py-4">
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="min-w-min lg:text-sm"> go to my website</p>
            <img src={goTo} alt="go to" />
          </div>
          <div className="flex flex-row items-center justify-center gap-7">
            <div className="flex flex-row items-center gap-3">
              <p>order </p>
              <div className="relative">
                <p className="absolute left-5 bottom-8 rounded-full bg-Primary text-white w-4 h-4 flex items-center justify-center sm:text-[1rem]">
                  0
                </p>
                <img
                  className="max-w-[1.97rem]"
                  src={pendingOrder}
                  alt="pending Order"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <p>foulen fouleni</p>
              <img
                className="max-w-[4rem]  rounded-full"
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/addProduct" element={<AddProduct />}></Route>
        </Routes>
      </section>
    </div>
  );
};

export default Dashboard;
