import React from "react";
import {ReactComponent as LoftTaxiLogo} from '../assets/loftTaxiLogo2.svg';
import '../App.css';


export const Header = (props) => {
    const { onNavigate, currentPage } = props
    return (
        <header className="header">
            <div className="">
                <LoftTaxiLogo />
            </div>
            <div className="header-links-container">
                <div className={`header-link ${currentPage === "map" && 'header-link-active'}`} onClick={() => {onNavigate("map")}}>Карта</div>
                <div className={`header-link ${currentPage === "profile" && 'header-link-active'}`} onClick={() => {onNavigate("profile")}}>Профиль</div>
                <div className={`header-link ${currentPage === "login" && 'header-link-active'}`} onClick={() => {onNavigate("login")}}>Войти</div>
            </div>
        </header>
    )
}