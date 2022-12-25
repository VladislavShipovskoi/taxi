import React, {useState} from "react";
import {connect} from "react-redux";
import styles from "./styles/index.module.css";
import {clearRoute, getRouteRequest} from "../../features/Routes/actions";
import { useNavigate } from "react-router-dom";
import {OrderForm} from "./forms/OrderForm";
import '../../App.css';


const Order = (props) => {
    const {addressList, cardInfo, getRoute, clearRoute} = props;
    const [order, setOrder] = useState(false);


    const handleSubmit = (address) => {
        getRoute(address.fromAddress, address.toAddress)
        setOrder(true)
    }

    const navigate = useNavigate();

    return (
        <div className={styles.form}>
            {
                (cardInfo) ? (
                    !order ? (
                        <React.Fragment>
                            <OrderForm onSubmit={handleSubmit} addressList={addressList} />
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