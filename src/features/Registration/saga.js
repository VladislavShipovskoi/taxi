import {call, put, takeEvery} from "redux-saga/effects";
import {signUp} from "./api";
import {registrationFailure, registrationRequest, registrationSuccess} from "./actions";
import {authenticateSuccess} from "../Auth/actions";


export function* signUpSaga(action) {
    const { email, password, name, surname } = action.payload;
    const response = yield call(signUp, email, password, name, surname);
    if (response.success) {
        yield put(registrationSuccess(response));
        yield put(authenticateSuccess(response))
    } else {
        yield put(registrationFailure(response));
    }
}

export function* registrationSaga() {
    yield takeEvery(registrationRequest.toString(), signUpSaga);
}