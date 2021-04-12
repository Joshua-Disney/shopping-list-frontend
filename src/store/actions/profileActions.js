import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

import { getAccount } from "./index";

const baseUrl = `${process.env.REACT_APP_SERVER}/api/profiles`;

export const CREATE_PROFILE_START = "CREATE_PROFILE_START";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";

export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAILURE = "EDIT_PROFILE_FAILURE";

export const DELETE_PROFILE_START = "DELETE_PROFILE_START";
export const DELETE_PROFILE_SUCCESS = "DELETE_PROFILE_SUCCESS";
export const DELETE_PROFILE_FAILURE = "DELETE_PROFILE_FAILURE";

export const createProfile = (newProfile) => async (dispatch) => {
  dispatch({ type: CREATE_PROFILE_START });
  try {
    const result = await axiosWithAuth().post(`${baseUrl}`, newProfile);
    dispatch({ type: CREATE_PROFILE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_FAILURE, payload: error });
  }
};

export const editProfile = (editedProfile, id) => async (dispatch) => {
  dispatch({ type: EDIT_PROFILE_START });
  try {
    const result = await axiosWithAuth().put(`${baseUrl}/${id}`, {
      name: editedProfile,
    });
    dispatch({ type: EDIT_PROFILE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: EDIT_PROFILE_FAILURE, payload: error });
  }
  getAccount(localStorage.getItem("account_id"))(dispatch);
};

export const deleteProfile = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PROFILE_START });
  try {
    const result = await axiosWithAuth().delete(`${baseUrl}/${id}`);
    dispatch({ type: DELETE_PROFILE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_PROFILE_FAILURE, payload: error });
  }
};
