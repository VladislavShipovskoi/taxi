import {
    getCardInfoRequest,
    getCardInfoSuccess,
    getCardInfoFailure,
    updateCardInfoSuccess,
    updateCardInfoFailure
} from './actions';

export const initialState = {
    isRequested: false,
    isSuccess: false,
    error: null,

    cardInfo: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case getCardInfoRequest.toString():
            return { ...state, isRequested: false, isSuccess: false};
        case getCardInfoSuccess.toString():
            return { ...state, isRequested: true, isSuccess: true, cardInfo: {
                    cardNumber: action.payload.cardNumber,
                    expiryDate: action.payload.expiryDate,
                    cardName: action.payload.cardName,
                    cvc: action.payload.cvc,
                }};
        case getCardInfoFailure.toString():
            return { ...state, isRequested: true, isSuccess: false, error: action.error };
        case updateCardInfoSuccess.toString():
            return {
                ...state,
                cardInfo: {
                    cardNumber: action.payload.cardNumber,
                    expiryDate: action.payload.expiryDate,
                    cardName: action.payload.cardName,
                    cvc: action.payload.cvc,
                }
            }
        case updateCardInfoFailure.toString():
            return {...state, error: action.error };
        default:
            return state;
    }
}