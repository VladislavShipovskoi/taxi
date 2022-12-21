import React from "react";
import {ReactComponent as LoftTaxiLogo} from "../../assets/images/loftTaxiLogo.svg";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RegistrationForm} from "./forms/RegistrationForm";
import '../../App.css';
import {registrationRequest} from "../../features/Registration/actions";


const Registration = ({ isLoggedIn, registration }) => {

    return (
        !isLoggedIn ? (
            <div className="page">
                <div className="left-side">
                    <LoftTaxiLogo />
                </div>
                <div className="right-side">
                    <RegistrationForm onSubmit={({ email, password, name, surname}) => {
                        registration(email, password, name, surname)
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
        registration: (email, password, name, surname) => dispatch(registrationRequest({email, password, name, surname})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
