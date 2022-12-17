import {AUTHENTICATE, login} from '../actions/authActions'
import {serverLogin} from "../api";


export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const {email, password} = action.payload
        const success = await serverLogin(email, password)
        if (success) {
            store.dispatch(login())
        }
    } else  {
        next(action)
    }
}