import {authenticateSaga} from "../saga";
import { authenticateRequest, authenticateSuccess} from "../actions";
import {runSaga} from "redux-saga";
import * as api from "../api";


describe("authenticationSaga", () => {

    api.signIn = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });


    it("authenticateSaga", async () => {
        api.signIn.mockImplementation(() => {
            return { success: true }
        });
        const dispatchedActions = []

        await runSaga({
            dispatch: (action) => {
                dispatchedActions.push(action)
            }
        }, authenticateSaga, authenticateRequest({email: "testLogin", password: "testPassword"})).toPromise();

        expect(dispatchedActions).toHaveLength(1);
        expect(dispatchedActions).toEqual([
            {type: authenticateSuccess.toString(), payload: {success: true}}
        ])
    })
})