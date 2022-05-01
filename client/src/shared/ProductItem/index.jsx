import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/Actions/cart.action";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  const closeToast = () => {
    toast("added product successfully", { autoClose: 1500 });
  };

  return (
    <div className="h-80 max-w-[15rem] sm:max-w-[19rem] sm:h-40 relative shadow-2xl rounded-2xl snap-center">
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
          className="bg-info   mt-auto hover:bg-Primary text-white font-bold py-2 px-4 rounded-full"
        >
          add to bag
        </button>
        <ToastContainer
          autoClose={1000}
          position="top-center"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default ProductItem;
