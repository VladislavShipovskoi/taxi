import reducer, {initialState} from '../reducer';
import {authenticateSuccess, logOut} from "../actions";


describe("Auth Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle AUTHENTICATE_SUCCESS', () => {
        const loginAction = {
            type: authenticateSuccess.toString(),
            payload: {
                success: true
            }
        };
        expect(reducer({}, loginAction)).toEqual({
            isLoggedIn: true
        });
    });

    it('should handle LOG_OUT', () => {
        const loginAction = {
            type: logOut.toString()
        };
        expect(reducer({}, loginAction)).toEqual({
            isLoggedIn: false,
            token: "",
        });
    });
});