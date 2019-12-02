import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actions";

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  message: "",
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        message: "",
        error: null
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        message: action.payload.message,
        error: null
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        message: action.payload.message,
        error: action.payload.error
      };
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        message: "",
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        message: action.payload.message,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        message: action.payload.message,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
