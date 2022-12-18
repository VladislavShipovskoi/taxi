import React from "react";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {renderWithProviders} from "../../../testUtils";
import Order from "../index";


describe('Order', () => {

    it('render Order correctly', () => {
        const history = createMemoryHistory();

        renderWithProviders(
            <Router location={history.location} navigator={history}>
                <Order addressList={['1', '2']} />
            </Router>
        )
    })
})