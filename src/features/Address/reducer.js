import { getAddressListRequest, getAddressListSuccess, getAddressListFailure} from './actions';

export const initialState = {
    isRequested: false,
    isSuccess: false,
    error: null,

    addressList: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case getAddressListRequest.toString():
            return { ...state, isRequested: false, isSuccess: false};
        case getAddressListSuccess.toString():
            return { ...state, isRequested: true, isSuccess: true, addressList: action.payload };
        case getAddressListFailure.toString():
            return { ...state, isRequested: true, isSuccess: false , error: action.error };
        default:
            return state;
    }
}