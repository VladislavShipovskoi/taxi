import React, {useState} from "react";
import {ReactComponent as LoftTaxiLogo} from "../../assets/images/loftTaxiLogo.svg";
import {TextField} from "@mui/material";
import '../../App.css';
import PropTypes from "prop-types";


const Registration = (props) => {
    const {onNavigate} = props

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmitForm = (event) => {
        event.preventDefault()
        onNavigate("map")
    }

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleClickOnLoginButton = () => {
        onNavigate("login")
    }

    return (
        <div className="page">
            <div className="left-side">
                <LoftTaxiLogo />
            </div>
            <div className="right-side">
                <form onSubmit={handleSubmitForm} className="form-container">
                    <div className="form-body">
                        <div className="title">Регистрация</div>
                        <TextField required id="email" type="email" value={email} onChange={handleChangeEmail} label="Email" variant="standard" margin="normal" />
                        <TextField required id="text" type="text" value={name} onChange={handleChangeName} label="Name" variant="standard" margin="normal" />
                        <TextField required id="password" type="password" value={password}  onChange={handleChangePassword} label="Password" variant="standard" margin="normal" />
                        <button className={`custom-button ${(!email.length || !name.length || !password.length) && 'disabled'}`} type="submit">Зарегистрироваться</button>
                        <div className="link-wrapper">
                            <span>Уже зарегестрированны? </span>
                            <span className="link" onClick={handleClickOnLoginButton}>Войти</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

Registration.propTypes = {
    onNavigate: PropTypes.func.isRequired,
}

export default Registration
