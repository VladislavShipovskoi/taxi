import React from "react";
import { screen } from "@testing-library/react";
import Registration from "../index";
import {createMemoryHistory} from "history";
import {renderWithProviders} from "../../../testUtils";
import {Router} from "react-router-dom";


describe("Registration", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Registration />
            </Router>
        )
    });

    it('correct form', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Registration />
            </Router>
        )

        const inputEmail = screen.getByLabelText(/^email/i)
        const inputName = screen.getByLabelText(/^name/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const registerButton = screen.getByRole("button", {name: "Зарегистрироваться"});

        expect(inputEmail).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();
    });
});