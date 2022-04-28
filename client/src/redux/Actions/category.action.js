import { instance } from "../../apis/api.instance";
import {
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  GET_CATEGORIES,
} from "../Constants/action";

export const getCategories = (queries) => async (dispatch) => {
  dispatch({
    type: CATEGORY_LOADING,
  });
  /* This is to create a query string for the url. */
  let queryString = "?";
  for (const key in queries) {
    queryString += key + "=" + queries[key] + "&";
    //* ? limit =8
  }
  try {
    const res = await instance.get(`/api/products/categories${queryString}`);

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
