import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   store.dispatch(authcheck());

  //   window.addEventListener("storage", () => {
  //     if (!localStorage.token) store.dispatch(logout());
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="*" element={<ErrorPage />}></Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
