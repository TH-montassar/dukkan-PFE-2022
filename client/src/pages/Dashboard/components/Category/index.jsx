import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const { categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <div className="">
      <div className=" pt-10 pl-10 flex justify-between flex-row items-center mr-20">
        <p className=" text-2xl font-medium"> Category</p>
        <button
          type="button"
          onClick={(e) => {
            openModal(e);
          }}
          className="text-white bg-info hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          <i className="text-xl fa-regular fa-square-plus"></i>
        </button>
      </div>
      <div className=" font-Roboto  mx-auto w-[90%]  px-10 py-10 rounded-lg flex flex-row flex-wrap justify-center">
        {categories.length > 0 &&
          categories.map((category) => {
            return (
              <div
                key={category._id}
                className="flex flex-col items-center transition  ease-in-out duration-500 hover:rounded-lg hover:scale-110 bg-white w-1/5 h-max"
              >
                <img
                  className="object-contain"
                  src={category.image}
                  alt={category.slug}
                />
                <p className="h-1/2"> {category.title}</p>
              </div>
            );
          })}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Category;
