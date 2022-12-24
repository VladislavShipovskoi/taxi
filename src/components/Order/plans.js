import React, {useState} from "react";
import styles from "./styles/index.module.css";

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

export const Plans = () => {
    const [activePlan, setActivePlan] = useState(PLANS[0].id);

    return (
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
    )
}