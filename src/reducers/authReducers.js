import {
  SET_CURRENT_USER,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  isLoggedIn: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
