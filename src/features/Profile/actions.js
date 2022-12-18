import { createAction } from "redux-actions";

export const getCardInfoRequest = createAction("GET_CARD_INFO_REQUEST");
export const getCardInfoSuccess = createAction("GET_CARD_INFO_SUCCESS");
export const getCardInfoFailure = createAction("GET_CARD_INFO_FAILURE");

export const updateCardInfoRequest = createAction("UPDATE_CARD_INFO_REQUEST");
export const updateCardInfoSuccess = createAction("UPDATE_CARD_INFO_SUCCESS");
export const updateCardInfoFailure = createAction("UPDATE_CARD_INFO_FAILURE");

