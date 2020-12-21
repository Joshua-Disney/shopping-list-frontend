import axiosWithAuth from "../../components/Helpers/axiosWithAuth";
import { getAccount } from "./accountActions";

export const ADD_NEED_START = "ADD_NEED_START";
export const ADD_NEED_SUCCESS = "ADD_NEED_SUCCESS";
export const ADD_NEED_FAILURE = "ADD_NEED_FAILURE";

export const ADD_WANT_START = "ADD_WANT_START";
export const ADD_WANT_SUCCESS = "ADD_WANT_SUCCESS";
export const ADD_WANT_FAILURE = "ADD_WANT_FAILURE";

export const DELETE_NEED_START = "DELETE_NEED_START";
export const DELETE_NEED_SUCCESS = "DELETE_NEED_SUCCESS";
export const DELETE_NEED_FAILURE = "DELETE_NEED_FAILURE";

export const DELETE_WANT_START = "DELETE_WANT_START";
export const DELETE_WANT_SUCCESS = "DELETE_WANT_SUCCESS";
export const DELETE_WANT_FAILURE = "DELETE_WANT_FAILURE";

const baseUrl = process.env.REACT_APP_SERVER

export const addNeed = need => async dispatch => {
  dispatch({ type: ADD_NEED_START });
  try {
    const result = await axiosWithAuth().post(
      `${baseUrl}/api/needs`,
      need
    );
    dispatch({ type: ADD_NEED_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_NEED_FAILURE, payload: error });
  }
};

export const addWant = want => async dispatch => {
  dispatch({ type: ADD_WANT_START });
  try {
    const result = await axiosWithAuth().post(
      `${baseUrl}/api/wants`,
      want
    );
    dispatch({ type: ADD_WANT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_WANT_FAILURE, payload: error });
  }
};

export const deleteNeed = id => async dispatch => {
  // export const deleteNeed = (profile_id, need_id) => async dispatch => {
  dispatch({ type: DELETE_NEED_START });
  try {
    const result = await axiosWithAuth().delete(
      `${baseUrl}/api/needs/${id}`
    );
    dispatch({
      type: DELETE_NEED_SUCCESS,
      payload: result.data
      // profile_id,
      // need_id
    });
    getAccount(localStorage.getItem("account_id"))(dispatch);
  } catch (error) {
    dispatch({ type: DELETE_NEED_FAILURE, payload: error });
  }
};

export const deleteWant = id => async dispatch => {
  dispatch({ type: DELETE_WANT_START });
  try {
    const result = await axiosWithAuth().delete(
      `${baseUrl}/api/wants/${id}`
    );
    dispatch({ type: DELETE_WANT_SUCCESS, payload: result.data });
    getAccount(localStorage.getItem("account_id"))(dispatch);
  } catch (error) {
    dispatch({ type: DELETE_WANT_FAILURE, payload: error });
  }
};
