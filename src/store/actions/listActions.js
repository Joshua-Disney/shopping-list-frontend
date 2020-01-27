import axiosWithAuth from "../../components/Helpers/axiosWithAuth";

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

export const deleteNeed = id => async dispatch => {
  dispatch({ type: DELETE_NEED_START });
  try {
    console.log(
      `https://disneys-shopping-list-backend.herokuapp.com/api/needs/${id}`
    );
    const result = await axiosWithAuth().delete(
      `https://disneys-shopping-list-backend.herokuapp.com/api/needs/${id}`
    );
    console.log("delete need result: ", result);
    dispatch({ type: DELETE_NEED_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_NEED_FAILURE, payload: error });
    console.log("delete need error: ", error);
  }
};

export const deleteWant = id => async dispatch => {
  dispatch({ type: DELETE_WANT_START });
  try {
    const result = await axiosWithAuth().delete(
      `https://disneys-shopping-list-backend.herokuapp.com/api/wants/${id}`
    );
    console.log("delete want result: ", result);
    dispatch({ type: DELETE_WANT_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: DELETE_WANT_FAILURE, payload: error });
    console.log("delete want error: ", error);
  }
};
