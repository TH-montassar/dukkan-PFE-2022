import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import { addProduct } from "../../../../redux/Actions/product.action";

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [file, setFile] = useState(null);
  const [Form, setForm] = useState({
    title: "",
    price: "",
    countInStock: "",
    reference: "",
    category: "",
    isPromotion: false,
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
    product.append("category", Form.category);
    product.append("isPromotion", Form.isPromotion);
    product.append("reference", Form.reference);
    product.append("description", Form.description);
    product.append("image", file);

    dispatch(addProduct(product));

    setUrl("");
    setFile(null);
    setForm({
      ...Form,
      title: "",
      price: "",
      countInStock: "",
      reference: "",
      category: "",
      isPromotion: false,
      description: "",
    });
    navigate("#");
  };
  return (
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
            <div className="mb-3 xl:w-96">
              <select
                className="  w-[45%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat      border border-solid border-gray-300  rounded   transition     ease-in-out   m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 outline-none"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
          <input type="checkbox" name="isPromotion" id="isPromotion" />
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
