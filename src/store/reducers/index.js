import {
  FETCH_THING_START,
  FETCH_THING_SUCCESS,
  FETCH_THING_FAILURE
} from "../actions";

const initialState = {
  isProcessing: false,
  things: [],
  error: null
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_THING_START:
      return {
        ...state,
        isProcessing: true,
        error: null
      };
    case FETCH_THING_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        things: action.payload,
        error: null
      };
    case FETCH_THING_FAILURE:
      return {
        ...state,
        isProcessing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default initialReducer;
