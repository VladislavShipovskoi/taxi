import rootReducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./rootSaga";
import {loadState, saveState} from "../utils";

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState: loadState(),
})

sagaMiddleware.run(rootSaga)

store.subscribe(() => saveState())