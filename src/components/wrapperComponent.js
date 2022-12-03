import React, {Fragment} from "react";

import Header from './Header/index'


const WrapperComponent = ({children, currentPage, navigateTo, ...props}) => {
    return (
        <Fragment>
            {props.isLoggedIn && <Header onNavigate={navigateTo} currentPage={currentPage} {...props} />}
            {children}
        </Fragment>
    )
}

export default WrapperComponent