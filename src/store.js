import rootReducer from "./reducers"
import {configureStore} from "@reduxjs/toolkit";
import {authMiddleware} from "./middlewares/authMiddleware";

const loadState = () => {
    const serializedState = localStorage.getItem('redux');
    if (serializedState) {
        return JSON.parse(serializedState);
    } else {
        return undefined
    }
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [authMiddleware],
    preloadedState: loadState(),
})

store.subscribe(()=>{
    localStorage.setItem('redux', JSON.stringify(store.getState()))
})