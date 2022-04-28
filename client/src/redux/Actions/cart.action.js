import { instance } from "../../apis/api.instance";
import {
  ADD_TO_CART,
  CART_ERROR,
  CART_LOADING,
  EMPTY_CART,
  GET_OWNED_CART,
  REMOVE_FROM_CART,
} from "../Constants/action";

export const addToCart = (itemData) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    const res = await instance.put("/api/cart/add", { item: itemData });
    dispatch({
      type: ADD_TO_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err,
    });
  }
};
export const emptyCart = () => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    await instance.put("/api/cart/empty");
    dispatch({
      type: EMPTY_CART,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err,
    });
  }
};
export const getOwnedCart = () => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    const res = await instance.get("/api/cart/me");
    dispatch({
      type: GET_OWNED_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err,
    });
  }
};

export const removeToCart = (itemId) => async (dispatch) => {
  dispatch({
    type: CART_LOADING,
  });

  try {
    const res = await instance.put("/api/cart/remove", { item: itemId });
    dispatch({
      type: REMOVE_FROM_CART,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: err,
    });
  }
};
