import {
  GET_THING_START,
  GET_THING_SUCCESS,
  GET_THING_FAILURE
} from "../actions";

const initialState = {
  isProcessing: false,
  thing: "thing",
  things: [],
  error: null
};

const thingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THING_START:
      return {
        ...state,
        isProcessing: true,
        error: null
      };
    case GET_THING_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        things: action.payload,
        error: null
      };
    case GET_THING_FAILURE:
      return {
        ...state,
        isProcessing: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default thingReducer;
