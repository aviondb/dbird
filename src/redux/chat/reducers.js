import actionTypes from "./types";

const initialState = {
  user: {},
  msgs: [],
  ready: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      console.log(action);
      return {
        ...state,
        user: { ...action.payload },
      };
    case actionTypes.WRITE_MSG:
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    case actionTypes.GET_MSGS:
      return {
        ...state,
        msgs: [...state.msgs, ...action.payload],
        ready: true,
      };
    default:
      return state;
  }
};
