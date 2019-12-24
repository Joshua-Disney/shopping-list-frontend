import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import thingReducer from "./thingReducer";
import loginReducer from "./loginReducer";
export default combineReducers({ accountReducer, thingReducer, loginReducer });
