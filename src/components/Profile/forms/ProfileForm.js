import React from  "react";
import { useFormik } from 'formik';
import {TextField} from "@mui/material";
import styles from "./styles/index.module.css";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import '../../../App.css';


export const ProfileForm = ({ onSubmit, cardInfo, updated }) => {

    const formik = useFormik({
        initialValues: {
            cardName: cardInfo ? cardInfo.cardName : '',
            cardNumber: cardInfo ? cardInfo.cardNumber : '',
            expiryDate: cardInfo ? dayjs(cardInfo.expiryDate) : '',
            cvc: cardInfo ? cardInfo.cvc : ''
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            ...formik.values,
            expiryDate: formik.values.expiryDate.toISOString()
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`form-body`}>
                <div className={styles.innerBody}>
                    <div className={styles.leftSide}>
                        <TextField
                            fullWidth
                            id="cardName"
                            name="cardName"
                            label="Имя владельца"
                            type="text"
                            variant="standard"
                            margin="normal"
                            value={formik.values.cardName}
                            onChange={formik.handleChange}
                            error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                            helperText={formik.touched.cardName && formik.errors.cardName}
                        />

                        <TextField
                            fullWidth
                            id="cardNumber"
                            name="cardNumber"
                            label="Номер Карты"
                            type="text"
                            variant="standard"
                            margin="normal"
                            inputProps={{maxLength: 16}}
                            value={formik.values.cardNumber}
                            onChange={formik.handleChange}
                            error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                            helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                        />

                        <div className={styles.cardDateAndCVC}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    views={['year', 'month']}
                                    label="MM/YY"
                                    inputFormat="MM/YY"
                                    name="expiryDate"

                                    onChange={(value) => {
                                        formik.setFieldValue('expiryDate', value);
                                    }}
                                    value={formik.values.expiryDate}
                                    error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                                    helperText={formik.touched.expiryDate && formik.errors.expiryDate}

                                    renderInput={(params) => (
                                        <TextField {...params} margin="normal" variant="standard" />
                                    )}
                                />
                            </LocalizationProvider>


                            <TextField
                                fullWidth
                                id="cvc"
                                name="cvc"
                                label="CVC"
                                type="text"
                                variant="standard"
                                margin="normal"
                                inputProps={{
                                    maxLength: 3,
                                }}
                                value={formik.values.cvc}
                                onChange={formik.handleChange}
                                error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                                helperText={formik.touched.cvc && formik.errors.cvc}
                            />
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.cardRow}>
                            <div className={styles.cardLogo1} />
                            <div className={styles.cardDate}>
                                {
                                    formik.values.expiryDate && formik.values.expiryDate.$d ? `${formik.values.expiryDate.$d.getMonth()+1}/${formik.values.expiryDate.$d.getFullYear()}` : formik.values.expiryDate
                                }
                            </div>
                        </div>
                        <div className={styles.cardNumber}>{formik.values.cardNumber}</div>
                        <div className={styles.cardRow}>
                            <div className={styles.cardLogo2} />
                            <div className={styles.cardLogo3wrapper}>
                                <div className={styles.cardLogo3_1} />
                                <div className={styles.cardLogo3_2} />
                            </div>
                        </div>
                    </div>
                </div>

                <button disabled={!(formik.isValid && formik.dirty)} className={`custom-button ${!(formik.isValid && formik.dirty) && 'disabled'} ${styles.saveButton}`} type="submit">Сохранить</button>
            </div>
        </form>
    );
}