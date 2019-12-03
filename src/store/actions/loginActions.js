import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOG_OUT_START = "LOG_OUT_START";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const register = newUser => async dispatch => {
  dispatch({ type: REGISTER_START });
  try {
    const result = await axios.post(
      "https://disneys-shopping-list-backend.herokuapp.com/api/auth/register",
      newUser
    );
    dispatch({ type: REGISTER_SUCCESS, payload: result });
    console.log("register result: ", result);
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
    console.log("error: ", error);
  }
};

export const login = user => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const result = await axios.post(
      "https://disneys-shopping-list-backend.herokuapp.com/api/auth/login",
      user
    );
    console.log("login result: ", result);
    localStorage.setItem("token", result.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });
  } catch (error) {
    console.log("login error: ", error);
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOG_OUT_START });
  try {
    console.log("logging out");
    localStorage.removeItem("token");
    dispatch({ type: LOG_OUT_SUCCESS, payload: "Successfully logged out." });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOG_OUT_FAILURE, payload: "Failed to log out." });
  }
};