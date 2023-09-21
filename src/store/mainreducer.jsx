import { combineReducers } from "redux";
import TotalRevenueReducer from "./eachReducer/totalRevenueReducer";
import crmReducer from "./eachReducer/crmReducer";
import ecommerceReducer from "./eachReducer/ecommerceReducer";
import loginReducer from "./eachReducer/loginReducer";

const mainReducer = combineReducers({
  TotalRevenueReducer,
  crmReducer,
  ecommerceReducer,
  loginReducer,
});
export default mainReducer;
