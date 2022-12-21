import React from "react";
import {renderWithProviders} from "../../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {RegistrationForm} from "../RegistrationForm";


describe("RegistrationForm", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <RegistrationForm />
            </Router>
        )
    });

    it('correct form', async () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <RegistrationForm onSubmit={() => jest.fn()} />
            </Router>
        )

        const inputEmail = screen.getByLabelText("Email")
        const inputName = screen.getByLabelText("Name")
        const inputSurname = screen.getByLabelText("Surname")
        const inputPassword = screen.getByLabelText("Password")
        const registerButton = screen.getByRole("button", {name: "Зарегистрироваться"});

        expect(inputEmail).toBeInTheDocument();
        expect(inputName).toBeInTheDocument();
        expect(inputSurname).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(registerButton).toBeInTheDocument();
    });

    it('dispatches correct data', async () => {
        const handleSubmit = jest.fn()
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <RegistrationForm onSubmit={handleSubmit} />
            </Router>
        )

        const user = userEvent.setup()

        await user.type(screen.getByLabelText("Email"), 'test@test.com')
        await user.type(screen.getByLabelText("Name"), 'Name')
        await user.type(screen.getByLabelText("Surname"), 'Surname')
        await user.type(screen.getByLabelText("Password"), '123123')
        await user.click(screen.getByRole("button", {name: "Зарегистрироваться"}))

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                email: "test@test.com",
                name: "Name",
                surname: "Surname",
                password: "123123",
            })
        })
    });
});