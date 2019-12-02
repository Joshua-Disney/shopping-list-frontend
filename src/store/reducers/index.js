import { combineReducers } from "redux";
import thingReducer from "./thingReducer";
import loginReducer from "./loginReducer";
export default combineReducers({ thingReducer, loginReducer });
