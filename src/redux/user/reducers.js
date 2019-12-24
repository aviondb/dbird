import actionTypes from "./types";

const initialState = {
  address: "0x81D03c201225C81aE1267895091cC4B3884f050a",
  balance: "100000000000000000",
  loginMethod: "Authereum",
  networkId: 4
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case actionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
