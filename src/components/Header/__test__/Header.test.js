import React from "react";
import {screen} from "@testing-library/react";
import Header from "../index";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {renderWithProviders} from "../../../testUtils";


describe('Header', () => {

    it('render Header correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Header />
            </Router>
        )
    })

    it('should have all links', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Header />
            </Router>
        )

        const mapLink = screen.getByText("Карта");
        const profileLink = screen.getByText("Профиль");
        const logInLink = screen.getByText("Выйти");

        expect(mapLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(logInLink).toBeInTheDocument();
    })
})