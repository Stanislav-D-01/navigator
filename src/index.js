import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals.js";
import { rootReducer } from "./reducers/index";
import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { getRouteWatcher } from "./sagas/addRouteWorker";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(getRouteWatcher);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
