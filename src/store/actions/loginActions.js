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

export const WELCOME_BACK = "WELCOME_BACK";

const baseUrl = process.env.REACT_APP_SERVER

export const register = newUser => async dispatch => {
  dispatch({ type: REGISTER_START });
  try {
    const result = await axios.post(
      "${baseUrl}/api/auth/register",
      newUser
    );
    dispatch({ type: REGISTER_SUCCESS, payload: result });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const login = user => async dispatch => {
  dispatch({ type: LOGIN_START });
  try {
    const result = await axios.post(
      "${baseUrl}/api/auth/login",
      user
    );
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("account_id", result.data.account_id);
    dispatch({ type: LOGIN_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const logout = props => dispatch => {
  dispatch({ type: LOG_OUT_START });
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("account_id");
    dispatch({ type: LOG_OUT_SUCCESS, payload: "Successfully logged out." });
  } catch (error) {
    dispatch({ type: LOG_OUT_FAILURE, payload: "Failed to log out." });
  }
};

export const welcomeBack = () => dispatch => {
  dispatch({ type: WELCOME_BACK });
};
