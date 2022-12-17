import * as actions from '../../actions/authActions';
import reducer, {initialState} from '../auth';


describe("Auth Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOG_IN', () => {
        const loginAction = {
            type: actions.LOG_IN
        };
        expect(reducer({}, loginAction)).toEqual({
            isLoggedIn: true
        });
    });

    it('should handle LOG_OUT', () => {
        const loginAction = {
            type: actions.LOG_OUT
        };
        expect(reducer({}, loginAction)).toEqual({
            isLoggedIn: false
        });
    });
});