import {
  CREATE_USER_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_USER_SUCCESS,
} from "./loginAndRegister.actions.constant";

const initialState = {
  userRegisterData: null,
  loginResult: {},
  forgotDetails: null,
};

export default function loginAndRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginResult: action.payload,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        userRegisterData: action.payload,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotDetails: action.payload,
      };
    }
    default:
      return state;
  }
}
