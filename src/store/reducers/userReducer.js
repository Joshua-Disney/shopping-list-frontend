import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../actions";

const initialState = {
  isGetting: false,
  isCreating: false,
  isDeleting: false,
  users: [],
  messge: "",
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return {
        ...state,
        isGetting: true,
        message: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isGetting: false,
        users: action.payload.users,
        message: action.payload.message,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isGetting: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    case CREATE_USER_START:
      return { ...state, isCreating: true, error: null };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isCreating: false,
        users: action.payload.users,
        message: action.payload.message,
        error: null,
      };
    case CREATE_USER_FAILURE:
      return {
        ...state,
        isCreating: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    case DELETE_USER_START:
      return {
        ...state,
        isDeleting: true,
        message: "",
        error: null,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        message: action.payload,
        error: null,
      };
    case DELETE_USER_FAILURE:
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

export default userReducer;
