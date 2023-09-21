import { SET_LOGIN_DATA } from "../actions/loginAction";

function loginReducer(state = { ifLogedin: false }, action) {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return { ...state, ifLogedin: action.payload };
    default:
      return state;
  }
}

export default loginReducer;
