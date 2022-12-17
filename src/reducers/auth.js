import {LOG_IN, LOG_OUT} from "../actions/authActions";


export const initialState = {
    isLoggedIn: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            return {...state, isLoggedIn: true}
        }
        case LOG_OUT: {
            return {...state, isLoggedIn: false}
        }
        default:
            return state
    }
}