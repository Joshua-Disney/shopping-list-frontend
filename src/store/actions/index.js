import axios from "axios";
import { dispatch } from "../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/observable/range";

export const FETCH_THING_START = "FETCH_THING_START";
export const FETCH_THING_SUCCESS = "FETCH_THING_SUCCESS";
export const FETCH_THING_FAILURE = "FETCH_THING_FAILURE";

export const getThing = () => {
  dispatch({ type: FETCH_THING_START });
  axios
    .get("https://website.com")
    .then(response =>
      dispatch({ type: FETCH_THING_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: FETCH_THING_FAILURE, payload: error }));
};
