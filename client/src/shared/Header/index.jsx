import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import logoStore from "../../assets/logo/logostore.svg";
import search from "../../assets/icon/iconserch.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/auth.action";
import avatar from "../../assets/image/profilelINKDINE.png";
import { getCategories } from "../../redux/Actions/category.action";
import Spinner from "../Spinner";
import Login from "../../pages/Login";
import {
  getMyProfile,
  updateMyProfile,
} from "../../redux/Actions/profile.action";
import { getStore } from "../../redux/Actions/store.action";

import { useMatch } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const [Query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const goToSearch = (e) => {
    // const queries = new URLSearchParams(location.search);

    let queryString = "";
    const regex = /q=.*$/i;
    if (location.search.search("q=") !== -1) {
      queryString = location.search.replace(regex, `q=${Query}`);
    } else {
      queryString += location.search ? location.search : "?" + `&q=${Query}`;
    }

    navigate(`/search${queryString}`);
  };

  const { isLoading, isAuthenticated, user } = useSelector((state) => {
    return state.authReducers;
  });

  useEffect(() => {
    dispatch(getCategories({}));
  }, []);

  const { categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  const closeToast = () =>
    toast("connect to you account before", { autoClose: 500 });

  const { items } = useSelector((state) => state.cartReducers);

  const number = () => {
    let countItem = 0;
    items?.map((product) => (countItem = countItem + product.quantity));
    return countItem;
  };
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const { profile } = useSelector((state) => {
    return state.profileReducers;
  });
  useEffect(() => {
    dispatch(getStore());
  }, []);

  const { store } = useSelector((state) => {
    return state.storeReducers;
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <header className="bg-info flex w-full justify-between px-16 py-2 fixed top-0 z-50 items-center sm:items-end flex-wrap ">
      <Link
        to={`/home/${localStorage.store}`}
        className=" w-14 h-14 sm:w-10 sm:h-10"
      >
        <img
          className="rounded-full object-cover  w-full h-full"
          src={store?.logo}
          alt="logoStore"
        />
      </Link>
      <div className="relative">
        <input
          className="w-80 outline-none rounded-xl px-6 py-1.5"
          type="search"
          name=""
          id=""
          // onChange={(e) => setQuery(e.target.value)}    te5o valeur mta3 input wo t5abih fi state
          onChange={(e) => setQuery(e.target.value)}
          //te5o valour m state   wo tafichih  value={Query}
          value={Query}
          placeholder="Searsh here"
        />
        {/**make samthig in senter top-[calc(50%-14px)] */}
        <button
          onClick={(e) => goToSearch(e)}
          type="button"
          className="absolute right-2 top-[calc(50%-14px)]"
        >
          <img src={search} alt="search" />
        </button>
      </div>
      <nav className="flex flex-row sm:flex-col gap-20 sm:justify-end ">
        <div className="items-center text-white flex flex-row  sm:flex-col gap-16 lg:gap-10 md:gap-5 sm:gap-1">
          <Link
            to={`/home/${localStorage.store}`}
            className="hover:bg-blue-700  py-[h-full] focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-ou border border-transparent focus-within:border-white border-solid"
          >
            Home
          </Link>

          <div className=" text-right z-[9999]">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center w-full px-4 py-2    bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  Category
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
                <Menu.Items className="absolute right-0 max-w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {categories.map((category) => (
                    <div key={category._id} className="px-1 py-1 border-gray">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={`/search?category=${category.slug}`}
                            className={`${
                              active ? "bg-info text-white" : "text-black"
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {active ? (
                              <div> category</div>
                            ) : (
                              <i className="fa-solid fa-user text-info  pr-2"></i>
                            )}
                            {category.title}
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="text-white flex flex-wrap  flex-row  sm:flex-col gap-16 lg:gap-10 md:gap-5 sm:gap-1 items-center">
          {isAuthenticated ? (
            <Link
              className="relative hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
              to="/cart"
            >
              <div className=" text-xs absolute w-3 h-3 bg-white rounded-full text-danger flex items-center justify-center font-semibold left-10 bottom-4">
                {number()}
              </div>
              cart
              <i className="fa-solid fa-cart-shopping pl-1"></i>
            </Link>
          ) : (
            <div>
              <button
                onClick={closeToast}
                className="relative hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
              >
                cart
                <i className="fa-solid fa-cart-shopping pl-1"></i>
              </button>
              <ToastContainer autoClose={1000} />
            </div>
          )}

          {isAuthenticated && user?.role === "merchant" ? (
            <button
              type="button"
              onClick={openModal}
              className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
            >
              connect
              <i className="fa-solid fa-user pl-1"></i>
            </button>
          ) : !isAuthenticated ? (
            <button
              type="button"
              onClick={openModal}
              className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
            >
              connect
              <i className="fa-solid fa-user pl-1"></i>
            </button>
          ) : (
            <div className="flex items-center">
              <div className=" text-right z-[9999]">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium   bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      {user?.firstName} {user?.lastName}
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
                    <Menu.Items className="absolute right-0 max-w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/profile"
                              className={`${
                                active ? "bg-info text-white" : "text-black"
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <i className="fa-solid fa-user  pr-2"></i>
                              ) : (
                                <i className="fa-solid fa-user text-info  pr-2"></i>
                              )}
                              profile
                            </Link>
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
                                  : "text-black"
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
                                active ? "bg-info text-white" : "text-black"
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
              <Link to="/profile" className=" w-14 h-14 sm:w-10 sm:h-10">
                <img
                  className="rounded-full object-cover  w-full h-full"
                  src={profile?.avatar}
                  alt="avatar"
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block   py-6 px-2 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Authentification
                </Dialog.Title>
                <Login />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

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

export default Header;
