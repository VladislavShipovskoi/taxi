import {takeEvery, call, put} from "redux-saga/effects"
import {authenticateRequest, authenticateSuccess, authenticateFailure} from "./actions";
import {signIn} from "./api";


export function* authenticateSaga(action) {
    const {email, password} = action.payload;
    const response = yield call(signIn, email, password)
    if (response.success) {
        yield put(authenticateSuccess(response))
    } else {
        yield put(authenticateFailure(response))
    }
}

export function* authenticationSaga() {
    yield takeEvery(authenticateRequest.toString(), authenticateSaga)
}
