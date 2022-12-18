import {clearRoute, getRouteSuccess} from "./actions";
import {getAddressListFailure} from "../Address/actions";

const initialState = {
    coordinates: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case getRouteSuccess.toString():
            return {...state, coordinates: action.payload};
        case getAddressListFailure.toString():
            return {...state, error: action.error};
        case clearRoute.toString():
            return {...state, coordinates: []};
        default:
            return state;
    }
};