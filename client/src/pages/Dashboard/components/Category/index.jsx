import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import AddCategory from "./AddCategory";
import { getCategories } from "../../../../redux/Actions/category.action";
import CategoryItem from "../../../../shared/CategoryItem";
const Category = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    return state.categoryReducers;
  });
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <AddCategory
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
          dispatch(getCategories());
        }}
      />
      <div className=" pt-10 pl-10 flex justify-between flex-row items-center mr-20">
        <p className=" text-2xl font-medium"> Category</p>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-white bg-info hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
          <i className="text-xl fa-regular fa-square-plus"></i>
        </button>
      </div>
      <div className=" font-Roboto  mx-auto w-[90%]  px-10 py-10  flex flex-row flex-wrap justify-center">
        {categories.length > 0 &&
          categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Category;
