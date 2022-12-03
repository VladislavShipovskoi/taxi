import React from "react";
import PropTypes from 'prop-types';

import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo2.svg';
import styles from './styles/index.module.css'


const Header = (props) => {
    const {onNavigate, currentPage, isLoggedIn, logOut} = props

    return (
        <header className={styles.header}>
            <LoftTaxiLogo />
            <div className={styles.headerLinksContainer}>
                <div className={`${styles.headerLink} ${currentPage === "map" && styles.headerLinkActive}`} onClick={() => {onNavigate("map")}}>Карта</div>
                <div className={`${styles.headerLink} ${currentPage === "profile" && styles.headerLinkActive}`} onClick={() => {onNavigate("profile")}}>Профиль</div>
                {
                    isLoggedIn ? (
                        <div className={`${styles.headerLink} ${currentPage === "login" && styles.headerLinkActive}`} onClick={logOut}>Выйти</div>
                    ) : (
                        <div className={`${styles.headerLink} ${currentPage === "login" && styles.headerLinkActive}`} onClick={() => {onNavigate("login")}}>Войти</div>
                    )
                }
            </div>
        </header>
    )
}

Header.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    currentPage: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
}

export default Header
