import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

const baseUrl =
  "https://disneys-shopping-list-backend.herokuapp.com/api/profiles";

const localUrl = "http://localstorage:8000/api/profiles";

export const CREATE_PROFILE_START = "CREATE_PROFILE_START";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILURE = "CREATE_PROFILE_FAILURE";

export const createProfile = (newProfile) => async (dispatch) => {
  dispatch({ type: CREATE_PROFILE_START });
  try {
    const result = await axiosWithAuth().post(`${baseUrl}`, newProfile);
    // const result = await axiosWithAuth().post(`${localUrl}`, newProfile);
    dispatch({ type: CREATE_PROFILE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_FAILURE, payload: error });
  }
};
