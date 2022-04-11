import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logoAdmin from "../../../assets/logo/logoAdmin.png";
import { login } from "../../../redux/Actions/admin.action";
const Login = () => {
  const dispatch = useDispatch();
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });

  /**
   * When the input changes, prevent the default action, set the form to the current form plus the
   * new input, and log the form.
   */
  const onInputChange = (e) => {
    e.preventDefault();
    setForm({ ...Form, [e.target.name]: e.target.value });
    console.log(Form);
  };
  const OnSubmitForm = (e) => {
    e.preventDefault();
    dispatch(login(Form));
    setForm({
      email: "",
      password: "",
    });
  };

  const { isLoading, isAuthenticated } = useSelector((state) => {
    return state.adminReducers;
  });
  if (isAuthenticated) {
    return <Navigate to={"/admin/"} />;
  }

  return (
    <section className="h-screen  bg-Info flex items-center font-sans	">
      <form
        onSubmit={(e) => OnSubmitForm(e)}
        className="  shadow-md py-24 rounded-3xl	gap-4 bg-white w-96 flex items-center justify-center flex-col ml-auto mr-auto"
      >
        <div className="relative w-64  ">
          <img
            className="absolute bottom-2  left-12 "
            src={logoAdmin}
            alt="Admin"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-Montserrat font-semibold ">
            Email
          </label>
          <input
            onChange={(e) => onInputChange(e)}
            value={Form.email}
            className="rounded-lg w-72 h-10 shadow-md pl-4 outline-none	focus:outline-Primary"
            placeholder="admin@exmple.com"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-Montserrat font-semibold">
            Password
          </label>
          <input
            onChange={(e) => onInputChange(e)}
            value={Form.password}
            className="rounded-lg  w-72 h-10 shadow-md pl-4 outline-none	focus:outline-Primary"
            placeholder="***************"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-Primary hover:bg-blue-700 text-white py-3 px-12 rounded font-Montserrat font-semibold"
        >
          Sign in
        </button>
        <p className="text-Danger"> Forget password ?</p>
      </form>
    </section>
  );
};

export default Login;
