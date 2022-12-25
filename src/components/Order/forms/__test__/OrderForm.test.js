import React from "react";
import {renderWithProviders} from "../../../../testUtils";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {OrderForm} from "../OrderForm";


describe("OrderForm", () => {

    it('renders correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <OrderForm addressList={['a', 'b', 'c', 'd']} />
            </Router>
        )
    });

    it('correct form', async () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <OrderForm onSubmit={() => jest.fn()} addressList={['a', 'b', 'c', 'd']} />
            </Router>
        )

        const inputAddressFrom = screen.getByLabelText("Откуда")
        const inputAddressTo = screen.getByLabelText("Куда")
        const orderButton = screen.getByRole("button", {name: "Заказать"});


        expect(inputAddressFrom).toBeInTheDocument();
        expect(inputAddressTo).toBeInTheDocument();
        expect(orderButton).toBeInTheDocument();
    });

    it('dispatches correct data', async () => {
        const handleSubmit = jest.fn()
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <OrderForm onSubmit={handleSubmit} addressList={['Пулково (LED)', 'Кинотеатр Аврора', 'Эрмитаж', 'Мариинский театр']} />
            </Router>
        )

        const user = userEvent.setup()

        const inputAddressFrom = screen.getByLabelText("Откуда")
        const inputAddressTo = screen.getByLabelText("Куда")
        const orderButton = screen.getByRole("button", {name: "Заказать"});


        await user.type(inputAddressFrom, 'Эр')
        const test1 = screen.getByRole("option", {name: 'Эрмитаж'})
        await user.click(test1)


        await user.type(inputAddressTo, 'Ма')
        const test2 = screen.getByRole("option", {name: 'Мариинский театр'})
        await user.click(test2)

        expect(orderButton).not.toBeDisabled();
        await user.click(orderButton)

        await waitFor(() => {//
            expect(handleSubmit).toHaveBeenCalledWith({
                fromAddress: "Эрмитаж",
                toAddress: "Мариинский театр",
            })
        })
    });
});