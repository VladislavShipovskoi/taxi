import reducer, {initialState} from '../reducer';
import {getCardInfoFailure, getCardInfoSuccess, updateCardInfoFailure, updateCardInfoSuccess} from "../actions";


describe("Profile Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });


    describe("getCardInfo", () => {
        it('should handle GET_CARD_INFO_SUCCESS', () => {
            const getCardInfoSuccessAction = {
                type: getCardInfoSuccess.toString(),
                payload: {
                    cardName: "123",
                    cardNumber: "123",
                    expiryDate: "10/22",
                    cvc: "123",
                }
            };
            expect(reducer({}, getCardInfoSuccessAction)).toEqual({
                isRequested: true,
                isSuccess: true,
                cardInfo: {
                    cardName: "123",
                    cardNumber: "123",
                    expiryDate: "10/22",
                    cvc: "123",
                }
            });
        });

        it('should handle GET_CARD_INFO_FAILURE', () => {
            const getCardInfoFailureAction = {
                type: getCardInfoFailure.toString(),
                error: 'test error'
            };
            expect(reducer({}, getCardInfoFailureAction)).toEqual({
                isRequested: true,
                isSuccess: false ,
                error: 'test error'
            });
        });
    })

    describe("updateCardInfo", () => {
        it('should handle UPDATE_CARD_INFO_SUCCESS', () => {
            const updateCardInfoSuccessAction = {
                type: updateCardInfoSuccess.toString(),
                payload: {
                    cardName: "123",
                    cardNumber: "123",
                    expiryDate: "10/22",
                    cvc: "123",
                }
            };
            expect(reducer({}, updateCardInfoSuccessAction)).toEqual({
                cardInfo: {
                    cardName: "123",
                    cardNumber: "123",
                    expiryDate: "10/22",
                    cvc: "123",
                }
            });
        });

        it('should handle UPDATE_CARD_INFO_FAILURE', () => {
            const updateCardInfoFailureAction = {
                type: updateCardInfoFailure.toString(),
                error: 'test error'
            };
            expect(reducer({}, updateCardInfoFailureAction)).toEqual({
                error: 'test error'
            });
        });
    })
});