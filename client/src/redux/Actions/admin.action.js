import axios from "axios";
import { ADMIN_ERROR, ADMIN_LOADING, ADMIN_LOGIN } from "../Constants/action";

export const login = (data) => async (dispatch) => {
  dispatch({
    type: ADMIN_LOADING,
  });
  try {
    const res = await axios.post("/api/admin/login", data, {
      headers: { "Content-Type": "application/json" },
    });

    // setAuthToken(res.data.token)
    dispatch({
      type: ADMIN_LOGIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ADMIN_ERROR,
      payload: err,
    });
  }
};
