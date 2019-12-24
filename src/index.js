import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./redux/reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development" && true) {
  middlewares.push(logger);
}
const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
