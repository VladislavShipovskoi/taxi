import {signUpSaga} from "../saga";
import {runSaga} from "redux-saga";
import * as api from "../api";
import {registrationRequest, registrationSuccess} from "../actions";
import {authenticateSuccess} from "../../Auth/actions";


describe("Registration Saga", () => {

    api.signUp = jest.fn();
    beforeEach(() => {
        jest.resetAllMocks();
    });


    it("signUp", async () => {
        api.signUp.mockImplementation(() => {
            return { success: true, token: 'auth_token' }
        });
        const dispatchedActions = []

        await runSaga({
            dispatch: (action) => {
                dispatchedActions.push(action)
            }
        }, signUpSaga, registrationRequest({ email: 'test@test.com', name: 'testName', surname: 'testSurname', password: 'testPassword' })).toPromise();

        expect(dispatchedActions).toHaveLength(2);
        expect(dispatchedActions).toEqual([
            {type: registrationSuccess.toString(), payload: { success: true, token: 'auth_token' }},
            {type: authenticateSuccess.toString(), payload: { success: true, token: 'auth_token' }},
        ])
    })
})