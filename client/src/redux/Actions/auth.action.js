import axios from "axios";
import {
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_LOADING,
  LOGIN,
  REGISTER,
  LOGOUT,
} from "../Constants/action";
import { setAuthToken } from "../../utils/setAuthToken";
export const authCheck = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });

  if (localStorage.getItem("token")) {
    setAuthToken(localStorage.getItem("token"));
  }
  try {
    const res = await axios.get("/api/auth/check");
    dispatch({
      type: AUTH_CHECK,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};
export const login = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  try {
    const res = await axios.post("/api/auth/login", data, {
      headers: { "Content-Type": "application/json" },
    });

    setAuthToken(res.data.token);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};
export const register = (queries,data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }
  console.log("form product action  " + queryString);
  try {
    const res = await axios.post(`/api/auth/register${queryString}`, data, {
      header: { "Content-Type": "application/json" },
    });
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
    
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  dispatch({
    type: LOGOUT,
  });
};
