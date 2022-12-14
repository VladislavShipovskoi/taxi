import React from "react";
import { render, screen } from "@testing-library/react";
import Registration from "../index";


describe("Registration", () => {

    it('renders correctly', () => {
        render(<Registration  logIn={jest.fn()} onNavigate={jest.fn()}/>);
    });

    it('correct form', () => {
        render(<Registration  logIn={jest.fn()} onNavigate={jest.fn()}/>);

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