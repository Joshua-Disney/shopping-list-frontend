import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./App";
import rootReducer from "./store/reducers";

import './main.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
