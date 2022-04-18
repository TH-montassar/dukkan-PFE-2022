import React, { useState, Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../../assets/logo/logostore.svg";
import order from "../../assets/icon/order.svg";
import product from "../../assets/icon/product.svg";
import addProductIcon from "../../assets/icon/add.png";

import admin from "../../assets/icon/admin.png";
import goTo from "../../assets/icon/goto.svg";
import pendingOrder from "../../assets/icon/orderPending.svg";
import avatar from "../../assets/image/profilelINKDINE.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import AddProduct from "./components/AddProduct";
import PrivateRoutes from "../../guards/PrivateRoutes";
import Product from "./components/Products";
import Spinner from "../../shared/Spinner";
import { logout } from "../../redux/Actions/auth.action";
import { getCategories } from "../../redux/Actions/category.action";
import { getStoreWithProduct } from "../../redux/Actions/store.action";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { isLoading, user } = useSelector((state) => {
    return state.authReducers;
  });
  useEffect(() => {
    dispatch(getStoreWithProduct({ store: user.store }));
  }, []);
  const { store } = useSelector((state) => {
    return state.storeReducers;
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="flex flex-row w-full font-sans 	h-screen mb-10">
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
            <Link to="/dashboard/product" className="flex flex-row gap-3 ">
              <img className="max-w-[1.3rem]" src={product} alt="product" />
              <li className="mb-3">Products</li>
            </Link>
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
      <section className="w-5/6 pt-10 ml-[17rem] pb-16 lg:ml-44">
        <div className="  bg-white shadow-md rounded-xl	 w-[90%] m-auto min-h-max flex flex-row justify-between items-center px-5 py-2">
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
              <div className=" text-right z-[9999]">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium   bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      {user.firstName} {user.lastName}
                      <ChevronDownIcon
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <EditActiveIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <EditInactiveIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Edit
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1 border-gray">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-violet-500 text-white"
                                  : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <ArchiveActiveIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ArchiveInactiveIcon
                                  className="w-5 h-5 mr-2"
                                  aria-hidden="true"
                                />
                              )}
                              Archive
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1 border-gray">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={() => dispatch(logout())}
                              className={`${
                                active ? "bg-info text-white" : "text-gray-900"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <i className="fa-solid fa-right-from-bracket pr-2"></i>
                              ) : (
                                <i className="fa-solid fa-person-walking-arrow-right pr-2 text-info"></i>
                              )}
                              Log out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <img
                className="max-w-[3rem]  rounded-full"
                src={avatar}
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <Routes>
          <Route
            path="/addProduct"
            element={
              <PrivateRoutes>
                <AddProduct />
              </PrivateRoutes>
            }
          ></Route>
          <Route path="/product" element={<Product />}></Route>
        </Routes>
      </section>
    </div>
  );
};
function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

export default Dashboard;
