import React from  "react";
import { useFormik } from 'formik';
import {Link} from "react-router-dom";
import {TextField} from "@mui/material";
import styles from "./styles/index.module.css";
import '../../../App.css';


export const RegistrationForm = ({ onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            surname: '',
            password: '',
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formik.values)
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className={`form-body ${styles.registrationFormBody}`}>
                    <div className="title">Регистрация</div>

                    <TextField
                        fullWidth
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
                        id="name"
                        name="name"
                        label="Name"
                        data-testid={"email-input"}
                        variant="standard"
                        margin="normal"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Surname"
                        data-testid={"email-input"}
                        variant="standard"
                        margin="normal"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                    />

                    <TextField
                        fullWidth
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

                    <button className={`custom-button ${styles.registrationButton} ${(!formik.values.email.length || !formik.values.name.length || !formik.values.password.length) && 'disabled'}`} type="submit">Зарегистрироваться</button>
                    <div className="link-wrapper">
                        <span>Уже зарегестрированны? </span>
                        <Link to={"/login"}>
                            <span className="link">Войти</span>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}