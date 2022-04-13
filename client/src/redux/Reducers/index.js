import { combineReducers } from "redux";
import adminReducers from "./admin.reducers";
import authReducers from "./auth.reducers";
export default combineReducers({
  adminReducers,
  authReducers,
});
