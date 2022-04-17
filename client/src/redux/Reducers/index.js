import { combineReducers } from "redux";
import adminReducers from "./admin.reducers";
import authReducers from "./auth.reducers";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
export default combineReducers({
  adminReducers,
  authReducers,
  productReducers,
  categoryReducers,
});
