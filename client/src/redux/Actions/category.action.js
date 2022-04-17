import axios from "axios";
import {
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  GET_CATEGORIES,
} from "../Constants/action";

export const getCategories = () => async (dispatch) => {
  dispatch({
    type: CATEGORY_LOADING,
  });
  try {
    const res = await axios.get(`/api/products/categories`);

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORY_ERROR,
      payload: err,
    });
  }
};
