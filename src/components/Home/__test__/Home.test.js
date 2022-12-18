import React from "react";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {renderWithProviders} from "../../../testUtils";
import Home from "../index";


describe('Home', () => {

    it('render Home correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Home />
            </Router>
        )
    })
})