import {getAddressListSaga} from "../saga";
import {runSaga} from "redux-saga";
import * as api from "../api";
import {getAddressListRequest, getAddressListSuccess} from "../actions";


describe("addressSaga", () => {

    api.getAddresses = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });


    it("getAddressListSaga", async () => {
        api.getAddresses.mockImplementation(() => {
            return { addresses: ['test1', 'test2', 'test3']}
        });
        const dispatchedActions = []

        await runSaga({
            dispatch: (action) => {
                dispatchedActions.push(action)
            }
        }, getAddressListSaga, getAddressListRequest()).toPromise();

        expect(dispatchedActions).toHaveLength(1);
        expect(dispatchedActions).toEqual([
            {type: getAddressListSuccess.toString(), payload: ['test1', 'test2', 'test3']}
        ])
    })
})