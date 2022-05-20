import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../shared/Header";
import direction from "../../assets/icon/directionA.svg";
import directionB from "../../assets/icon/directionB.svg";
import productImg from "../../assets/image/imgProduct.svg";
import Spinner from "../../shared/Spinner";
import { getProductsByStore } from "../../redux/Actions/product.action";
import vdAbout from "../../assets/video/cars.mp4";
import ReactPlayer from "react-player";
import Footer from "../../shared/Footer";
import { setStore } from "../../utils/setStore";
import ProductItem from "../../shared/ProductItem";
import CategoryItem from "../../shared/CategoryItem";
import { getOwnedCart } from "../../redux/Actions/cart.action";
const Home = () => {
  const dispatch = useDispatch();
  const { storeId } = useParams();
  const navigate = useNavigate();

  if (storeId === "undefined") {
    navigate("/");
  }
  useEffect(() => {
    setStore(storeId);
  }, []);

  useEffect(() => {
    console.log("id", storeId);
  }, []);

  const { categories } = useSelector((state) => {
    return state.categoryReducers;
  });

  useEffect(() => {
    dispatch(getProductsByStore());
  }, []);
  const { products, isLoading } = useSelector((state) => {
    return state.productReducers;
  });
  const { isAuthenticated } = useSelector((state) => {
    return state.authReducers;
  });
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getOwnedCart());
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-wavee bg-no-repeat  font-Roboto">
      <Header />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="pt-20  w-full">
          <div className="flex flex-row items-center justify-center pt-28 px-5">
            <img className="max-w-[4rem] " src={directionB} alt="direction" />
            <div className="flex flex-row justify-around gap-10 px-5 items-center">
              <div className="w-1/2">
                <img
                  className=" rounded-lg max-w-lg "
                  src={productImg}
                  alt=""
                />
              </div>
              <div className="w-1/2 flex flex-col gap-10 justify-center text-white">
                <h1 className="text-2xl font-semibold"> name Product</h1>
                <p className="max-w-xl sm:w-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora at perferendis molestias necessitatibus molestiae
                  fugit eligendi in cum omnis quidem. Fugit vel voluptatem totam
                  repellendus quo quas recusandae maxime culpa.10
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
              {categories.slice(0, 4).map((category) => (
                <CategoryItem key={category._id} category={category} />
              ))}
            </div>
            <h1 className="text-2xl font-medium pb-5 pt-28">Popular Product</h1>

            <div className="flex gap-12 overflow-x-auto snap-x w-full snap-mandatory pt-4 pl-10 pb-10 justify-center">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>

            <h1 className="text-2xl font-medium pb-5 pt-10">New Product</h1>

            <div className="grid grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center  gap-12 	 pt-4 pl-10 pb-10">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
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
                  Voluptatibus, maxime delectus. Officia porro maxime
                  perferendis hic dolorum. Ut facilis quasi iure recusandae
                  ducimus ipsum reiciendis velit minima ipsa. Nihil voluptas
                  blanditiis dolores quos, voluptates voluptatem ab eaque,
                  molestiae, consectetur sit laudantium exercitationem!
                  Consequuntur soluta, odio doloremque voluptatem eligendi
                  dolor.
                </p>
                <button className="bg-info self-end  hover:bg-Primary	 text-white  font-bold py-3 px-8 rounded-full max-w-max ">
                  Discover Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
};

export default Home;
