import { createAction } from 'redux-actions';

export const getAddressListRequest = createAction('GET_ADDRESSES_REQUEST');
export const getAddressListSuccess = createAction('GET_ADDRESSES_SUCCESS');
export const getAddressListFailure = createAction('GET_ADDRESSES_FAILURE');