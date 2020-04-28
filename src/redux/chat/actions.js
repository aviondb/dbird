import actionTypes from "./types";
import aviondb from "../../utils/aviondb";

export const writeMessage = (payload) => async (dispatch) => {
  let db = await aviondb;
  var msgs = await db.initCollection("chat1-test");
  await msgs.insertOne(payload);
  dispatch({
    type: actionTypes.WRITE_MSG,
    payload: payload,
  });
};

export const getMessages = (payload) => async (dispatch) => {
  let db = await aviondb;
  var msgs = await db.initCollection("chat1-test");
  let res = await msgs.find({});
  dispatch({
    type: actionTypes.GET_MSGS,
    payload: res,
  });
};

export const addUser = (payload) => (dispatch) => {
  dispatch({
    type: actionTypes.ADD_USER,
    payload: payload,
  });
};
