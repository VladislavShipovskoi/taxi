import React, {useState} from "react";
import {TextField} from "@mui/material";
import {connect} from "react-redux";
import {Link, Navigate} from "react-router-dom";
import { authenticateRequest } from "../../features/Auth/actions";
import {ReactComponent as LoftTaxiLogo} from '../../assets/images/loftTaxiLogo.svg';
import styles from "./styles/Login.module.css"
import '../../App.css';


const Login = (props) => {
    const { authenticate, isLoggedIn } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmitForm = (event) => {
        event.preventDefault()
        authenticate(email, password)
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
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
                        <div className={`form-body ${styles.loginFormBody}`}>
                            <div className="title">Войти</div>
                            <TextField data-testid={"email-input"} required type="email" id="email" value={email} onChange={handleChangeEmail} label="Email" variant="standard" margin="normal" />
                            <TextField data-testid={"password-input"} required  type="password" id="password" value={password} onChange={handleChangePassword} label="Password" variant="standard" margin="normal" />
                            <div className="forgot-password">Забыли пароль?</div>
                            <button className={`custom-button ${(!email.length || !password.length) && 'disabled'}`} type="submit">Войти</button>
                            <div className="link-wrapper">
                                <span>Новый пользователь? </span>
                                <Link to={"/registration"}>
                                    <span className="link">Регистрация</span>
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
        authenticate: (email, password) => dispatch(authenticateRequest({email, password})),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
