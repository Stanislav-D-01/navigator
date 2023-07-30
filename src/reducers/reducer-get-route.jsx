import {
  SEND_REQUEST,
  GET_ROUTES,
  GET_ERROR,
  ADD_ROUTES_IN_STATE,
} from "../actions/action-get-route";
import { coordinates } from "../utils/var";

const initialState = {
  router: [],
  request: false,
  loadEnd: false,
  error: false,
  selRouter: coordinates[0],
};

export const reducerGetRoute = (state = initialState, action) => {
  switch (action.type) {
    case SEND_REQUEST: {
      return { ...state, request: false, selRouter: action.data };
    }
    case GET_ROUTES: {
      return { ...state, request: false, router: action.data, loadEnd: true };
    }
    case GET_ERROR: {
      return { ...state, error: true };
    }
    case ADD_ROUTES_IN_STATE: {
      return { ...state, selRouter: action.data };
    }
    default:
      return state;
  }
};
