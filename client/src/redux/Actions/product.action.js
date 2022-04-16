import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  ADD_PRODUCT,
} from "../Constants/action";

export const addProduct = (data) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const res = await axios.post("/api/products/product", data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
