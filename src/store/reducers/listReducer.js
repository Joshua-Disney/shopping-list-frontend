import {
  ADD_NEED_START,
  ADD_NEED_SUCCESS,
  ADD_NEED_FAILURE,
  ADD_WANT_START,
  ADD_WANT_SUCCESS,
  ADD_WANT_FAILURE
} from "../actions";

const initialState = {
  isAdding: false,
  message: "",
  error: null
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEED_START:
      return {
        ...state,
        isAdding: true,
        error: null
      };
    case ADD_NEED_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: action.payload.message,
        error: null
      };
    case ADD_NEED_FAILURE:
      return {
        ...state,
        isAdding: false,
        message: action.payload.message,
        error: action.payload.error
      };
    case ADD_WANT_START:
      return {
        ...state,
        isAdding: true,
        error: null
      };
    case ADD_WANT_SUCCESS:
      return {
        ...state,
        isAdding: false,
        message: action.payload.message,
        error: null
      };
    case ADD_WANT_FAILURE:
      return {
        ...state,
        isAdding: false,
        message: action.payload.message,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default listReducer;
