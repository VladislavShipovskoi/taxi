import React from "react";
import {screen} from "@testing-library/react";
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

    it('correct form', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Profile />
            </Router>
        )

        const name = screen.getByLabelText(/^Имя владельца/i)
        const cardNumber = screen.getByLabelText(/^Номер Карты/i)
        const cardDate = screen.getByLabelText("MM/YY")
        const cvc = screen.getByLabelText(/^CVC/i)
        const saveButton = screen.getByRole("button", {name: "Сохранить"});

        expect(name).toBeInTheDocument();
        expect(cardNumber).toBeInTheDocument();
        expect(cardDate).toBeInTheDocument();
        expect(cvc).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
    });
});