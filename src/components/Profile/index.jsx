import React, {useEffect, useState} from "react";
import styles from "./styles/Profile.module.css"
import {connect} from "react-redux";
import {getCardInfoRequest, updateCardInfoRequest} from "../../features/Profile/actions";
import {useNavigate} from "react-router-dom";
import {ProfileForm} from "./forms/ProfileForm";
import '../../App.css';


const Profile = ({ getCardInfo, getCardInfoIsRequested, updateCardInfo, cardInfo, getCardInfoIsSuccess }) => {

    const [updated, setUpdated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!getCardInfoIsRequested) {
            getCardInfo()
        }
    }, [getCardInfo, getCardInfoIsRequested])

    return (
        <div className="page">
            <div className="right-side">

                {getCardInfoIsSuccess && cardInfo && (
                    <div className={`form-container ${styles.profileFormContainer}`}>
                        <div className={styles.formHeaderContainer}>
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

                        {
                            !updated ? (
                                <div>
                                    <ProfileForm
                                        onSubmit={(cardInfo) => {
                                            updateCardInfo(cardInfo)
                                            setUpdated(true)
                                        }}
                                        cardInfo={cardInfo}
                                    />
                                </div>
                            ) : (
                                <div className={styles.toMapButton}>
                                    <button className={"custom-button"} type="submit" onClick={() => navigate('/map')}>Перейти на карту</button>
                                </div>
                            )
                        }
                    </div>
                )}
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
