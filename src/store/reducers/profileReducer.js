import {
  CREATE_PROFILE_START,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAILURE
} from "../actions";

const initialState = {
  isCreating: false,
  message: "",
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE_START:
      return {
        ...state,
        isCreating: true,
        message: "",
        error: null
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        isCreating: false,
        message: action.payload.message,
        error: null
      };
    case CREATE_PROFILE_FAILURE:
      return {
        ...state,
        isCreating: false,
        message: action.payload.message,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default profileReducer;
