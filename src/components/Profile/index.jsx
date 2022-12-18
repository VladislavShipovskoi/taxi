import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import styles from "./styles/Profile.module.css"
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DesktopDatePicker} from '@mui/x-date-pickers'
import {connect} from "react-redux";
import {getCardInfoRequest, updateCardInfoRequest} from "../../features/Profile/actions";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import '../../App.css';


const Profile = ({ getCardInfo, getCardInfoIsRequested, updateCardInfo, cardInfo, getCardInfoIsSuccess }) => {

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvc, setCVC] = useState('');
    const [updated, setUpdated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!getCardInfoIsRequested) {
            getCardInfo()
        }
    }, [getCardInfoIsRequested])

    useEffect(() => {
        if (getCardInfoIsSuccess && cardInfo) {
            setCardName(cardInfo.cardName || '')
            setCardNumber(cardInfo.cardNumber || '')

            const splitValues = cardInfo.expiryDate.split('/')
            setCardDate(dayjs(`${splitValues[0]}-1-${splitValues[1]}`))

            setCVC(cardInfo.cvc && cardInfo.cvc)
        }
    }, [cardInfo, getCardInfoIsSuccess])

    const handleSubmitForm = (event) => {
        event.preventDefault()
        updateCardInfo({
            cardName: cardName,
            cardNumber: cardNumber,
            expiryDate: `${cardDate.$d.getMonth()+1}/${cardDate.$d.getFullYear()}`,
            cvc: cvc
        })
        setUpdated(true)
    }

    const haveChanges = () => {
        return (!!cardName.length && !!cardNumber.length && !!cvc.length && cardDate) &&
            (cardName !== ((cardInfo && cardInfo.cardName) || '') || cardNumber !== ((cardInfo && cardInfo.cardNumber) || '') || cvc !== ((cardInfo && cardInfo.cvc) || ''));
    }

    return (
        <div className="page">
            <div className="right-side">
                <form onSubmit={handleSubmitForm} className={`form-container ${styles.profileFormContainer}`}>
                    <div className={styles.formHeader}>
                        <div className="formHeaderText">Профиль</div>
                        <div className="formHeaderSubText">
                            {
                                !updated ? (
                                    'Ввдеите платежные данные'
                                ) : (
                                    'Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                                )
                            }
                        </div>
                    </div>
                    <div className={`form-body ${styles.registrationFormBody}`}>
                        <div className={styles.cardContainer}>
                            {
                                !updated &&  (
                                    <React.Fragment>
                                        <div className={styles.leftSide}>
                                            <TextField required id="name"
                                                       type="text"
                                                       value={cardName}
                                                       onChange={(event) => {setCardName(event.target.value)}}
                                                       label="Имя владельца"
                                                       variant="standard"
                                            />
                                            <TextField required id="cardNumber"
                                                       type="text"
                                                       inputProps={{maxLength: 16}}
                                                       value={cardNumber}
                                                       onChange={(event) => {
                                                           const regex = /^[0-9\b]+$/;
                                                           if (event.target.value === "" || regex.test(event.target.value)) {
                                                               setCardNumber(event.target.value)
                                                           }
                                                       }}
                                                       label="Номер Карты"
                                                       variant="standard"
                                                       margin="normal"
                                            />
                                            <div className={styles.cardDateAndCVC}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DesktopDatePicker
                                                        views={['year', 'month']}
                                                        label="MM/YY"
                                                        inputFormat="MM/YY"
                                                        value={cardDate}
                                                        onChange={(newValue) => {
                                                            setCardDate(newValue)
                                                        }}
                                                        renderInput={(params) => <TextField {...params} margin="normal" variant="standard" />}
                                                    />
                                                </LocalizationProvider>

                                                <TextField
                                                    required
                                                    id="cvc"
                                                    type="text" inputProps={{
                                                    maxLength: 3,
                                                }}
                                                    value={cvc}
                                                    onChange={(event) => {
                                                        const regex = /^[0-9\b]+$/;
                                                        if (event.target.value === "" || regex.test(event.target.value)) {
                                                            setCVC(event.target.value)
                                                        }
                                                    }}
                                                    label="CVC"
                                                    variant="standard"
                                                    margin="normal" />
                                            </div>
                                        </div>
                                        <div className={styles.rightSide}>
                                            <div className={styles.cardRow}>
                                                <div className={styles.cardLogo1} />
                                                <div className={styles.cardDate}>
                                                    {
                                                        cardDate && cardDate.$d ? `${cardDate.$d.getMonth()+1}/${cardDate.$d.getFullYear()}` : cardDate
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
                                    </React.Fragment>
                                )
                            }
                        </div>

                        {
                            !updated ? (
                                <button className={`custom-button ${!haveChanges() && 'disabled'} ${styles.saveButton}`} type="submit">Сохранить</button>
                            ) : (
                                <button className={"custom-button"} type="submit" onClick={() => navigate('/map')}>Перейти на карту</button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cardInfo: state.card.cardInfo,
    getCardInfoIsSuccess: state.card.isSuccess,
    getCardInfoIsRequested: state.card.isRequested,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getCardInfo: () => dispatch(getCardInfoRequest()),
        updateCardInfo: (card) => dispatch(updateCardInfoRequest(card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
