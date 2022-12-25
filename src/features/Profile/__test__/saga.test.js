import {getCardSaga, updateCardSaga} from "../saga";
import {runSaga} from "redux-saga";
import * as api from "../api";
import {getCardInfoRequest, getCardInfoSuccess, updateCardInfoRequest, updateCardInfoSuccess} from "../actions";


describe("Profile Saga", () => {

    api.getCardInfo = jest.fn();
    api.updateCardInfo = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });


    it("getCardSaga", async () => {
        api.getCardInfo.mockImplementation(() => {
            return { cardName: '', id: 'testId' }
        });
        const dispatchedActions = []

        await runSaga({
            dispatch: (action) => {
                dispatchedActions.push(action)
            }
        }, getCardSaga, getCardInfoRequest()).toPromise();

        expect(dispatchedActions).toHaveLength(1);
        expect(dispatchedActions).toEqual([
            {type: getCardInfoSuccess.toString(), payload: { cardName: '', id: 'testId' }}
        ])
    })

    it("updateCardSaga", async () => {
        api.updateCardInfo.mockImplementation(() => {
            return { success: true }
        });
        const dispatchedActions = []

        await runSaga({
            dispatch: (action) => {
                dispatchedActions.push(action)
            }
        }, updateCardSaga, updateCardInfoRequest({ cardName: 'testName', cardNumber: 'cardNumber', expiryDate: '10/25', cvc: '000' })).toPromise();

        expect(dispatchedActions).toHaveLength(1);
        expect(dispatchedActions).toEqual([
            {type: updateCardInfoSuccess.toString(), payload: { cardName: 'testName', cardNumber: 'cardNumber', expiryDate: '10/25', cvc: '000' }}
        ])
    })
})