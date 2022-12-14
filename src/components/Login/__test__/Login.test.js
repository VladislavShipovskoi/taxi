import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import Login from "../index";
import {renderWithProviders} from "../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {serverLogin} from "../../../api";


jest.mock("../../../api", () => ({serverLogin: jest.fn(() => Promise.resolve(true))}))

describe("Login", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Login />
            </Router>
        )
    });

    it('correct form', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Login />
            </Router>
        )

        const inputEmail = screen.getByLabelText(/^email/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const logInButton = screen.getByRole("button", {name: "Войти"});
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(logInButton).toBeInTheDocument();
    });

    it('work correctly', async () => {
        const history = createMemoryHistory();

        const { store } = renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Login />
            </Router>
        )

        const inputEmail = screen.getByLabelText(/^email/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const logInButton = screen.getByRole("button", {name: "Войти"});

        expect(store.getState().auth.isLoggedIn).toBe(false)

        fireEvent.change(inputEmail, { target: { value: "test@test.com" } })
        fireEvent.change(inputPassword, { target: { value: "123123" } })
        fireEvent.click(logInButton)

        expect(serverLogin).toBeCalledWith("test@test.com", "123123")
    });
});