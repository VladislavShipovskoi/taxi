import App from './App';
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {renderWithProviders} from "./testUtils";
import React from "react";


describe("App", () => {

  it('renders correctly', () => {

    const history = createMemoryHistory();

    renderWithProviders(
        <Router location={history.location} navigator={history}>
            <App />
        </Router>
      )
  });
})