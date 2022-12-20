import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo.svg';
import '../../App.css';
import {LoginForm} from "./forms/LoginForm";


const Login = ({ isLoggedIn }) => {

    return (
        !isLoggedIn ? (
            <div className="page">
                <div className="left-side">
                    <LoftTaxiLogo />
                </div>
                <div className="right-side">
                    <LoginForm />
                </div>
            </div>
        ) : (
            <Navigate to="/" replace />
        )
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, null)(Login);
