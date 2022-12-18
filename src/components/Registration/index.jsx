import React, {useState} from "react";
import {ReactComponent as LoftTaxiLogo} from "../../assets/images/loftTaxiLogo.svg";
import {TextField} from "@mui/material";
import {Link, Navigate} from "react-router-dom";
import styles from "./styles/Registration.module.css"
import {registrationRequest} from "../../features/Registration/actions";
import {connect} from "react-redux";
import '../../App.css';


const Registration = ({ isLoggedIn, registration }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmitForm = (event) => {
        event.preventDefault()
        registration(email, password, name, surname)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        !isLoggedIn ? (
            <div className="page">
                <div className="left-side">
                    <LoftTaxiLogo />
                </div>
                <div className="right-side">
                    <form onSubmit={handleSubmitForm} className="form-container">
                        <div className={`form-body ${styles.registrationFormBody}`}>
                            <div className="title">Регистрация</div>
                            <TextField required id="email" type="email" value={email} onChange={handleChangeEmail} label="Email" variant="standard" margin="normal" />
                            <TextField required id="name" type="text" value={name} onChange={handleChangeName} label="Name" variant="standard" margin="normal" />
                            <TextField required id="surname" type="text" value={surname} onChange={handleChangeSurname} label="Surname" variant="standard" margin="normal" />
                            <TextField required id="password" type="password" value={password}  onChange={handleChangePassword} label="Password" variant="standard" margin="normal" />
                            <button className={`custom-button ${(!email.length || !name.length || !password.length) && 'disabled'}`} type="submit">Зарегистрироваться</button>
                            <div className="link-wrapper">
                                <span>Уже зарегестрированны? </span>
                                <Link to={"/login"}>
                                    <span className="link">Войти</span>
                                </Link>
                            </div>
                        </div>
                    </form>
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
