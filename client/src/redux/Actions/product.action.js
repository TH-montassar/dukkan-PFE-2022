import axios from "axios";
import {
  GET_PRODUCTS,
  GET_PRODUCT,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from "../Constants/action";

export const getProducts = (queries) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });

  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }

  console.log("form product action  " + queryString);

  try {
    const res = await axios.get(`/api/products/me${queryString}`, {});
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
export const getProductsByStore = (id,queries) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });

  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }

  console.log("form product action  " + queryString);

  try {
    const res = await axios.get(`/api/products/${id}/products${queryString}`, {});
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
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

export const deleteProduct = (idProduct) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/products//${idProduct}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};

export const updateProduct = (id, data) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  try {
    const res = await axios.put(`/api/products/${id}/update`, data, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: err,
    });
  }
};
