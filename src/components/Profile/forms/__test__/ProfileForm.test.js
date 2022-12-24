import React from "react";
import {renderWithProviders} from "../../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from "dayjs";
import {ProfileForm} from "../ProfileForm";


describe("ProfileForm", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <ProfileForm />
            </Router>
        )
    });

    it('correct form', async () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <ProfileForm onSubmit={() => jest.fn()} />
            </Router>
        )

        const inputName = screen.getByLabelText("Имя владельца")
        const inputNumber = screen.getByLabelText("Номер Карты")
        const inputDate = screen.getByLabelText("MM/YY")
        const inputCVC = screen.getByLabelText("CVC")
        const saveButton = screen.getByRole("button", {name: "Сохранить"});


        expect(inputName).toBeInTheDocument();
        expect(inputNumber).toBeInTheDocument();
        expect(inputDate).toBeInTheDocument();
        expect(inputCVC).toBeInTheDocument();
        expect(saveButton).toBeInTheDocument();
    });

    it('dispatches correct data', async () => {
        const handleSubmit = jest.fn()
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <ProfileForm onSubmit={handleSubmit} />
            </Router>
        )

        const user = userEvent.setup()

        const inputName = screen.getByLabelText("Имя владельца")
        const inputNumber = screen.getByLabelText("Номер Карты")
        const inputDate = screen.getByLabelText("MM/YY")
        const inputCVC = screen.getByLabelText("CVC")
        const saveButton = screen.getByRole("button", {name: "Сохранить"});


        await user.type(inputName, 'name')
        await user.type(inputNumber, '0000000000000000')
        await user.type(inputDate, '10/24')
        await user.type(inputCVC, '000')
        await user.click(saveButton)

        await waitFor(() => {

            const splitValues = '10/24'.split('/')
            const date = dayjs(`${splitValues[0]}-1-${splitValues[1]}`).toISOString()

            expect(handleSubmit).toHaveBeenCalledWith({
                cardName: "name",
                cardNumber: "0000000000000000",
                expiryDate: date,
                cvc: "000",
            })
        })
    });
});