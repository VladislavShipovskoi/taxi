import React from "react";
import Map from "../index";
import {renderWithProviders} from "../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";


describe("Map", () => {
    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Map />
            </Router>
        )
    });
});