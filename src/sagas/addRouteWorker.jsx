import { requestRoutes } from "../api/api";
import {
  GET_ROUTES,
  GET_ERROR,
  SEND_REQUEST,
} from "../actions/action-get-route";
import { call, put, takeEvery } from "redux-saga/effects";
import { coordinates } from "../utils/var";
import { useSelector } from "react-redux";

function* addRouteWorker(action) {
  try {
    const data = yield call(requestRoutes, action.data);

    yield put({ type: GET_ROUTES, data: data.routes[0].geometry });
  } catch {
    yield put({ type: GET_ERROR });
  }
}
export function* getRouteWatcher() {
  yield takeEvery(SEND_REQUEST, addRouteWorker);
}
