import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import {authMiddleware} from "./middlewares/authMiddleware";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import React from "react";


export function renderWithProviders(
    ui,
    {
        store = configureStore({
            reducer: rootReducer,
            middleware: [authMiddleware],
        }), ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}