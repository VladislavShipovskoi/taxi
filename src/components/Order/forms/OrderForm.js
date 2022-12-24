import React from  "react";
import { useFormik } from 'formik';
import {Autocomplete, TextField} from "@mui/material";
import styles from "./styles/index.module.css";
import {Plans} from "../plans";
import '../../../App.css';


export const OrderForm = ({ addressList, onSubmit }) => {

    const formik = useFormik({
        initialValues: {
            fromAddress: addressList[0],
            toAddress: addressList[1],
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit(formik.values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputsContainer}>
                <Autocomplete
                    data-testid="fromAddress"
                    disablePortal
                    id="fromAddress"
                    name="fromAddress"
                    value={formik.values.fromAddress}
                    onChange={(event, value) => {
                        formik.setFieldValue('fromAddress', value);
                    }}
                    options={addressList.filter((address) => address !== formik.values.toAddress)}
                    renderInput={(params) => <TextField {...params} label="Откуда" />}
                />
                <Autocomplete
                    data-testid="toAddress"
                    disablePortal
                    id="toAddress"
                    name="toAddress"
                    value={formik.values.toAddress}
                    onChange={(event, value) => {
                        formik.setFieldValue('toAddress', value);
                    }}
                    options={addressList.filter((address) => address !== formik.values.fromAddress)}
                    renderInput={(params) => <TextField {...params} label="Куда" />}
                />
            </div>

            <div className={styles.carForm}>
                <Plans />
                <button disabled={!(formik.isValid && formik.dirty)} className={`custom-button ${!(formik.isValid && formik.dirty) && 'disabled'}`} type="submit">Заказать</button>
            </div>
        </form>
    );
}