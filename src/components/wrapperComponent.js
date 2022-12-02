import React, {Fragment} from "react";

import Header from './Header/index'


const WrapperComponent = ({children, currentPage, navigateTo, ...props}) => {
    return (
        <Fragment>
            {!["login", "registration"].includes(currentPage) && <Header onNavigate={navigateTo} currentPage={currentPage} {...props} />}
            {children}
        </Fragment>
    )
}

export default WrapperComponent