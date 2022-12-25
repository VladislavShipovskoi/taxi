import { createAction } from "redux-actions";

export const registrationRequest = createAction("REGISTRATION_REQUEST");
export const registrationSuccess = createAction("REGISTRATION_SUCCESS");
export const registrationFailure = createAction("REGISTRATION_FAILURE");