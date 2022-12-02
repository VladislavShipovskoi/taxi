import React from "react";
import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo2.svg';
import styles from './styles/index.module.css'


const Header = (props) => {
    const {onNavigate, currentPage} = props

    return (
        <header className={styles.header}>
            <LoftTaxiLogo />
            <div className={styles.headerLinksContainer}>
                <div className={`${styles.headerLink} ${currentPage === "map" && styles.headerLinkActive}`} onClick={() => {onNavigate("map")}}>Карта</div>
                <div className={`${styles.headerLink} ${currentPage === "profile" && styles.headerLinkActive}`} onClick={() => {onNavigate("profile")}}>Профиль</div>
                <div className={`${styles.headerLink} ${currentPage === "login" && styles.headerLinkActive}`} onClick={() => {onNavigate("login")}}>Войти</div>
            </div>
        </header>
    )
}

export default Header
