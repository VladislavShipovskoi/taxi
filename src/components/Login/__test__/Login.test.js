import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {AuthContext, AuthProvider} from "../../authContext"
import Login from "../index";


describe("Login", () => {

    it('renders correctly', () => {
        render(<Login  logIn={jest.fn()} onNavigate={jest.fn()}/>);
    });

    it('correct form', () => {
        render(<Login  logIn={jest.fn()} onNavigate={jest.fn()}/>);
        const inputEmail = screen.getByLabelText(/^email/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const logInButton = screen.getByRole("button", {name: "Войти"});
        expect(inputEmail).toBeInTheDocument();
        expect(inputPassword).toBeInTheDocument();
        expect(logInButton).toBeInTheDocument();
    });

    it('work correctly', () => {
        let isLoggedIn;
        let logIn;

        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        isLoggedIn = value.isLoggedIn
                        logIn = value.logIn
                        return <Login  logIn={logIn} isLoggedIn={isLoggedIn} onNavigate={jest.fn()}/>
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );
        const inputEmail = screen.getByLabelText(/^email/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const logInButton = screen.getByRole("button", {name: "Войти"});
        expect(isLoggedIn).toBe(false)
        fireEvent.change(inputEmail, { target: { value: "email@test.com" } })
        fireEvent.change(inputPassword, { target: { value: "test" } })
        fireEvent.click(logInButton)
        expect(isLoggedIn).toBe(true)
    });

    it('work incorrectly', () => {
        let isLoggedIn;
        let logIn;

        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        isLoggedIn = value.isLoggedIn
                        logIn = value.logIn
                        return <Login  logIn={logIn} isLoggedIn={isLoggedIn} onNavigate={jest.fn()}/>
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );
        const inputEmail = screen.getByLabelText(/^email/i)
        const inputPassword = screen.getByLabelText(/^password/i)
        const logInButton = screen.getByRole("button", {name: "Войти"});
        expect(isLoggedIn).toBe(false)
        fireEvent.change(inputEmail, { target: { value: "email@test.com" } })
        fireEvent.change(inputPassword, { target: { value: "test123" } })
        fireEvent.click(logInButton)
        expect(isLoggedIn).toBe(false)
    });

});