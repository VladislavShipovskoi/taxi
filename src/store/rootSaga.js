import { fork } from 'redux-saga/effects';
import {authenticationSaga} from "../features/Auth/saga";
import {registrationSaga} from "../features/Registration/saga";
import {addressSaga} from "../features/Address/saga";
import {routeSaga} from "../features/Routes/saga";
import {cardInfoSaga} from "../features/Profile/saga";

export function* rootSaga() {
    yield fork(authenticationSaga);
    yield fork(registrationSaga);
    yield fork(addressSaga);
    yield fork(routeSaga);
    yield fork(cardInfoSaga);
}