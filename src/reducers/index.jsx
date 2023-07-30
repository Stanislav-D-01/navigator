import { combineReducers } from "redux";
import { reducerGetRoute } from "./reducer-get-route.jsx";

export const rootReducer = combineReducers({
  route: reducerGetRoute,
});
