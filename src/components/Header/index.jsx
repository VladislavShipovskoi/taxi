import React from "react";
import { logout} from "../../actions/authActions";
import {connect} from "react-redux";
import {Link, useLocation} from "react-router-dom";

import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo2.svg';
import styles from './styles/index.module.css'


const Header = (props) => {
    const {logout} = props
    let location = useLocation();

    return (
        <header className={styles.header}>
            <LoftTaxiLogo />
            <div className={styles.headerLinksContainer}>
                <Link to={'/'} className={`${location.pathname === "/" ? `${styles.headerLink} ${styles.headerLinkActive}` : styles.headerLink}`}>
                    Карта
                </Link>
                <Link to={'/profile'} className={`${location.pathname === "/profile" ? `${styles.headerLink} ${styles.headerLinkActive}` : styles.headerLink}`}>
                    Профиль
                </Link>
                <div className={`${styles.headerLink}`} onClick={logout}>Выйти</div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);
