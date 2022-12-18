import {store} from "./store/store";

export const loadState = () => {
    const serializedState = localStorage.getItem('auth');
    if (serializedState) {
        return JSON.parse(serializedState);
    } else {
        return undefined
    }
}

export const saveState = () => {
    localStorage.setItem('auth', JSON.stringify({'auth': store.getState().auth}))
}