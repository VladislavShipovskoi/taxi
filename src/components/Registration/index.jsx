import React from "react";
import {ReactComponent as LoftTaxiLogo} from "../../assets/images/loftTaxiLogo.svg";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RegistrationForm} from "./forms/RegistrationForm";
import '../../App.css';


const Registration = ({ isLoggedIn }) => {

    return (
        !isLoggedIn ? (
            <div className="page">
                <div className="left-side">
                    <LoftTaxiLogo />
                </div>
                <div className="right-side">
                    <RegistrationForm />
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

export default connect(mapStateToProps, null)(Registration);
