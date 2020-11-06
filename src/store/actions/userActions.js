import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const getUsers = (accountId) => async (dispatch) => {
  dispatch({ type: GET_USERS_START });
  try {
    const result = await axiosWithAuth().get(
      `https://disneys-shopping-list-backend.herokuapp.com/api/users/${accountId}`
    );
    dispatch({ type: GET_USERS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_USERS_FAILURE, payload: error });
  }
};

export const createUser = (newUser) => async (dispatch) => {
  dispatch({ type: CREATE_USER_START });
  try {
    const result = await axiosWithAuth().post(
      `https://disneys-shopping-list-backend.herokuapp.com/api/users`,
      newUser
    );
    dispatch({ type: CREATE_USER_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CREATE_USER_FAILURE, payload: error });
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: DELETE_USER_START });
  try {
    // TODO: return updated user array
    const result = await axiosWithAuth().delete(
      `https://disneys-shopping-list-backend.herokuapp.com/api/users/${userId}`
    );
    dispatch({ type: DELETE_USER_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error });
  }
};
