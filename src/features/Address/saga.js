import {put, call, takeEvery} from 'redux-saga/effects';
import {getAddressListRequest, getAddressListSuccess, getAddressListFailure} from './actions';
import {getAddresses} from './api';


export function* getAddressListSaga (action){
    const response = yield call(getAddresses, action.payload);
    if (response.addresses) {
        yield put(getAddressListSuccess(response.addresses));
    } else {
        yield put(getAddressListFailure(response.error));
    }
}

export function* addressSaga (){
    yield takeEvery(getAddressListRequest.toString(), getAddressListSaga);
}