import React from "react";
import {fireEvent, screen} from "@testing-library/react";
import Registration from "../index";
import {createMemoryHistory} from "history";
import {renderWithProviders} from "../../../testUtils";
import {Router} from "react-router-dom";
import * as api from "../../../features/Registration/api";


describe("Registration", () => {

    api.signUp = jest.fn();

    beforeEach(() => {
        jest.resetAllMocks();
    });

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

    it('registration through api', async () => {
        api.signUp.mockImplementation(() => {
            return { success: true, token: "test" }
        });

        const history = createMemoryHistory();

        const { store } = renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Registration  onSubmit={jest.fn()} />
            </Router>
        )

        const inputEmail = screen.getByLabelText("Email")
        const inputName = screen.getByLabelText("Name")
        const inputSurname = screen.getByLabelText("Surname")
        const inputPassword = screen.getByLabelText("Password")
        const registerButton = screen.getByRole("button", {name: "Зарегистрироваться"});

        expect(store.getState().auth.isLoggedIn).toBe(false)

        fireEvent.change(inputEmail, { target: { value: "test@test.com" } })
        fireEvent.change(inputName, { target: { value: "name" } })
        fireEvent.change(inputSurname, { target: { value: "surname" } })
        fireEvent.change(inputPassword, { target: { value: "123123" } })
        fireEvent.click(registerButton)

        expect(api.signUp).toBeCalledWith("test@test.com", "123123", "name", "surname")
    });
});