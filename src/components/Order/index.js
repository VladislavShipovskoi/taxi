import React, {useState} from "react";
import {connect} from "react-redux";
import styles from "./styles/index.module.css";
import {Autocomplete, TextField} from "@mui/material";
import {clearRoute, getRouteRequest} from "../../features/Routes/actions";
import { useNavigate } from "react-router-dom";
import '../../App.css';


const PLANS = [
    {
        id: 1,
        name: 'Стандарт',
        price: 150
    },
    {
        id: 2,
        name: 'Премиум',
        price: 250
    },
    {
        id: 3,
        name: 'Бизнес',
        price: 300
    }
]


const Order = (props) => {
    const {addressList, cardInfo, getRoute, clearRoute} = props;

    const [fromAddress, setFromAddress] = useState(addressList[0]);
    const [toAddress, setToAddress] = useState(addressList[1]);
    const [order, setOrder] = useState(false);
    const [activePlan, setActivePlan] = useState(PLANS[0].id);


    const handleOrderClick = () => {
        getRoute(fromAddress, toAddress)
        setOrder(true)
    }

    const navigate = useNavigate();

    return (
        <div className={styles.form}>
            {
                (cardInfo) ? (
                    !order ? (
                        <React.Fragment>
                            <div className={styles.inputsContainer}>
                                <Autocomplete
                                    disablePortal
                                    id="fromAddress"
                                    value={fromAddress}
                                    onChange={(event, newValue) => {
                                        setFromAddress(newValue);
                                    }}
                                    options={addressList.filter((address) => address !== toAddress)}
                                    renderInput={(params) => <TextField {...params} label="Откуда" />}
                                />
                                <Autocomplete
                                    disablePortal
                                    id="toAddress"
                                    value={toAddress}
                                    onChange={(event, newValue) => {
                                        setToAddress(newValue);
                                    }}
                                    options={addressList.filter((address) => address !== fromAddress)}
                                    renderInput={(params) => <TextField {...params} label="Куда" />}
                                />
                            </div>

                            <div className={styles.carForm}>
                                <div className={styles.carContainer}>
                                    {
                                        PLANS.map((plan, index) => {
                                            return (
                                                <div className={`${styles.car} ${plan.id === activePlan ? styles.planActive : ''}`} key={`plan-${index}`} onClick={() => {
                                                    setActivePlan(plan.id)
                                                }}>
                                                    <div className={styles.planName}>{plan.name}</div>
                                                    <div className={styles.planPriceLabel}>Стоимость</div>
                                                    <div className={styles.planPrice}>{`${plan.price} ₽`}</div>
                                                    <div className={styles.standardPlan} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <button className={`custom-button ${((fromAddress && !fromAddress.length) || (toAddress && !toAddress.length)) && 'disabled'}`} type="submit" onClick={handleOrderClick}>Заказать</button>
                            </div>

                        </React.Fragment>
                    ) : (
                            <div className="containerWithPadding">
                                <div className="formHeaderText">Заказ размещен</div>
                                <div className="formHeaderSubText">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
                                <button className={`custom-button ${styles.orderCompleteButton}`} onClick={() => {
                                    setOrder(false)
                                    clearRoute()
                                }}>
                                    Сделать новый заказ
                                </button>
                            </div>
                        )
                ) : (
                    <div className="containerWithPadding">
                        <div className="title">Заполните данные профиля</div>
                        <button className={`custom-button ${styles.goToProfileButton}`} type="submit" onClick={() => navigate('/profile')}>Перейти в профиль</button>
                    </div>
                )
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRoute: (from, to) => dispatch(getRouteRequest({from, to})),
        clearRoute: () => dispatch(clearRoute())
    }
}

export default connect(null, mapDispatchToProps)(Order)