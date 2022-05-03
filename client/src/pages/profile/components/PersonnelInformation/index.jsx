import React, { useState } from "react";
import profile from "../../../../assets/image/p2.jpg";
const PersonnelInformation = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(profile);
  return (
    <div className=" m-auto flex flex-row md:flex-col justify-around p-5 items-center">
      <form className="w-1/2">
        <div>
          <div className="w-full flex -mx-3 sm:flex-col">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                First name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="John"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Last name
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="text"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="Smith"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Email
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3 sm:flex-col">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                />
              </div>
            </div>
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                New Password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="Number" className="text-xs font-semibold px-1">
                Number
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="number"
                  name="Number"
                  id="Number"
                  className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="0000000"
                />
              </div>
            </div>
          </div>

          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                Update NOW
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className=" w-96 h-96 md:w-48 md:h-48  sm:w-24 sm:h-24 relative">
        <img
          src={url}
          alt="..."
          className="shadow rounded-full object-cover  w-full h-full border-none "
        />

        <label
          htmlFor="image"
          className=" absolute bottom-10   left-[calc(50%-35px) flex flex-col items-center bg-info rounded-md text-white  py-1  w-[25%]"
        >
          <p className="text-xs sm:truncate sm:w-0 sm:h-0"> Upload image</p>
          <i className="fa-solid fa-upload"></i>
        </label>

        <input
          hidden
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            setFile(e.target.files[0]);
            setUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
    </div>
  );
};

export default PersonnelInformation;
