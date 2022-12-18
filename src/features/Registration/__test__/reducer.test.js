import reducer, {initialState} from '../reducer';
import {registrationFailure, registrationSuccess} from "../actions";


describe("Registration Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe("signUp", () => {
        it('should handle REGISTRATION_SUCCESS', () => {
            const registrationSuccessAction = {
                type: registrationSuccess.toString(),
                payload: {
                    email: 'test@test.com', name: 'testName', surname: 'testSurname', password: 'testPassword'
                }
            };
            expect(reducer({}, registrationSuccessAction)).toEqual({});
        });

        it('should handle REGISTRATION_FAILURE', () => {
            const registrationFailureAction = {
                type: registrationFailure.toString(),
                error: 'test error'
            };
            expect(reducer({}, registrationFailureAction)).toEqual({
                error: 'test error'
            });
        });
    })
});