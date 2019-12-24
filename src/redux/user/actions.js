import actionTypes from "./types";

export const login = payload => dispatch => {
  dispatch({
    type: actionTypes.LOGIN,
    payload: payload
  });
};

export const logout = payload => dispatch => {
  dispatch({
    type: actionTypes.LOGOUT,
    payload: payload
  });
};
