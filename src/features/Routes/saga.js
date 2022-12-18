import {takeEvery, call, put} from "redux-saga/effects"
import { getRouteRequest, getRouteSuccess } from "./actions";
import { getRoute } from "./api";

export function* getRouteSaga(action) {
    const { from, to } = action.payload;
    const result = yield call(getRoute, from, to);
    if (result) {
        yield put(getRouteSuccess(result));
    }
}

export function* routeSaga() {
    yield takeEvery(getRouteRequest.toString(), getRouteSaga);
}