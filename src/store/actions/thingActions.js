import axios from "axios";

export const GET_THING_START = "GET_THING_START";
export const GET_THING_SUCCESS = "GET_THING_SUCCESS";
export const GET_THING_FAILURE = "GET_THING_FAILURE";

export const getThing = () => async dispatch => {
  dispatch({ type: GET_THING_START });
  try {
    const result = await axios.get("https://website.com");
    dispatch({ type: GET_THING_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_THING_FAILURE, payload: error });
  }
};
