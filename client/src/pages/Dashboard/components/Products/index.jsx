import React, { Fragment, useState } from "react";
import { Combobox, Transition, Dialog } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../../shared/Spinner";
import productImag from "../../../../assets/image/product.png";
import { deleteProduct } from "../../../../redux/Actions/product.action";
const Product = () => {
  const { isLoading, categories } = useSelector((state) => {
    return state.categoryReducers;
  });
  const [selected, setSelected] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const filteredCategories =
    query === ""
      ? categories
      : categories.filter((category) =>
          category.title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const dispatch = useDispatch();

  const { store } = useSelector((state) => {
    return state.storeReducers;
  });

  const handlerClickdelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };

  // let [isOpen, setIsOpen] = useState(true);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  // function openModal() {
  //   setIsOpen(true);
  // }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="font-Roboto">
      <div className="flex flex-row justify-between items-center px-10 py-11  ">
        <p>Products</p>
        <div className="w-56">
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
              <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                <Combobox.Input
                  className="w-full border-none  focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 "
                  displayValue={(category) => category.title}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <SelectorIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredCategories.length === 0 && query !== "" ? (
                    <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredCategories.map((category) => (
                      <Combobox.Option
                        key={category._id}
                        className={({ active }) =>
                          `cursor-default select-none relative py-2 pl-10 pr-4 ${
                            active ? "text-white bg-info" : "text-gray-900"
                          }`
                        }
                        value={category}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {category.title}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-teal-600"
                                }`}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
      </div>

      <div className="pt-10 w-[94%] m-auto">
        <div className="flex flex-row justify-between font-semibold">
          <p className="pr-6">Product details </p> <p>Category</p> <p>Price</p>
          <p>Stock </p> <p>Reference</p> <p>Promotion </p> <p>Rate</p>
          <p>Action</p>
        </div>
        <hr className=" text-gray" />
        <div className="py-4 w-full flex flex-col justify-center pt-10 gap-5 ">
          {store.map(
            (s) =>
              s.products?.length > 0 &&
              s.products?.map((product) => {
                return (
                  <div className="  w-full rounded-lg bg-white  max-h-20  flex flex-row  items-center shadow-md	py-2 px-2">
                    <div className=" flex flex-row items-center gap-3 w-[20%]">
                      {/* <img
                className=" h-full object-contain rounded-md"
                src={productImag}
                alt="fhfh"
              /> */}
                      <div className="w-full">
                        <p>{product.title}</p>
                        <p className="truncate w-full">{product.description}</p>
                      </div>
                    </div>
                    <div className="w-full flex flex-row justify-between ">
                      <div> category</div>
                      <div>{product.price} TND</div>
                      <div>{product.countInStock}</div>
                      <div>{product.reference}</div>
                      <div>
                        {product?.isPromotion ? (
                          <div> yes</div>
                        ) : (
                          <div> no </div>
                        )}
                      </div>
                      <ul className="flex justify-center">
                        <li>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            className="w-4 text-yellow-500 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            className="w-4 text-yellow-500 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="star"
                            className="w-4 text-yellow-500 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="star"
                            className="w-4 text-yellow-500 mr-1"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="star"
                            className="w-4 text-yellow-500"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              fill="currentColor"
                              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
                            ></path>
                          </svg>
                        </li>
                      </ul>
                      <div className="flex flex-row gap-2">
                        
                          <div>
                            <button
                            //  onClick={openModal}
                              type="button"
                              className="bg-white border-2 py-1 px-2 hover:bg-info hover:text-white text-Success"
                            >
                              <i className="fa-solid fa-pen-to-square "></i>
                            </button>

                            


                            
                          </div>
                        
                        <button
                          type="button"
                          onClick={(e) => handlerClickdelete(e, product._id)}
                          className="bg-white border-2 py-1 px-2 hover:bg-info hover:text-white text-danger"
                        >
                          <i className="fa-solid fa-trash "></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
