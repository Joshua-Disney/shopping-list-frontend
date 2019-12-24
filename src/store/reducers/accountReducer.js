import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE
} from "../actions";

const initialState = {
  isGetting: false,
  account: {},
  message: "",
  error: null
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_START:
      return {
        ...state,
        isGetting: true,
        message: "",
        error: null
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isGetting: false,
        account: action.payload,
        error: null
      };
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        isGetting: false,
        message: action.payload.message,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default accountReducer;
