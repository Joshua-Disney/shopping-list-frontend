import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import thingReducer from "./thingReducer";
import loginReducer from "./loginReducer";
import listReducer from "./listReducer";
export default combineReducers({
  listReducer,
  accountReducer,
  thingReducer,
  loginReducer
});
