import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getProducts } from "../../redux/Actions/product.action";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";
import Spinner from "../../shared/Spinner";
import { getProductsByStore } from "../../redux/Actions/product.action";
import ProductItem from "../../shared/ProductItem";
import { setStore } from "../../utils/setStore";
const Search = () => {
  setStore(localStorage.store);
  const location = useLocation();
  /* Creating a new URLSearchParams object and setting it to the variable queries. */
  const queries = new URLSearchParams(location.search);
  console.log("gg", queries);
  const dispatch = useDispatch();
  //console.log(location);

  // console.log(location.search);
  useEffect(() => {
    dispatch(
      getProductsByStore({
        q: queries.has("q") ? queries.get("q") : "",
        category: queries.has("category") ? queries.get("category") : "",
      })
    );
  }, [queries.get("q"), queries.get("category")]);

  const [Query, setQuery] = useState("");

  console.log(Query);
  const search = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    dispatch(
      getProductsByStore({
        q: Query,
      })
    );
  };

  const { isLoading, products } = useSelector((state) => {
    return state.productReducers;
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <Header />
      <section className="pb-6 pt-20">
        <div className="text-gray-400">Home/Search/Category/product</div>

        <div className="rounded-l-full mx-auto flex items-center	 relative max-w-xl justify-between border  shadow-md">
          <button
            onClick={(e) => search(e)}
            type="button"
            className="absolute left-2"
          >
            <i className="fa-solid fa-magnifying-glass  text-2xl cursor-pointer "></i>
          </button>
          <input
            className="pl-10 py-4  w-4/5 rounded-l-full outline-none "
            type="search"
            name="search"
            onChange={(e) => setQuery(e.target.value)}
            value={Query}
            id="search"
            placeholder="Searsh here...."
          />
          <div className="h-9 rounded-full bg-slate-900 border border-Primary "></div>
          <div className="flex gap-2 w-1/5  pl-2">
            <div> Stored by </div>
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>

        <div className="flex  flex-row   pl-32 items-start pt-20">
          <div className="pr-5 overflow-y-auto">
            <div className="flex justify-between items-center pr-1 pb-3">
              <div className="font-bold"> FILTERS</div>
              <div className="text-red-500 text-xs">CLEAR</div>
            </div>
            <div className="relative pt-1">
              <label htmlFor="PriceRange" className="form-label">
                Price range
              </label>
              <input
                type="range"
                className="form-range   w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none "
                id="PriceRange"
              />
            </div>
            <div>
              Category
              <div className=" flex gap-3 py-3 pl-5">
                <input
                  className="w-5 h-5  border border-Primary"
                  type="radio"
                  id="motorcycles"
                  name="drone"
                  value="motorcycles"
                  checked
                />
                <label htmlFor="motorcycles">motorcycles</label>
              </div>
              <div className=" flex gap-3 py-3 pl-5">
                <input
                  className="w-5 h-5  border border-Primary  "
                  type="radio"
                  id="bicyclet"
                  name="drone"
                  value="bicyclet"
                  checked
                />
                <label htmlFor="bicyclet">bicyclet</label>
              </div>
              <div className=" flex gap-3 py-3 pl-5">
                <input
                  className="w-5 h-5  border border-Primary  "
                  type="radio"
                  id="quad bike"
                  name="drone"
                  value="quad bike"
                  checked
                />
                <label htmlFor="quad bike">quad bike</label>
              </div>
              <div className=" flex gap-3 py-3 pl-5">
                <input
                  className="w-5 h-5  border border-Primary  "
                  type="radio"
                  id="boots"
                  name="drone"
                  value="boots"
                  checked
                />
                <label htmlFor="boots">boots</label>
              </div>
              <div className=" flex gap-3 py-3 pl-5">
                <input
                  className="w-5 h-5  border border-Primary  "
                  type="radio"
                  id="truck"
                  name="drone"
                  value="truck"
                />
                <label htmlFor="truck">truck</label>
              </div>
            </div>
          </div>
          <div className="h-screen rounded-full bg-slate-900 border border-Primary "></div>
          <div className="">
            <div className="pl-4">
              <div>21 items found</div>
              <div className="text-gray-400">
                {" "}
                showing 11 to 20 of 21 entries
              </div>
            </div>

            <div className=" grid grid-cols-4 gap-12 md:gap-4 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-4 pl-10">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex  justify-between items-baseline ml-72">
          <button className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border-gray-400 rounded shadow">
            Previous
          </button>
          <div className="flex gap-4 items-baseline">
            <div>1</div>
            <div className="bg-Primary px-2 py-1 text-white">2</div>
            <div>3</div>
            <div className="text-gray-400">4</div>
          </div>
          <button className="bg-white hover:bg-gray-100  font-semibold py-2 px-4 border-gray-400 rounded shadow">
            Next
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Search;
