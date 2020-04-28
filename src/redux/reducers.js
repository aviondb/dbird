import { combineReducers } from "redux";
import user from "./user/reducers";
import chat from "./chat/reducers";

export default combineReducers({
  user,
  chat,
});
