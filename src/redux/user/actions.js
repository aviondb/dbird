import actionTypes from "./types";
import aviondb from "../../utils/aviondb";

export const login = (payload) => async (dispatch) => {
  let db = await aviondb;
  var users = await db.initCollection("users-dev");
  await users.insertOne({
    email: payload.email,
    password: payload.password,
  });

  dispatch({
    type: actionTypes.LOGIN,
    payload: payload,
  });
};

export const logout = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.LOGOUT,
    payload: payload,
  });
};
