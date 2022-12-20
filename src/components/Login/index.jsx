import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo.svg';
import '../../App.css';
import {LoginForm} from "./forms/LoginForm";
import {authenticateRequest} from "../../features/Auth/actions";


const Login = ({ isLoggedIn, authenticate }) => {

    return (
        !isLoggedIn ? (
            <div className="page">
                <div className="left-side">
                    <LoftTaxiLogo />
                </div>
                <div className="right-side">
                    <LoginForm onSubmit={({email, password}) => {
                        authenticate(email, password)
                    }} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: (email, password) => dispatch(authenticateRequest({email, password})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
