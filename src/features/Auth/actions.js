import { createAction } from "redux-actions";

export const authenticateRequest = createAction("AUTHENTICATE_REQUEST")
export const authenticateSuccess = createAction("AUTHENTICATE_SUCCESS");
export const authenticateFailure = createAction("AUTHENTICATE_FAILURE");

export const logOut = createAction("LOG_OUT");
