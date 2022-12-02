import React, {Fragment} from "react";

import Header from './Header/index'


const WrapperComponent = ({children, currentPage, navigateTo}) => {
    return (
        <Fragment>
            {!["login", "registration"].includes(currentPage) && <Header onNavigate={navigateTo} currentPage={currentPage} />}
            {children}
        </Fragment>
    )
}

export default WrapperComponent