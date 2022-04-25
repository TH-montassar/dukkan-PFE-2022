import React, { useState, Fragment, useEffect, useRef } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../shared/Header";
import direction from "../../assets/icon/directionA.svg";
import directionB from "../../assets/icon/directionB.svg";
import productImg from "../../assets/image/imgProduct.svg";
import { getCategories } from "../../redux/Actions/category.action";
import Spinner from "../../shared/Spinner";
import { getProductsByStore } from "../../redux/Actions/product.action";
import vdAbout from "../../assets/video/cars.mp4";
import ReactPlayer from "react-player";
import Footer from "../../shared/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    console.log("id", id);
  }, []);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const { isLoading, categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  useEffect(() => {
    dispatch(getProductsByStore(id));
  }, [id]);
  const { products } = useSelector((state) => {
    return state.productReducers;
  });
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="bg-wavee bg-no-repeat">
      <Header />
      <section className="pt-20 font-Roboto w-full">
        <div className="flex flex-row items-center justify-center pt-28 px-5">
          <img className="max-w-[4rem] " src={directionB} alt="direction" />
          <div className="flex flex-row justify-around gap-10 px-5 items-center">
            <div className="w-1/2">
              <img className=" rounded-lg max-w-lg " src={productImg} alt="" />
            </div>
            <div className="w-1/2 flex flex-col gap-10 justify-center text-white">
              <h1 className="text-2xl font-semibold"> name Product</h1>
              <p className="max-w-xl sm:w-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                at perferendis molestias necessitatibus molestiae fugit eligendi
                in cum omnis quidem. Fugit vel voluptatem totam repellendus quo
                quas recusandae maxime culpa.10
              </p>
              <button className="bg-white self-end  hover:bg-slate-300	 text-info  font-bold py-3 px-8 rounded-full max-w-max ">
                Discover Now
              </button>
            </div>
          </div>
          <img className="max-w-[4rem]" src={direction} alt="direction" />
        </div>
        <div className="justify-center pt-20  flex flex-col items-center w-full">
          <h1 className="text-2xl font-medium pb-5">Our Top Categories</h1>
          <div className="flex flex-row items-center justify-center gap-5 flex-wrap  w-full ">
            {categories.map((category) => (
              <div
                key={category._id}
                className="flex flex-col items-center transition  ease-in-out duration-500 hover:rounded-lg hover:scale-110 bg-white"
              >
                <img
                  className="max-w-[15rem] h-1/2 "
                  src={category.image}
                  alt={category.slug}
                />
                <p className="h-1/2"> {category.title}</p>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-medium pb-5 pt-28">Popular Product</h1>
          <div className="flex flex-1 gap-12 overflow-x-auto snap-x	snap-mandatory pt-4 pl-10 pb-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="h-80 max-w-[15rem] sm:max-w-[19rem] sm:h-40 relative shadow-2xl rounded-2xl snap-center"
              >
                <button
                  type="button"
                  className="left-1 top-1 absolute bg-white rounded-full  w-5 h-5 flex justify-center items-center hover:bg-Primary hover:text-white"
                >
                  <i className="fa-regular fa-heart "></i>
                </button>

                <Link to={`/details/${product.slug}`}>
                  <img
                    className="rounded-t-2xl h-2/3 ease-in-out w-full object-cover"
                    src={product.image}
                    alt={product.slug}
                  />
                </Link>

                <div className="grid grid-rows-2 grid-flow-col  h-1/3 w-full  pb-2 px-2 items-center">
                  <h1 className=" truncate ">{product.title}</h1>

                  <div className="truncate">{product.price} TND</div>
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

                  <button className="bg-info   mt-auto hover:bg-Primary text-white font-bold py-2 px-4 rounded-full">
                    add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-2xl font-medium pb-5 pt-10">New Product</h1>
          <div className="flex flex-1 gap-12 overflow-x-auto snap-x	snap-mandatory pt-4 pl-10 pb-10">
            {products.map((product) => (
              <div
                key={product._id}
                className="h-80 max-w-[15rem] sm:max-w-[19rem] sm:h-40 relative shadow-2xl rounded-2xl snap-center"
              >
                <button
                  type="button"
                  className="left-1 top-1 absolute bg-white rounded-full  w-5 h-5 flex justify-center items-center hover:bg-Primary hover:text-white"
                >
                  <i className="fa-regular fa-heart "></i>
                </button>

                <Link to={`/details/${product.slug}`}>
                  <img
                    className="rounded-t-2xl h-2/3 ease-in-out w-full object-cover"
                    src={product.image}
                    alt={product.slug}
                  />
                </Link>

                <div className="grid grid-rows-2 grid-flow-col  h-1/3 w-full  pb-2 px-2 items-center">
                  <h1 className=" truncate ">{product.title}</h1>

                  <div className="truncate">{product.price} TND</div>
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

                  <button className="bg-info   mt-auto hover:bg-Primary text-white font-bold py-2 px-4 rounded-full">
                    add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex justify-center items-center flex-col">
          <h2 className="pt-8 text-3xl">About us</h2>
          <div className="flex gap-20 items-center pb-10 pl-10 flex-wrap">
            <ReactPlayer
              className="react-player fixed-bottom max-w-lg"
              url={vdAbout}
              controls={true}
            />

            <div className="max-w-xl flex flex-col ">
              <h1 className="pb-10 text-xl	 font-semibold	"> about us</h1>
              <p>
                ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus, maxime delectus. Officia porro maxime perferendis
                hic dolorum. Ut facilis quasi iure recusandae ducimus ipsum
                reiciendis velit minima ipsa. Nihil voluptas blanditiis dolores
                quos, voluptates voluptatem ab eaque, molestiae, consectetur sit
                laudantium exercitationem! Consequuntur soluta, odio doloremque
                voluptatem eligendi dolor.
              </p>
              <button className="bg-info self-end  hover:bg-Primary	 text-white  font-bold py-3 px-8 rounded-full max-w-max ">
                Discover Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
