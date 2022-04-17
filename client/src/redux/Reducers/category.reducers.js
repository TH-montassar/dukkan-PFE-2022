import {
  ADD_CATEGORY,
  CATEGORY_ERROR,
  CATEGORY_LOADING,
  GET_CATEGORIES,
  GET_CATEGORY,
} from "../Constants/action";
const initialState = {
  categories: [],
  category: null,
  isLoading: false,
  error: {},
};
const CategoryReducers = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        /* Assigning the payload to the categories state. */
        categories: payload,
        isLoading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,

        category: payload,
        isLoading: false,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        categories: [],
        category: null,
        error: payload,
      };

    default:
      return state;
  }
};
export default CategoryReducers;
