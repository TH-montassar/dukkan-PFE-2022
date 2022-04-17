import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import { addProduct } from "../../../../redux/Actions/product.action";
import { getCategories } from "../../../../redux/Actions/category.action";
import Spinner from "../../../../shared/Spinner";
const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { isLoading, categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.title
  );

  const [Promotion, setPromotion] = useState(false);
  console.log(Promotion);

  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [Form, setForm] = useState({
    title: "",
    price: "",
    countInStock: "",
    reference: "",
    category: "",

    description: "",
  });
  const onInputChange = (e) => {
    e.preventDefault();

    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    const product = new FormData();
    product.append("title", Form.title);
    product.append("price", Form.price);
    product.append("countInStock", Form.countInStock);
    product.append("category", selectedCategory._id);
    product.append("isPromotion", Promotion);
    product.append("reference", Form.reference);
    product.append("description", Form.description);
    product.append("image", file);

    dispatch(addProduct(product));
    setPromotion(false);
    setUrl("");
    setFile(null);
    setForm({
      ...Form,
      title: "",
      price: "",
      countInStock: "",
      reference: "",
      category: "",

      description: "",
    });
    navigate("#");
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <form
      onSubmit={(e) => onSubmitForm(e)}
      className="font-Roboto shadow-xl border border-1 border-black mx-auto w-[80%] mt-32 px-10 py-10  flex flex-row overflow-y-auto"
    >
      <div className="flex flex-col gap-7 w-1/2">
        <div className="flex flex-col gap-2 w-[80%]">
          <label className="" htmlFor="title">
            Product Name
          </label>
          <input
            className="outline-none border focus:border-Primary px-2 py-2 rounded-lg"
            onChange={(e) => onInputChange(e)}
            value={Form.title}
            type="text"
            name="title"
            id="title"
            placeholder="Product Name"
            required
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-[45%]">
            <label htmlFor="price">Price</label>
            <input
              className="outline-none border focus:border-Primary px-2 py-2 rounded-lg"
              onChange={(e) => onInputChange(e)}
              value={Form.price}
              type="number"
              name="price"
              id="price"
              placeholder="0000 TND"
              required
            />
          </div>
          <div className="flex flex-col w-[45%]">
            <label htmlFor="countInStock">Count in stock</label>
            <input
              className="outline-none border focus:border-Primary px-2 py-2 rounded-lg"
              onChange={(e) => onInputChange(e)}
              value={Form.countInStock}
              type="number"
              name="countInStock"
              id="countInStock"
              placeholder="0"
              required
            />
          </div>
        </div>
        <div className="flex flex-row justify-between  w-full">
          <div className="flex  flex-col justify-center w-[45%]">
            <label htmlFor="category">Category</label>
            {/* <div className="mb-3 xl:w-96">
              <select
                className="  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat      border border-solid border-gray-300  rounded   transition     ease-in-out   m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 outline-none"
                aria-label="Default select example"
              >
                <option selected>{selectedPerson.name}</option>
                {people.map((person) => (
                  <option value={person.id}> {person.name}</option>
                ))}
              </select>
            </div> */}
            <div className="w-full ">
              <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative border w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="block truncate">
                      {selectedCategory?.title}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {categories.map((category, categoryIdx) => (
                        <Listbox.Option
                          key={categoryIdx}
                          className={({ active }) =>
                            `cursor-default select-none relative py-2 pl-10 pr-4 ${
                              active
                                ? "text-amber-100 bg-info"
                                : "text-gray-900"
                            }`
                          }
                          value={category}
                        >
                          {({ selectedCategory }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selectedCategory
                                    ? "font-medium"
                                    : "font-normal"
                                }`}
                              >
                                {category?.title}
                              </span>
                              {selectedCategory ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div className="flex flex-col w-[45%]">
            <label htmlFor="reference">Reference</label>
            <input
              className="outline-none border focus:border-Primary px-2 py-2 rounded-lg"
              onChange={(e) => onInputChange(e)}
              value={Form.reference}
              type="text"
              name="reference"
              id="reference"
              placeholder="ref"
              required
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <label htmlFor="isPromotion">Promotion</label>
          <input
            onChange={(e) => setPromotion(e.target.checked)}
            type="checkbox"
            name="isPromotion"
            id="isPromotion"
          />
        </div>

        <div>
          <label className="" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={(e) => onInputChange(e)}
            value={Form.description}
            name="description"
            className=" form-control block w-full px-3    rounded-lg   py-1.5       text-base       font-normal        text-gray-700       bg-white bg-clip-padding      border border-solid border-gray-300  transition        ease-in-out    m-0       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none  "
            id="description"
            rows="3"
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 pl-5">
        <h3>Product image</h3>
        <div className="">
          <label
            htmlFor="image"
            className="flex flex-col items-center bg-info rounded-md text-white px-10 py-1 max-w-max"
          >
            <p> Upload image</p>
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
          <img className=" max-w-sm mt-5 rounded-lg drop-shadow-lg" src={url} />
        </div>
        <div className="flex justify-end mt-auto">
          <button
            type="submit"
            className="bg-info hover:bg-Primary text-white py-3  rounded-xl font-Montserrat font-semibold px-5"
          >
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
