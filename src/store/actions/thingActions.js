import axios from "axios";

export const FETCH_THING_START = "FETCH_THING_START";
export const FETCH_THING_SUCCESS = "FETCH_THING_SUCCESS";
export const FETCH_THING_FAILURE = "FETCH_THING_FAILURE";

export const getThing = () => async dispatch => {
  dispatch({ type: FETCH_THING_START });
  try {
    const result = axios.get("https://website.com");
    dispatch({ type: FETCH_THING_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: FETCH_THING_FAILURE, payload: error });
  }
};
