import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store/reducers";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import React from "react";
import {sagaMiddleware} from "./store/store";


export function renderWithProviders(
    ui,
    {
        store = configureStore({
            reducer: rootReducer,
            middleware: [sagaMiddleware],
        }), ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}