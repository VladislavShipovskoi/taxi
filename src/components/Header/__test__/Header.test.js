import React from "react";
import {render, screen} from "@testing-library/react";
import Header from "../index";


describe('test', () => {

    it('render Header correctly', () => {
        render(<Header currentPage={"map"} onNavigate={() => {}} isLoggedIn={false} logOut={() => {}} />);
    })

    it('should have all links', () => {
        render(<Header  currentPage={"map"} onNavigate={() => {}} isLoggedIn={false} logOut={() => {}}/>);
        const mapLink = screen.getByText("Карта");
        const profileLink = screen.getByText("Профиль");
        const logInLink = screen.getByText("Войти");

        expect(mapLink).toBeInTheDocument();
        expect(profileLink).toBeInTheDocument();
        expect(logInLink).toBeInTheDocument();
    })

    it('should display logout link if isLoggedIn is true', () => {
        render(<Header  currentPage={"map"} onNavigate={() => {}} isLoggedIn={true} logOut={() => {}}/>);
        const logOutLink = screen.getByText("Выйти");
        expect(logOutLink).toBeInTheDocument();
    })
})