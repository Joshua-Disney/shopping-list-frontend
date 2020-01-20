import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

export const CREATE_PROFILE_START = "CREATE_PROFILE_START";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";

export const createProfile = id => async dispatch => {
  dispatch({ type: CREATE_PROFILE_START });
  try {
    const result = await axiosWithAuth().post(
      `https://disneys-shopping-list-backend.herokuapp.com/api/profiles`
    );
    console.log("create profile result: ", result);
    dispatch({ type: CREATE_PROFILE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_FAILURE, payload: error });
    console.log("create profile error: ", error);
  }
};
