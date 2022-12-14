import React, {useState} from "react";
import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo.svg';
import {TextField} from "@mui/material";
import PropTypes from "prop-types";
import '../../App.css';


const Login = (props) => {
    const {onNavigate, logIn} = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleClickOnRegistrationButton = () => {
        onNavigate("registration")
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        logIn(email, password)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <div className="page">
            <div className="left-side">
                <LoftTaxiLogo />
            </div>
            <div className="right-side">
                <form onSubmit={handleSubmitForm} className="form-container">
                    <div className="form-body">
                        <div className="title">Войти</div>
                        <TextField data-testid={"email-input"} required type="email" id="email" value={email} onChange={handleChangeEmail} label="Email" variant="standard" margin="normal" />
                        <TextField data-testid={"password-input"} required  type="password" id="password" value={password} onChange={handleChangePassword} label="Password" variant="standard" margin="normal" />
                        <div className="forgot-password">Забыли пароль?</div>
                        <button className={`custom-button ${(!email.length || !password.length) && 'disabled'}`} type="submit">Войти</button>
                        <div className="link-wrapper">
                            <span>Новый пользователь? </span>
                            <span className="link" onClick={handleClickOnRegistrationButton}>Регистрация</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    logIn: PropTypes.func.isRequired,
}

export default Login
