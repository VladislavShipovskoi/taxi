import {registrationFailure} from "./actions";


export const initialState = {
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case registrationFailure.toString(): {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}