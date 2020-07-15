import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT_START,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  WELCOME_BACK,
} from "../actions";

const initialState = {
  isRegistering: false,
  isLoggingOut: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isRegistered: false,
  account_id: "",
  message: "",
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        message: "",
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        isRegistered: true,
        message: action.payload.message,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        message: "",
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        account_id: action.payload.account_id,
        message: action.payload.message,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        message: action.payload.message,
        error: action.payload,
      };
    case LOG_OUT_START:
      return {
        ...state,
        isLoggingOut: true,
        error: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        account_id: "",
        message: action.payload,
        error: null,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        message: action.payload,
        error: null,
      };
    case WELCOME_BACK:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
