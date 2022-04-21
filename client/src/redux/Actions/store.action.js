import axios from "axios";
import {
  GET_STORES,
  GET_STORE,
  STORE_ERROR,
  STORE_LOADING,
  UPDATE_PRODUCT,
} from "../Constants/action";

export const getStore = (queries) => async (dispatch) => {
  dispatch({
    type: STORE_LOADING,
  });

  try {
    const res = await axios.get(`/api/store/me`);
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
