import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import { setAuthToken } from "./utils/setAuthToken";
import { authCheck, logout } from "./redux/Actions/auth.action";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./guards/PrivateRoutes";
import Landing from "./pages/Landing";
function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(authCheck());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className=" w-full font-sans">
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/home/:storeId" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

            <Route
              path="/dashboard/*"
              element={
                <PrivateRoutes>
                  <Dashboard />
                </PrivateRoutes>
              }
            ></Route>

            {/* <Route path="*" element={<ErrorPage />}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
