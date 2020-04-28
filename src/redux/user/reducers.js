import actionTypes from "./types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
