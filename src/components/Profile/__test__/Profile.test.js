import React from "react";
import { render } from "@testing-library/react";
import Profile from "../index";


describe("Map", () => {

    it('renders correctly', () => {
        render(<Profile />);
    });
});