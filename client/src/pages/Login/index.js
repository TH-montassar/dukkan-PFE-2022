import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import homeImg from "../../assets/image/homeimg.png";
import logo from "../../assets/logo/Dukkan.png";
import { Link, Navigate, NavLink } from "react-router-dom";
import google from "../../assets/icon/icons8-google.svg";
import { login } from "../../redux/Actions/auth.action";
import Spinner from "../../shared/Spinner";
const Login = () => {
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const onInputChange = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const OnSubmitForm = (e) => {
    e.preventDefault(); //man5alouch navigateur ya3mel relode
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  

  };

  const { isLoading, isAuthenticated,user } = useSelector((state) => {
    return state.authReducers;
  });


  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="px-10">
      <img className="max-w-[13rem]" src={logo} alt="dukkan" />
      <div className="flex flex-row justify-between md:flex-col items-center gap-3">
        <div className="w-[50%] flex flex-col justify-center	items-center gap-5">
          <div className="flex flex-row justify-center	items-center sm:flex-auto pb-12 font-cairo text-5xl md:text-3xl sm:text-2xl">
            <Link to="/login" className="">
              <hr className="border-0 bg-Primary h-[2px] " />
              <p className=" text-Primary  pr-5 ">Sign in</p>
            </Link>
            <Link to="/register">
              <hr className="border-0 bg-gray text-gray-500 h-[2px]" />
              <p className="text-gray">Sign up</p>
            </Link>
          </div>
          <form
            onSubmit={(e) => OnSubmitForm(e)}
            className="flex flex-col gap-5 justify-center	items-center w-full"
          >
            <div className="relative  w-[55%]   ">
              <input
                className=" outline-none focus:border-Primary pl-5 border-2 rounded-full border-gray h-[3rem]  sm:h-5  w-full "
                onChange={(e) => onInputChange(e)}
                value={Form.email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="email"
                required
              />
              <i className="z-[100] absolute text-2xl sm:text-sm text-Primary fa-regular fa-envelope right-5 top-[calc(50%-15px)]" />
            </div>
            <div className="relative  w-[55%]  ">
              <input
                className=" outline-none focus:border-Primary pl-5  border-2 border-gray rounded-full h-[3rem]  sm:h-5  w-full "
                onChange={(e) => onInputChange(e)}
                value={Form.password}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />
              <i className="absolute text-2xl sm:text-sm text-Primary fa-solid fa-lock right-5 top-[calc(50%-15px)]" />
            </div>

            <button
              type="submit"
              className="bg-info hover:bg-Primary text-white py-3 px-16 rounded-xl font-Montserrat font-semibold max-w-[70%] mt-5"
            >
              SIGN IN
            </button>
          </form>
          <Link to="#" className="text-danger">
            Forget Password ?
          </Link>
          <p>
            you don't have an account,{" "}
            <Link to="/register" className="text-info">
              create now
            </Link>
          </p>
          <div className="flex items-center ">
            <div className="w-36  h-[0.1rem] bg-gray"></div>
            <p>or</p>
            <div className="w-36  h-[0.1rem] bg-gray"></div>
          </div>
          <button
            type="button"
            className="bg-white hover:bg-Primary hover:text-white text-black py-1 sm:py-0 px-16 sm:px-1 font-Montserrat font-semibold max-w-[70%] mt-5 flex flex-row gap-2 items-center border border-gray rounded-xl sm:text-[0.5rem]"
          >
            <img src={google} alt="dd" />
            Continue with google
          </button>
        </div>
        <img className="w-[50%]" src={homeImg} alt="anons" />
      </div>
    </section>
  );
};

export default Login;
