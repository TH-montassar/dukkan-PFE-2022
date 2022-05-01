import React, { useEffect } from "react";
import logo from "../../assets/logo/logostore.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import imagePro from "../../assets/image/irene-kredenets-KStSiM1UvPw-unsplash.jpg";
import profile1 from "../../assets/image/p1.jpg";
import profile2 from "../../assets/image/p2.jpg";
import profile3 from "../../assets/image/p3.jpg";
import { parseISO, format } from "date-fns";
import { getProduct } from "../../redux/Actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import YouMayAlsoLike from "../../shared/YouMayAlsoLike";
import Spinner from "../../shared/Spinner";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { addToCart } from "../../redux/Actions/cart.action";
const ProductDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProduct(slug));
  }, [slug]);

  const { isLoading, product } = useSelector((state) => {
    return state.productReducers;
  });

  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  const closeToast = () => {
    toast("added product successfully", { autoClose: 1500 });
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
      <section className="py-20 w-full">
        <div className="text-inherit"> Home/Category/cars/mercedes</div>
        <Link to="/">
          <img
            className="max-w-lg mx-auto pb-10"
            src={logo}
            alt="montaProduct"
          />
        </Link>

        {/* Product details */}

        <div className="flex gap-7 justify-center w-[90%]">
          <div className="w-1/2 h-max">
            <img
              className="object-cover  w-full h-full rounded-sm pb-4"
              src={product?.image}
              alt="car"
            />
          </div>
          <div className="">
            <div className="flex justify-between">
              <h1 className=" text-2xl font-semibold">Title{product?.title}</h1>

              <ul className="flex justify-center drop-shadow-lg">
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
            </div>

            <div className="pl-7  pt-7">
              <div>
                <div className="text-xl font-semibold pt-5"> Color :</div>
                <div className="flex gap-5 pt-5 pl-5">
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-slate-900 border border-Primary "></div>
                  <div className=" min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-white border border-Primary "></div>
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-black border border-Primary "></div>
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-gray-400 border border-Primary "></div>
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-red-400 border border-Primary "></div>
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-blue-900 border border-Primary "></div>
                  <div className="min-w-[1.75rem] min-h-[1.75rem] rounded-full bg-red-700 border border-Primary "></div>
                </div>
              </div>
              <div className="pt-10">
                <div className="font-medium text-base pl-3 pb-5 flex flex-row justify-between">
                  <div>
                    {product?.countInStock > 0 ? (
                      <p className="text-green-700"> on stock</p>
                    ) : (
                      <p className="text-red-500"> out of stock</p>
                    )}
                  </div>
                  <div className="">price :{product?.price} TND</div>
                </div>
                <div className=" pb-2">
                  Category:
                  <span className="text-lg font-semibold">
                    {product?.category?.title}
                  </span>
                </div>

                <div className=" pb-2">
                  Added date:
                  <span className="text-lg font-semibold">
                    {/* {format(parseISO(product?.createdAt), "P")} */}
                  </span>
                </div>

                <div>
                  <div className="text-lg font-semibold pb-2"> Promotion</div>
                  {product?.isPromotion ? (
                    <div className="text-green-700"> is on promtion</div>
                  ) : (
                    <div className="text-red-500"> not on promotion </div>
                  )}
                </div>
                <div className="text-xl font-semibold">description</div>
                <div className="pl-5 w-80">{product?.description}</div>
              </div>

              <div className="py-5">
                <div className="text-gray-500	"> SHARE</div>
                <i className="fa-brands fa-facebook-f px-3 text-lg text-Primary	 "></i>
                <i className="fa-brands fa-linkedin-in px-3 text-lg text-Primary"></i>
                <i className="fa-brands fa-instagram px-3 text-lg text-Primary"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 gap-5 overflow-x-auto snap-x justify-center	snap-mandatory py-16">
          {/* //*---------------------review--------------------------------------------------------------------------------------------------- */}
          {product?.reviews?.length > 0 &&
            product.reviews.map((review) => {
              return (
                <div className="min-w-[20rem]	h-44 bg-white  flex items-start	gap-3 rounded border border-sky-400	p-5 snap-center drop-shadow-lg">
                  <img
                    className="object-cover	 w-16 h-16   border border-Primary  rounded-full"
                    src={profile2}
                    alt="imgProfile"
                  />

                  <div className="font-sans w-48 ">
                    <div className="text-2xl">foule fouleni</div>
                    <div className="whitespace-normal pt-5">
                      {review?.comment}
                      {review?.rating}
                    </div>
                  </div>
                </div>
              );
            })}
          {/* //*------------------------------------------------------------------------------------------------------------------------ */}
        </div>
        <div className="flex  border  items-center border-cyan-500 mx-auto max-w-max rounded shadow-2xl mt-32 max-h-24 px-10 py-[3.5rem] max-w-max">
          <div className="flex max-w-xl items-center">
            <div className="text-xl">Order Summary</div>
            <div className="w-24 max-h">
              <img
                className="object-cover w-full h-full rounded-lg"
                src={product?.image}
                alt="car"
              />
            </div>
            <div className="w-1/4">
              <div className="text-xl font-semibold"> {product?.title}</div>
              <div className="truncate "> {product?.description}</div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <div className="rounded-full w-5 h-5  bg-Warning flex">-</div>
            <div className=" border border-neutral-400 px-10">01</div>
            <div className="rounded-full w-5 h-5 bg-Success">+</div>
          </div>
          <div>200000$</div>

          <button
            onClick={() => {
              if (isAuthenticated) {
                dispatch(
                  addToCart({
                    product: product._id,
                    price: product.price,
                    quantity: 1,
                  })
                );
              } else {
                navigate("/login");
                //  <ToastContainer autoClose={1000} />;
              }
              closeToast();
            }}
            type="button"
            className="bg-info hover:bg-infoDark text-white font-bold py-2 px-4 rounded-full"
          >
            add to Cart
          </button>
          <ToastContainer autoClose={1000} />
        </div>
        <div className="w-max mx-auto pt-24"> YOU MAY ALSO LIKE</div>

        {/* <YouMayAlsoLike/> */}
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
