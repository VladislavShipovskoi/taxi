import { authenticateSuccess, authenticateFailure, logOut} from "./actions";


export const initialState = {
    isLoggedIn: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case authenticateSuccess.toString(): {
            return {...state, isLoggedIn: action.payload.success, token: action.payload.token}
        }
        case authenticateFailure.toString(): {
            return {...state, error: action.error}
        }
        case logOut.toString(): {
            return {...state, isLoggedIn: false, token: ''}
        }
        default:
            return state
    }
}