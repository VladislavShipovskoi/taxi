import React from  "react";
import { useFormik } from 'formik';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {authenticateRequest} from "../../../features/Auth/actions";
import styles from "./styles/index.module.css";
import '../../../App.css';


export const LoginForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: data => {
            dispatch(authenticateRequest(data))
        },
    });

    return (
        <div className="form-container">
            <form onSubmit={formik.handleSubmit}>
                <div className={`form-body ${styles.loginFormBody}`}>
                    <div className="title">Войти</div>

                    <TextField
                        fullWidth
                        required
                        id="email"
                        name="email"
                        label="Email"
                        data-testid={"email-input"}
                        type="email"
                        variant="standard"
                        margin="normal"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <TextField
                        fullWidth
                        required
                        id="password"
                        name="password"
                        label="Password"
                        data-testid={"password-input"}
                        type="password"
                        variant="standard"
                        margin="normal"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />

                    <div className="forgot-password">Забыли пароль?</div>
                    <button className={`custom-button ${styles.loginButton} ${(!formik.values.email.length || !formik.values.password.length) && 'disabled'}`} type="submit">Войти</button>
                    <div className="link-wrapper">
                        <span>Новый пользователь? </span>
                        <Link to={"/registration"}>
                            <span className="link">Регистрация</span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}