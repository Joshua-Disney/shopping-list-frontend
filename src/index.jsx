import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import rootReducer from "./store/reducers";

import "./index.css";

const store = createStore(
  rootReducer, // This is the most basic reducer. A function that returns an object. Replace it.
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
