import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import logoStore from "../../assets/logo/logostore.svg";
import search from "../../assets/icon/iconserch.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Actions/auth.action";
import avatar from "../../assets/image/profilelINKDINE.png";
import { getCategories } from "../../redux/Actions/category.action";

const Header = () => {
  const dispatch = useDispatch();
  const [Query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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
  // if (user?.role === "merchant") {
  //   return <Navigate to={"/dashboard"} />;
  // }
  // useEffect(() => {
  //   dispatch(getCategories({limit:10}));
  // }, []);
  //!
  const { categories } = useSelector((state) => {
    return state.categoryReducers;
  });
  return (
    <header className="bg-info flex w-full justify-between px-16 py-2 fixed top-0 z-50 items-center flex-wrap ">
      <Link to="/home/554t">
        <img
          className="max-w-[4rem] max-h-16"
          src={logoStore}
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
      <nav className="items-center text-white flex flex-wrap gap-20 lg:gap-10 md:gap-5 sm:gap-1">
        <Link
          to="/"
          className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
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
                  <div className="px-1 py-1 border-gray">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/product/${category.slug}`}
                          className={`${
                            active ? "bg-info text-white" : "text-black"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <div> {category.image}</div>
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
      </nav>
      <nav className="text-white flex flex-wrap gap-8 lg:gap-10 md:gap-5 sm:gap-1 items-center">
        <Link
          className="relative hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          to="/cart"
        >
          <div className=" text-xs absolute w-3 h-3 bg-white rounded-full text-danger flex items-center justify-center font-semibold left-10 bottom-4">
            1
          </div>
          cart
          <i className="fa-solid fa-cart-shopping pl-1"></i>
        </Link>

        {isAuthenticated && user?.role === "merchant" ? (
          <Link
            to="/login"
            className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          >
            connect
            <i className="fa-solid fa-user pl-1"></i>
          </Link>
        ) : !isAuthenticated ? (
          <Link
            to="/login"
            className="hover:text-gray-500 border border-transparent focus-within:border-white border-solid"
          >
            connect
            <i className="fa-solid fa-user pl-1"></i>
          </Link>
        ) : (
          <div className="flex items-center">
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
                  <Menu.Items className="absolute right-0 max-w-max mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
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
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="px-1 py-1 border-gray">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-violet-500 text-white" : "text-black"
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
            <img
              className="max-w-[3rem]  rounded-full"
              src={avatar}
              alt="avatar"
            />
          </div>
        )}
      </nav>
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