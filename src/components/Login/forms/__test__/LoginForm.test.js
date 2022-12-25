import React from "react";
import {renderWithProviders} from "../../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {LoginForm} from "../LoginForm";
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'


describe("LoginForm", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <LoginForm />
            </Router>
        )
    });

    it('correct form', async () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <LoginForm onSubmit={() => jest.fn()} />
            </Router>
        )

        const inputEmail = screen.getByLabelText("Email")
        const inputPassword = screen.getByLabelText("Password")
        const logInButton = screen.getByRole("button", {name: "Войти"});


        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(logInButton).toBeInTheDocument();
    });

    it('dispatches correct data', async () => {
        const handleSubmit = jest.fn()
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <LoginForm onSubmit={handleSubmit} />
            </Router>
        )

        const user = userEvent.setup()

        await user.type(screen.getByLabelText("Email"), 'test@test.com')
        await user.type(screen.getByLabelText("Password"), '123123')
        await user.click(screen.getByTestId("login-button"))

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                email: "test@test.com",
                password: "123123"
            })
        })
    });
});