import axios from "axios";
import {
  GET_STORES,
  GET_STORE,
  STORE_ERROR,
  STORE_LOADING,
  UPDATE_PRODUCT,
} from "../Constants/action";

export const getStoreWithProduct = (queries) => async (dispatch) => {
  dispatch({
    type: STORE_LOADING,
  });

  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }

  console.log("form  get store  action  " + queryString);

  try {
    const res = await axios.get(`/api/store${queryString}`);
    dispatch({
      type: GET_STORE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORE_ERROR,
      payload: err,
    });
  }
};
