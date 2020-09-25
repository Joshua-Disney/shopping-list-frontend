import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  UPDATE_ACCOUNT_START,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
  DELETE_ACCOUNT_START,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAILURE,
} from "../actions";

const initialState = {
  isGetting: false,
  isUpdating: false,
  isDeleting: false,
  account: {},
  message: "",
  error: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_START:
      return {
        ...state,
        isGetting: true,
        message: "",
        error: null,
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isGetting: false,
        account: action.payload,
        error: null,
      };
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        isGetting: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    case UPDATE_ACCOUNT_START:
      return {
        ...state,
        isUpdating: true,
        message: "",
        error: null,
      };
    case UPDATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        message: action.payload,
        error: null,
      };
    case UPDATE_ACCOUNT_FAILURE:
      return {
        ...state,
        isUpdating: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    case DELETE_ACCOUNT_START:
      return {
        ...state,
        isDeleting: true,
        message: "",
        error: null,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        message: action.payload,
        error: null,
      };
    case DELETE_ACCOUNT_FAILURE:
      return {
        ...state,
        isDeleting: false,
        message: "",
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default accountReducer;
