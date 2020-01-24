import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

export const ADD_NEED_START = "ADD_NEED_START";
export const ADD_NEED_SUCCESS = "ADD_NEED_SUCCESS";
export const ADD_NEED_FAILURE = "ADD_NEED_FAILURE";

export const ADD_WANT_START = "ADD_WANT_START";
export const ADD_WANT_SUCCESS = "ADD_WANT_SUCCESS";
export const ADD_WANT_FAILURE = "ADD_WANT_FAILURE";

export const addNeed = need => async dispatch => {
  dispatch({ type: ADD_NEED_START });
  try {
    const result = await axiosWithAuth().post(
      `https://disneys-shopping-list-backend.herokuapp.com/api/needs`,
      need
    );
    console.log("add need result: ", result);
    dispatch({ type: ADD_NEED_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_NEED_FAILURE, payload: error });
    console.log("add need error: ", error);
  }
};

export const addWant = want => async dispatch => {
  dispatch({ type: ADD_WANT_START });
  try {
    const result = await axiosWithAuth().post(
      `https://disneys-shopping-list-backend.herokuapp.com/api/wants`,
      want
    );
    console.log("add want result: ", result);
    dispatch({ type: ADD_WANT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: ADD_WANT_FAILURE, payload: error });
    console.log("add want error: ", error);
  }
};
