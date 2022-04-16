import { combineReducers } from "redux";
import adminReducers from "./admin.reducers";
import authReducers from "./auth.reducers";
import productReducers from "./product.reducers";
export default combineReducers({
  adminReducers,
  authReducers,
  productReducers,
});
