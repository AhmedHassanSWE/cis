import {
  GET_USER_DATA,
  LOGOUT,
  UPDATE_USER_DATA,
  USER_LOGIN,
} from "../actions/types";

const initialState = {
  user: {},
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        user: action.payload,
        userCourses: action.payload?.myCourses,
      };
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: action.payload?.data,
      };
    case LOGOUT:
      return {
        ...state,
        user: [],
      };

    default:
      return state;
  }
};

export default brandsReducer;
