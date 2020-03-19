import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE
  // DELETE_NEED_SUCCESS
} from "../actions";

const initialState = {
  isGetting: false,
  account: {},
  message: "",
  error: null
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_START:
      return {
        ...state,
        isGetting: true,
        message: "",
        error: null
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        isGetting: false,
        account: action.payload,
        error: null
      };
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        isGetting: false,
        message: action.payload.message,
        error: action.payload.error
      };
    // case DELETE_NEED_SUCCESS:
    //   const foundProfile = state.account.profiles.find(
    //     profile => profile.id == action.profile_id
    //   );
    //   // const foundNeedIndex = foundProfile.needs.findIndex(
    //   //   need => need.id == action.need_id
    //   // );
    //   // delete foundProfile.needs[foundNeedIndex]
    //   const newAccount = {
    //     ...state.account,
    //     profiles: [...state.account.profiles]
    //   };
    //   return {
    //     ...state,
    //     error: null
    //   };
    default:
      return state;
  }
};

export default accountReducer;
