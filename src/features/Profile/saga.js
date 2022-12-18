import {takeEvery, call, put} from "redux-saga/effects"
import {getCardInfo, updateCardInfo} from "./api";
import {
    getCardInfoFailure,
    getCardInfoRequest,
    getCardInfoSuccess,
    updateCardInfoFailure,
    updateCardInfoRequest,
    updateCardInfoSuccess
} from "./actions";

export function* updateCardSaga(action) {
    const { cardNumber, expiryDate, cardName, cvc } = action.payload;
    const auth = JSON.parse(localStorage.getItem("auth"));
    const success = yield call(
        updateCardInfo,
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        auth && auth.auth ? auth.auth.token : ''
    );
    if (success) {
        yield put(updateCardInfoSuccess(action.payload));
    } else {
        yield put(updateCardInfoFailure());
    }
}

export function* getCardSaga() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const response = yield call(getCardInfo, auth && auth.auth ? auth.auth.token : '');
    if (response.id) {
        yield put(
            getCardInfoSuccess(response)
        );
    } else {
        yield put(
            getCardInfoFailure(response)
        );
    }
}

export function* cardInfoSaga() {
    yield takeEvery(getCardInfoRequest.toString(), getCardSaga);
    yield takeEvery(updateCardInfoRequest.toString(), updateCardSaga);
}