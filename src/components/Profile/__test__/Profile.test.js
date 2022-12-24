import React from "react";
import {renderWithProviders} from "../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import Profile from "../index";


describe("Profile", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Profile />
            </Router>
        )
    });
});