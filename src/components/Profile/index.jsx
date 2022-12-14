import React, {useState} from "react";
import {TextField} from "@mui/material";
import styles from "./styles/Profile.module.css"
import '../../App.css';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers'


const Profile = () => {

    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvc, setCVC] = useState('');

    const handleSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <div className="page">
            <div className="right-side">
                <form onSubmit={handleSubmitForm} className={`form-container ${styles.profileFormContainer}`}>
                    <div className={styles.formHeader}>
                        <div className={styles.formHeaderText}>Профиль</div>
                        <div className={styles.formHeaderSubText}>Ввдеите платежные данные</div>
                    </div>
                    <div className={`form-body ${styles.registrationFormBody}`}>
                        <div className={styles.cardContainer}>
                            <div className={styles.leftSide}>
                                <TextField required id="name" type="text" value={name} onChange={(event) => {setName(event.target.value)}} label="Имя владельца" variant="standard" />
                                <TextField required id="cardNumber" type="text" inputProps={{
                                    maxLength: 16,
                                }} value={cardNumber} onChange={(event) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (event.target.value === "" || regex.test(event.target.value)) {
                                        setCardNumber(event.target.value)
                                    }
                                }} label="Номер Карты" variant="standard" margin="normal" />
                                <div className={styles.cardDateAndCVC}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <MobileDatePicker
                                            label="MM/YY"
                                            views={['year', 'month']}
                                            inputFormat="MM/YYYY"
                                            value={cardDate}
                                            onChange={(newValue) => {
                                                setCardDate(newValue)
                                            }}
                                            renderInput={(params) => <TextField {...params} margin="normal" variant="standard" />}
                                        />
                                    </LocalizationProvider>
                                    <TextField required id="cvc" type="text" inputProps={{
                                        maxLength: 3,
                                    }} value={cvc} onChange={(event) => {
                                        const regex = /^[0-9\b]+$/;
                                        if (event.target.value === "" || regex.test(event.target.value)) {
                                            setCVC(event.target.value)
                                        }
                                    }} label="CVC" variant="standard" margin="normal" />
                                </div>
                            </div>
                            <div className={styles.rightSide}>
                                <div className={styles.cardRow}>
                                    <div className={styles.cardLogo1} />
                                    <div className={styles.cardDate}>
                                        {
                                            cardDate.$d ? `${cardDate.$d.getMonth()}/${cardDate.$d.getYear()}` : ''
                                        }
                                    </div>
                                </div>
                                <div className={styles.cardNumber}>{cardNumber}</div>
                                <div className={styles.cardRow}>
                                    <div className={styles.cardLogo2} />
                                    <div className={styles.cardLogo3wrapper}>
                                        <div className={styles.cardLogo3_1} />
                                        <div className={styles.cardLogo3_2} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className={`custom-button ${(!name.length || !cardNumber.length || !(cardDate) || !(cvc)) && 'disabled'} ${styles.saveButton}`} type="submit">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile
