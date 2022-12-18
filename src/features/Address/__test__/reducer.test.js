import reducer, {initialState} from '../reducer';
import {getAddressListFailure, getAddressListSuccess} from "../actions";


describe("Address Reducer", () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_ADDRESSES_SUCCESS', () => {
        const getAddressesSuccessAction = {
            type: getAddressListSuccess.toString(),
            payload: {
                addresses: ['test1','test2','test2'],
            }
        };
        expect(reducer({}, getAddressesSuccessAction)).toEqual({
            isRequested: true,
            isSuccess: true,
            addressList: {
                addresses: ['test1','test2','test2']
            }
        });
    });

    it('should handle GET_ADDRESSES_FAILURE', () => {
        const getAddressesFailureAction = {
            type: getAddressListFailure.toString(),
            error: 'test error'
        };
        expect(reducer({}, getAddressesFailureAction)).toEqual({
            isRequested: true,
            isSuccess: false ,
            error: 'test error'
        });
    });
});